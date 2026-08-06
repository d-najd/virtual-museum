import { type Prisma } from "generated/prisma"

import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

export const artworkSearchSchema = z.object({
	museumId: z.number(),
	query: z.string().optional(),
})

export const artworkRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(artworkSearchSchema)
		.query(async ({ ctx, input }) => {
			const whereConditions: Prisma.ArtworkWhereInput[] = [
				{ museumId: input.museumId },
			]

			if (input.query && input.query.trim() !== "") {
				const query = input.query.trim()
				whereConditions.push({
					OR: [
						{ title: { contains: query } },
						{ description: { contains: query } },
						{
							author: {
								OR: [
									{ firstName: { contains: query } },
									{ lastName: { contains: query } },
								],
							},
						},
					],
				})
			}

			return ctx.db.artwork.findMany({
				where: { AND: whereConditions },
				include: { author: true },
			})
		}),
	getOne: publicProcedure
		.input(z.object({ id: z.number() }))
		.query(async ({ ctx, input }) => {
			return ctx.db.artwork.findUnique({
				where: { id: input.id },
				include: { author: true },
			})
		}),
})
