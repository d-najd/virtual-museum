import { MuseumType, PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

async function main() {
	await prisma.artworkMedia.deleteMany()
	await prisma.artwork.deleteMany()
	await prisma.author.deleteMany()
	await prisma.museum.deleteMany()

	const daVinci = await prisma.author.create({
		data: { firstName: "Leonardo", lastName: "da Vinci" },
	})
	const delacroix = await prisma.author.create({
		data: { firstName: "Eugène", lastName: "Delacroix" },
	})
	const rembrandt = await prisma.author.create({
		data: { firstName: "Rembrandt", lastName: "van Rijn" },
	})
	const vermeer = await prisma.author.create({
		data: { firstName: "Johannes", lastName: "Vermeer" },
	})
	const botticelli = await prisma.author.create({
		data: { firstName: "Sandro", lastName: "Botticelli" },
	})
	const michelangelo = await prisma.author.create({
		data: { firstName: "Michelangelo", lastName: "Buonarroti" },
	})
	const vanGogh = await prisma.author.create({
		data: { firstName: "Vincent", lastName: "van Gogh" },
	})
	const picasso = await prisma.author.create({
		data: { firstName: "Pablo", lastName: "Picasso" },
	})

	await prisma.museum.create({
		data: {
			name: "Louvre Museum",
			description:
				"The world's largest art museum, located in Paris, France.",
			city: "Paris",
			address: "75001 Paris, France",
			coverImageUrl:
				"https://images.unsplash.com/photo-1565099824688-e93eb20fe622",
			type: MuseumType.ART,
			artworks: {
				create: [
					{
						title: "Mona Lisa",
						description: "Half-length portrait of Lisa Gherardini.",
						authorId: daVinci.id,
					},
					{
						title: "Virgin of the Rocks",
						description:
							"Depicts the Madonna and Christ Child in a rocky setting.",
						authorId: daVinci.id,
					},
					{
						title: "St. John the Baptist",
						description: "Believed to be Leonardo's last painting.",
						authorId: daVinci.id,
					},
					{
						title: "Liberty Leading the People",
						description:
							"Commemorating the July Revolution of 1830.",
						authorId: delacroix.id,
					},
					{
						title: "The Death of Sardanapalus",
						description:
							"Based on the tale of Sardanapalus, king of Assyria.",
						authorId: delacroix.id,
					},
					{
						title: "The Astronomer",
						description: "Depicts an astronomer examining a globe.",
						authorId: vermeer.id, 
					},
				],
			},
		},
	})

	await prisma.museum.create({
		data: {
			name: "Rijksmuseum",
			description:
				"Dutch national museum dedicated to arts and history in Amsterdam.",
			city: "Amsterdam",
			address: "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
			coverImageUrl:
				"https://images.unsplash.com/photo-1584003564911-a7a321c84e1c",
			type: MuseumType.ART,
			artworks: {
				create: [
					{
						title: "The Night Watch",
						description:
							"Famous for its monumental size and dramatic use of light.",
						authorId: rembrandt.id,
					},
					{
						title: "The Jewish Bride",
						description:
							"Depicts an intimate moment between a couple.",
						authorId: rembrandt.id,
					},
					{
						title: "Syndics of the Drapers' Guild",
						description:
							"Group portrait of the inspectors of the drapers guild.",
						authorId: rembrandt.id,
					},
					{
						title: "The Milkmaid",
						description:
							"Depicts a domestic kitchen maid pouring milk.",
						authorId: vermeer.id,
					},
					{
						title: "The Little Street",
						description: "A view of a quiet street in Delft.",
						authorId: vermeer.id,
					},
					{
						title: "Self-Portrait with Grey Felt Hat",
						description:
							"One of Van Gogh's boldest color experiments in Paris.",
						authorId: vanGogh.id, 
					},
				],
			},
		},
	})

	await prisma.museum.create({
		data: {
			name: "Uffizi Gallery",
			description:
				"Prominent art museum located side-by-side with the Piazza della Signoria in Florence.",
			city: "Florence",
			address: "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",
			coverImageUrl:
				"https://images.unsplash.com/photo-1543429776-2782fc8e1acd",
			type: MuseumType.ART,
			artworks: {
				create: [
					{
						title: "The Birth of Venus",
						description:
							"Depicts Venus emerging from the sea on a shell.",
						authorId: botticelli.id,
					},
					{
						title: "Primavera",
						description:
							"Large panel painting depicting allegorical mythological figures.",
						authorId: botticelli.id,
					},
					{
						title: "Adoration of the Magi",
						description:
							"Features portraits of prominent members of the Medici family.",
						authorId: botticelli.id,
					},
					{
						title: "Doni Tondo",
						description:
							"The only finished panel painting by the mature Michelangelo to survive.",
						authorId: michelangelo.id,
					},
					{
						title: "Bacchus",
						description:
							"Marble sculpture depicting Bacchus, the Roman god of wine.",
						authorId: michelangelo.id,
					},
					{
						title: "Annunciation",
						description:
							"Early masterpiece depicting the Angel Gabriel greeting Mary.",
						authorId: daVinci.id, 
					},
				],
			},
		},
	})

	await prisma.museum.create({
		data: {
			name: "Museum of Modern Art",
			description:
				"Leading museum of modern art located in Midtown Manhattan, New York City.",
			city: "New York",
			address: "11 W 53rd St, New York, NY 10019, USA",
			coverImageUrl:
				"https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
			type: MuseumType.ART,
			artworks: {
				create: [
					{
						title: "The Starry Night",
						description:
							"Depicts the view from his asylum room in Saint-Rémy-de-Provence.",
						authorId: vanGogh.id,
					},
					{
						title: "The Olive Trees",
						description:
							"Series of paintings executed in Saint-Rémy-de-Provence.",
						authorId: vanGogh.id,
					},
					{
						title: "Les Demoiselles d'Avignon",
						description:
							"Portrays five nude female figures in a proto-Cubist style.",
						authorId: picasso.id,
					},
					{
						title: "Girl before a Mirror",
						description:
							"Shows Picasso's mistress Marie-Thérèse Walter.",
						authorId: picasso.id,
					},
					{
						title: "Three Musicians",
						description:
							"Large synthetic cubism painting representing a band.",
						authorId: picasso.id,
					},
					{
						title: "Water Lilies triptych",
						description:
							"Monumental impressionist painting of Monet's water garden.",
						authorId: (
							await prisma.author.create({
								data: {
									firstName: "Claude",
									lastName: "Monet",
								},
							})
						).id,
					},
				],
			},
		},
	})

	console.log("Database seeded successfully!")
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
