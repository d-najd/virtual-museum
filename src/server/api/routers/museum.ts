import { MuseumType, type Prisma } from "generated/prisma"
import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

export const museumSearchSchema = z
	.object({
		query: z.string().optional(),
		// city: z.string().optional(),
		// type: z.nativeEnum(MuseumType).optional(),
		// authorName: z.string().optional(),
		// artworkTitle: z.string().optional(),
	})
	.optional()

export const museumRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(museumSearchSchema)
		.query(async ({ ctx, input }) => {
			const whereConditions: Prisma.MuseumWhereInput[] = []

			if (!input) return

			if (input.query && input.query.trim() !== "") {
				const query = input.query.trim()

				const matchingTypes = Object.values(MuseumType).filter((type) =>
					type.toLowerCase().includes(query.toLowerCase()),
				)

				whereConditions.push({
					OR: [
						{ name: { contains: query } },
						{ city: { contains: query } },
						{ description: { contains: query } },
						...(matchingTypes.length > 0
							? [{ type: { in: matchingTypes } }]
							: []),
						{
							artworks: {
								some: {
									title: { contains: query },
								},
							},
						},
						{
							artworks: {
								some: {
									author: {
										OR: [
											{ firstName: { contains: query } },
											{ lastName: { contains: query } },
										],
									},
								},
							},
						},
					],
				})
			}

			return ctx.db.museum.findMany({
				where:
					whereConditions.length > 0 ? { AND: whereConditions } : {},
			})
		}),
})
