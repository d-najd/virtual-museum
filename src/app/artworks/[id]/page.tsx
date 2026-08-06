"use client"

import { useState } from "react"
import { api } from "~/trpc/react"
import { Search, Building2, Loader2 } from "lucide-react"
import { MediaCard } from "~/app/_components/entryCard"

import { useParams } from "next/navigation"

export default function MuseumArtworks() {
	const params = useParams<{ id: string }>()
	const museumId = params.id

	const [searchQuery, setSearchQuery] = useState("")

	const {
		data: artworks,
		isLoading,
		isError,
	} = api.artwork.getAll.useQuery({
		museumId: parseInt(museumId),
		query: searchQuery,
	})

	return (
		<div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8 dark:bg-slate-950 dark:text-slate-100">
			<div className="mx-auto max-w-7xl space-y-10">
				<div className="mx-auto max-w-3xl space-y-4 text-center">
					<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
						Explore Artworks
					</h1>
					<p className="text-lg text-slate-600 dark:text-slate-400">
						Browse through our collection of artworks.
					</p>
				</div>

				<div className="relative mx-auto max-w-2xl">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
						<Search className="h-5 w-5" />
					</div>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search by title, description or author..."
						className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pr-4 pl-11 text-slate-900 shadow-sm transition focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
					/>
					{isLoading && (
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
							<Loader2 className="h-5 w-5 animate-spin" />
						</div>
					)}
				</div>

				{isLoading && !artworks && (
					<div className="flex flex-col items-center justify-center space-y-3 py-20">
						<Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
						<p className="text-sm text-slate-500">
							Loading artworks...
						</p>
					</div>
				)}

				{isError && (
					<div className="rounded-2xl border border-red-200 bg-red-50 py-12 text-center text-red-500 dark:border-red-900 dark:bg-red-950/20">
						Failed to load artworks. Please try again later.
					</div>
				)}

				{artworks && artworks.length > 0 && (
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
						{artworks.map((artwork) => (
							<MediaCard
								key={artwork.id}
								title={artwork.title}
								imageUrl={artwork.coverImageUrl}
								description={artwork.description}
								footerText={`${artwork.author.firstName} ${artwork.author.lastName}`}
							/>
						))}
					</div>
				)}

				{artworks?.length === 0 && !isLoading && (
					<div className="space-y-3 rounded-3xl border border-slate-200 bg-white py-16 text-center dark:border-slate-800 dark:bg-slate-900">
						<Building2 className="mx-auto h-12 w-12 text-slate-400" />
						<h3 className="text-lg font-medium">
							No artworks found
						</h3>
						<p className="text-sm text-slate-500">
							Try adjusting your search terms or search for an
							author or artwork title.
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
