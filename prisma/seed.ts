import { MuseumType, PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

async function main() {
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
						coverImageUrl:
							"https://imgs.search.brave.com/Y2gl_EOXa8i9UnXmmwNxkKQTAttQl6ArR_fRSLx6U00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2VjL01v/bmFfTGlzYSUyQ19i/eV9MZW9uYXJkb19k/YV9WaW5jaSUyQ19m/cm9tX0MyUk1GX3Jl/dG91Y2hlZC5qcGcv/MzMwcHgtTW9uYV9M/aXNhJTJDX2J5X0xl/b25hcmRvX2RhX1Zp/bmNpJTJDX2Zyb21f/QzJSTUZfcmV0b3Vj/aGVkLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PXBhcnNlciZ1dG1f/Y29udGVudD10aHVt/Ym5haWw",
						authorId: daVinci.id,
					},
					{
						title: "Virgin of the rocks",
						description:
							"Depicts the Madonna and Christ Child in a rocky setting.",
						coverImageUrl:
							"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg/330px-Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
						authorId: daVinci.id,
					},
					{
						title: "St. John the Baptist",
						description: "Believed to be Leonardo's last painting.",
						coverImageUrl:
							"https://imgs.search.brave.com/CNe92VvaZgtXUVGfA7jGWfB_9loa_iesxdgIhMoLx90/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84Lzg4L0Fj/Y2FkZW1pYV8tX1N0/X0pvaG5fdGhlX0Jh/cHRpc3RfYnlfVGl0/aWFuX0NhdDMxNC5q/cGcvMjUwcHgtQWNj/YWRlbWlhXy1fU3Rf/Sm9obl90aGVfQmFw/dGlzdF9ieV9UaXRp/YW5fQ2F0MzE0Lmpw/Zz91dG1fc291cmNl/PWVuLndpa2lwZWRp/YS5vcmcmdXRtX2Nh/bXBhaWduPXBhcnNl/ciZ1dG1fY29udGVu/dD10aHVtYm5haWw",
						authorId: daVinci.id,
					},
					{
						title: "Liberty Leading the People",
						description:
							"Commemorating the July Revolution of 1830.",
						coverImageUrl:
							"https://imgs.search.brave.com/fhIGZwuv3ecIWHkquB3A1jJ0SXmZHReaEpmEFgRswLY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzAyL0xh/X0xpYmVydCVDMyVB/OV9ndWlkYW50X2xl/X3BldXBsZV8tX0V1/ZyVDMyVBOG5lX0Rl/bGFjcm9peF8tX011/cyVDMyVBOWVfZHVf/TG91dnJlX1BlaW50/dXJlc19SRl8xMjlf/LV9hcHIlQzMlQThz/X3Jlc3RhdXJhdGlv/bl8yMDI0LmpwZy81/MDBweC1MYV9MaWJl/cnQlQzMlQTlfZ3Vp/ZGFudF9sZV9wZXVw/bGVfLV9FdWclQzMl/QThuZV9EZWxhY3Jv/aXhfLV9NdXMlQzMl/QTllX2R1X0xvdXZy/ZV9QZWludHVyZXNf/UkZfMTI5Xy1fYXBy/JUMzJUE4c19yZXN0/YXVyYXRpb25fMjAy/NC5qcGc_dXRtX3Nv/dXJjZT1lbi53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWls",
						authorId: delacroix.id,
					},
					{
						title: "The Death of Sardanapalus",
						description:
							"Based on the tale of Sardanapalus, king of Assyria.",
						coverImageUrl:
							"https://imgs.search.brave.com/gNL-l5CGiaKJdbCRyRjQmhmloYaQPrr1cOnzpcOGNWs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2QwL0xh/X01vcnRfZGVfU2Fy/ZGFuYXBhbGVfLV9F/dWclQzMlQThuZV9E/ZWxhY3JvaXhfLV9N/dXMlQzMlQTllX2R1/X0xvdXZyZV9QZWlu/dHVyZXNfUkZfMjM0/Ni5qcGcvMzMwcHgt/TGFfTW9ydF9kZV9T/YXJkYW5hcGFsZV8t/X0V1ZyVDMyVBOG5l/X0RlbGFjcm9peF8t/X011cyVDMyVBOWVf/ZHVfTG91dnJlX1Bl/aW50dXJlc19SRl8y/MzQ2LmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PXBhcnNlciZ1dG1f/Y29udGVudD10aHVt/Ym5haWw",
						authorId: delacroix.id,
					},
					{
						title: "The Astronomer",
						description: "Depicts an astronomer examining a globe.",
						coverImageUrl:
							"https://imgs.search.brave.com/drDJXtFCnJx-MiRHnAyYdK5hSOcwq_2U5gYn3qazqOE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2U0L0pv/aGFubmVzX1Zlcm1l/ZXJfLV9UaGVfQXN0/cm9ub21lcl8tXzE2/NjguanBnLzMzMHB4/LUpvaGFubmVzX1Zl/cm1lZXJfLV9UaGVf/QXN0cm9ub21lcl8t/XzE2NjguanBnP3V0/bV9zb3VyY2U9ZW4u/d2lraXBlZGlhLm9y/ZyZ1dG1fY2FtcGFp/Z249cGFyc2VyJnV0/bV9jb250ZW50PXRo/dW1ibmFpbA",
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
				"https://imgs.search.brave.com/aABWHqzYQyBrbanwilGKBYqdH8M3bC8qnqAA-vhrYok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFiL1JpamtzbXVz/ZXVtX2luX0Ftc3Rl/cmRhbS5qcGc",
			type: MuseumType.HISTORY,
			artworks: {
				create: [
					{
						title: "The Night Watch",
						description:
							"Famous for its monumental size and dramatic use of light.",
						coverImageUrl:
							"https://imgs.search.brave.com/3aa9x67b9vLsXcpl8to79nSVKcWh-F7n1wsLUkCip7o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2Np/L0FMMThnX1FFRjdC/MDVDcDVhdmxFNmxX/eUtWV2JzSHRPV040/LWdGb2xrQzhDRXRk/RjRkckFMbF9BZG9l/U25xNzVzQ0NzTEFu/TmFDdjlRZHhH",
						authorId: rembrandt.id,
					},
					{
						title: "The Jewish Bride",
						description:
							"Depicts an intimate moment between a couple.",
						coverImageUrl:
							"https://imgs.search.brave.com/Nxf_gJIXi6fAL_7gkFj5peh_z4ReLgh0TbJ-2VDv_DI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamV3aXNobmV3/cy5jby51ay9qZXdp/c2huZXdzL3VwbG9h/ZHMvMjAxNC8xMS9K/TjItdHVybi10b3At/SmV3aXNoLUJyaWRl/MS0xMDI0eDY0MC5q/cGc",
						authorId: rembrandt.id,
					},
					{
						title: "Syndics of the Drapers' Guild",
						description:
							"Group portrait of the inspectors of the drapers guild.",
						coverImageUrl:
							"https://imgs.search.brave.com/qGfm13cExEk6kqOcEJ91_dlJTC4qo3GRGTa1zKA8Z7o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L1Jl/bWJyYW5kdF8tX0Rl/X1N0YWFsbWVlc3Rl/cnMtX2hldF9jb2xs/ZWdlX3Zhbl9zdGFh/bG1lZXN0ZXJzXyUy/OHdhYXJkaWpucyUy/OV92YW5faGV0X0Ft/c3RlcmRhbXNlX2xh/a2VuYmVyZWlkZXJz/Z2lsZGVfLV9Hb29n/bGVfQXJ0X1Byb2pl/Y3QuanBnLzUxMnB4/LVJlbWJyYW5kdF8t/X0RlX1N0YWFsbWVl/c3RlcnMtX2hldF9j/b2xsZWdlX3Zhbl9z/dGFhbG1lZXN0ZXJz/XyUyOHdhYXJkaWpu/cyUyOV92YW5faGV0/X0Ftc3RlcmRhbXNl/X2xha2VuYmVyZWlk/ZXJzZ2lsZGVfLV9H/b29nbGVfQXJ0X1By/b2plY3QuanBn",
						authorId: rembrandt.id,
					},
					{
						title: "The Milkmaid",
						description:
							"Depicts a domestic kitchen maid pouring milk.",
						coverImageUrl:
							"https://imgs.search.brave.com/Bo3HXn2UsalEz6xkmGeGPpAB3yznQdzXbWV7rtjfC9k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzZlL0pv/aGFubmVzX1Zlcm1l/ZXJfLV9IZXRfbWVs/a21laXNqZV8tX0dv/b2dsZV9BcnRfUHJv/amVjdC5wbmcvNTAw/cHgtSm9oYW5uZXNf/VmVybWVlcl8tX0hl/dF9tZWxrbWVpc2pl/Xy1fR29vZ2xlX0Fy/dF9Qcm9qZWN0LnBu/Zz91dG1fc291cmNl/PWVuLndpa2lwZWRp/YS5vcmcmdXRtX2Nh/bXBhaWduPXBhcnNl/ciZ1dG1fY29udGVu/dD10aHVtYm5haWw",
						authorId: vermeer.id,
					},
					{
						title: "The Little Street",
						description: "A view of a quiet street in Delft.",
						coverImageUrl:
							"https://imgs.search.brave.com/pJVk4mltmUzR7aLPybw5aIxIJU0qj0sRTMDtAKq-sm4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzJiL0pv/aGFubmVzX1Zlcm1l/ZXJfLV9HZXppY2h0/X29wX2h1aXplbl9p/bl9EZWxmdCUyQ19i/ZWtlbmRfYWxzXyUy/N0hldF9zdHJhYXRq/ZSUyN18tX0dvb2ds/ZV9BcnRfUHJvamVj/dC5qcGcvNTEycHgt/Sm9oYW5uZXNfVmVy/bWVlcl8tX0dlemlj/aHRfb3BfaHVpemVu/X2luX0RlbGZ0JTJD/X2Jla2VuZF9hbHNf/JTI3SGV0X3N0cmFh/dGplJTI3Xy1fR29v/Z2xlX0FydF9Qcm9q/ZWN0LmpwZw",
						authorId: vermeer.id,
					},
					{
						title: "Self-Portrait with Grey Felt Hat",
						description:
							"One of Van Gogh's boldest color experiments in Paris.",
						coverImageUrl:
							"https://imgs.search.brave.com/TmwVJ0cUFHc3JY23NyuGUcpwOm4c5O2yAKVspmFk_TA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2Np/L0FMMThnX1RYU3lG/Q1JDS1B6MWE3M2hQ/Y1dSQTAzQUI1dm5J/NkVnUE5MeHZhN3pN/UGZJNklkOVhzS1Bz/Y05POURXN3ZYcDFH/VWJqNXpxX3c",
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
				"https://imgs.search.brave.com/VE5m9WXk6M85U30pl3KufKPUHKSIq2Biu-luoLuE2zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QxL1RyaWJ1bmFf/dWZmaXppLmpwZw",
			type: MuseumType.ART,
			artworks: {
				create: [
					{
						title: "The Birth of Venus",
						description:
							"Depicts Venus emerging from the sea on a shell.",
						coverImageUrl:
							"https://imgs.search.brave.com/7Bl0uCoABy-NM4ILyLXiq21RmgLsZNmHVQFH-ZoUWTo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83Lzc0L1Nh/bmRyb19Cb3R0aWNl/bGxpXy1fVGhlX0Jp/cnRoX29mX1ZlbnVz/XyUyOGRldGFpbCUy/OV8tX1dHQTI3NzIu/anBnLzUxMnB4LVNh/bmRyb19Cb3R0aWNl/bGxpXy1fVGhlX0Jp/cnRoX29mX1ZlbnVz/XyUyOGRldGFpbCUy/OV8tX1dHQTI3NzIu/anBn",
						authorId: botticelli.id,
					},
					{
						title: "Primavera",
						description:
							"Large panel painting depicting allegorical mythological figures.",
						coverImageUrl:
							"https://imgs.search.brave.com/n_QxwS81XiaPoJDYapJ1Yh93IwiMmlTxeUhmEsHtXXE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzNjL0Jv/dHRpY2VsbGktcHJp/bWF2ZXJhLmpwZy81/MDBweC1Cb3R0aWNl/bGxpLXByaW1hdmVy/YS5qcGc_dXRtX3Nv/dXJjZT1lbi53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWls",
						authorId: botticelli.id,
					},
					{
						title: "Adoration of the Magi",
						description:
							"Features portraits of prominent members of the Medici family.",
						coverImageUrl:
							"https://imgs.search.brave.com/P6AFPN63qyhT-TX6JMAFkubMDUpD6r0fDIg4L3dW3xY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2MwL1Nh/bnRhX21hcmlhX2lu/X3RyYXN0ZXZlcmUl/MkNfbW9zYWljaV9k/aV9waWV0cm9fY2F2/YWxsaW5pJTJDXzA0/X2Fkb3JhemlvbmVf/ZGVpX21hZ2kuSlBH/LzUxMnB4LVNhbnRh/X21hcmlhX2luX3Ry/YXN0ZXZlcmUlMkNf/bW9zYWljaV9kaV9w/aWV0cm9fY2F2YWxs/aW5pJTJDXzA0X2Fk/b3JhemlvbmVfZGVp/X21hZ2kuSlBH",
						authorId: botticelli.id,
					},
					{
						title: "Doni Tondo",
						description:
							"The only finished panel painting by the mature Michelangelo to survive.",
						coverImageUrl:
							"https://imgs.search.brave.com/snujTZ0poANLr87UVFXqcHRKPlHQux5NRJJWvKoJ7SU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ0L1Rv/bmRvX0RvbmlfMjAx/NS5wbmcvNTEycHgt/VG9uZG9fRG9uaV8y/MDE1LnBuZw",
						authorId: michelangelo.id,
					},
					{
						title: "Bacchus",
						description:
							"Marble sculpture depicting Bacchus, the Roman god of wine.",
						coverImageUrl:
							"https://imgs.search.brave.com/Zi5cuADjxzf8ZWWo6kMkbbT40SVWLPkNXYJesHOuTFk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84LzhhL0Rp/b255c29zX0xvdXZy/ZV9NYTg3X24yLmpw/Zy8yNTBweC1EaW9u/eXNvc19Mb3V2cmVf/TWE4N19uMi5qcGc_/dXRtX3NvdXJjZT1l/bi53aWtpcGVkaWEu/b3JnJnV0bV9jYW1w/YWlnbj1wYXJzZXIm/dXRtX2NvbnRlbnQ9/dGh1bWJuYWls",
						authorId: michelangelo.id,
					},
					{
						title: "Annunciation",
						description:
							"Early masterpiece depicting the Angel Gabriel greeting Mary.",
						coverImageUrl:
							"https://imgs.search.brave.com/CS_Qf98aSCexhntGe41EmL1BvnB5e6Kf-LTWnzrfadU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzlhL1Ro/ZV9Bbm51bmNpYXRp/b24lMkNfR2xhZHpv/ci5qcGcvMjUwcHgt/VGhlX0FubnVuY2lh/dGlvbiUyQ19HbGFk/em9yLmpwZz91dG1f/c291cmNlPWVuLndp/a2lwZWRpYS5vcmcm/YW1wO3V0bV9jYW1w/YWlnbj1wYXJzZXIm/YW1wO3V0bV9jb250/ZW50PXRodW1ibmFp/bA",
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
				"https://imgs.search.brave.com/h23iPOynpd1F6BDkyiA_sKHj0yAWcgrcVNLwucKPWLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb3Zp/bmctbmV3eW9yay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDUvTXVzZXVt/LW9mLU1vZGVybi1B/cnQtTmV3LVlvcmst/MTkxMDEwMTMzMTE0/MDAzLTE2MDB4ODAw/LmpwZw",
			type: MuseumType.ART,
			artworks: {
				create: [
					{
						title: "The Starry Night",
						description:
							"Depicts the view from his asylum room in Saint-Rémy-de-Provence.",
						coverImageUrl:
							"https://imgs.search.brave.com/25sBraaTDd7iISldQwLVAvUUQdl-WumwBEWmrHf0QVk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2VhL1Zh/bl9Hb2doXy1fU3Rh/cnJ5X05pZ2h0Xy1f/R29vZ2xlX0FydF9Q/cm9qZWN0LmpwZy81/MDBweC1WYW5fR29n/aF8tX1N0YXJyeV9O/aWdodF8tX0dvb2ds/ZV9BcnRfUHJvamVj/dC5qcGc_dXRtX3Nv/dXJjZT1lbi53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWls",
						authorId: vanGogh.id,
					},
					{
						title: "The Olive Trees",
						description:
							"Series of paintings executed in Saint-Rémy-de-Provence.",
						coverImageUrl:
							"https://imgs.search.brave.com/KMX-Nnhrbg9Ib_G5drQYic9MnrJQbl_TmQcL7Auyy-U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2U4L1Zh/bl9Hb2doX1RoZV9P/bGl2ZV9UcmVlcy4u/anBnLzMzMHB4LVZh/bl9Hb2doX1RoZV9P/bGl2ZV9UcmVlcy4u/anBnP3V0bV9zb3Vy/Y2U9ZW4ud2lraXBl/ZGlhLm9yZyZ1dG1f/Y2FtcGFpZ249cGFy/c2VyJnV0bV9jb250/ZW50PXRodW1ibmFp/bA",
						authorId: vanGogh.id,
					},
					{
						title: "Les Demoiselles d'Avignon",
						description:
							"Portrays five nude female figures in a proto-Cubist style.",
						coverImageUrl:
							"https://imgs.search.brave.com/UqeL_VJ1wHnBngVHpo2jZE2ydraG6l8WhLmYBWuB0Ac/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80Yy9MZXNfRGVt/b2lzZWxsZXNfZCUy/N0F2aWdub24uanBn/LzMzMHB4LUxlc19E/ZW1vaXNlbGxlc19k/JTI3QXZpZ25vbi5q/cGc_dXRtX3NvdXJj/ZT1lbi53aWtpcGVk/aWEub3JnJnV0bV9j/YW1wYWlnbj1wYXJz/ZXImdXRtX2NvbnRl/bnQ9dGh1bWJuYWls",
						authorId: picasso.id,
					},
					{
						title: "Girl before a Mirror",
						description:
							"Shows Picasso's mistress Marie-Thérèse Walter.",
						coverImageUrl:
							"https://imgs.search.brave.com/2kScrR4sI-SH6Z34UVv7kYWaMlnRspsyEzDpoUfccu0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNi82MC9H/aXJsQmVmb3JlQU1p/cnJvci5qcGc_dXRt/X3NvdXJjZT1lbi53/aWtpcGVkaWEub3Jn/JnV0bV9jYW1wYWln/bj1wYXJzZXImdXRt/X2NvbnRlbnQ9dGh1/bWJuYWlsX3Vuc2Nh/bGVk",
						authorId: picasso.id,
					},
					{
						title: "Three Musicians",
						description:
							"Large synthetic cubism painting representing a band.",
						coverImageUrl:
							"https://imgs.search.brave.com/X7ynCacSzlpr_xNKeSVa9s-Qo5FUfTxKUVrOvCwrvT8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZC9kMS9QaWNhc3Nv/X3RocmVlX211c2lj/aWFuc19tb21hXzIw/MDYuanBnLzUxMnB4/LVBpY2Fzc29fdGhy/ZWVfbXVzaWNpYW5z/X21vbWFfMjAwNi5q/cGc",
						authorId: picasso.id,
					},
					{
						title: "Water Lilies triptych",
						description:
							"Monumental impressionist painting of Monet's water garden.",
						coverImageUrl:
							"https://imgs.search.brave.com/zLtAJTf0UD8-vf4eo0KhoPMYIzODS8vRoTGPhvYW1L4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYm9va3NlbnNl/LmNvbS9pbWFnZXMv/OTUzLzc4MC85Nzgw/ODkxNzgwOTUzLmpw/Zw",
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
