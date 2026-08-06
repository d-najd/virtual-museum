"use client"

import { useState } from "react"
import { api } from "~/trpc/react"
import { Search, MapPin, Building2, ArrowRight, Loader2 } from "lucide-react"

export default function MuseumsPage() {
	const [searchQuery, setSearchQuery] = useState("")

	const {
		data: museums,
		isLoading,
		isError,
	} = api.museum.getAll.useQuery({
		query: searchQuery,
	})

	return (
		<div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8 dark:bg-slate-950 dark:text-slate-100">
			<div className="mx-auto max-w-7xl space-y-10">
				<div className="mx-auto max-w-3xl space-y-4 text-center">
					<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
						Explore Museums
					</h1>
					<p className="text-lg text-slate-600 dark:text-slate-400">
						Browse through our collection of cultural institutions.
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
						placeholder="Search by name, city, description, or artwork..."
						className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pr-4 pl-11 text-slate-900 shadow-sm transition focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
					/>
					{isLoading && (
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
							<Loader2 className="h-5 w-5 animate-spin" />
						</div>
					)}
				</div>

				{isLoading && !museums && (
					<div className="flex flex-col items-center justify-center space-y-3 py-20">
						<Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
						<p className="text-sm text-slate-500">
							Loading museums...
						</p>
					</div>
				)}

				{isError && (
					<div className="rounded-2xl border border-red-200 bg-red-50 py-12 text-center text-red-500 dark:border-red-900 dark:bg-red-950/20">
						Failed to load museums. Please try again later.
					</div>
				)}

				{museums && museums.length > 0 && (
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
						{museums.map((museum) => (
							<div
								key={museum.id}
								className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
							>
								{museum.coverImageUrl && (
									<div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
										<img
											src={museum.coverImageUrl}
											alt={museum.name}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										{museum.type && (
											<div className="absolute top-4 right-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md">
												{museum.type}
											</div>
										)}
									</div>
								)}

								<div className="flex flex-1 flex-col justify-between space-y-6 p-6 sm:p-8">
									<div className="space-y-3">
										{museum.city && (
											<div className="flex items-center space-x-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
												<MapPin className="h-4 w-4" />
												<span>{museum.city}</span>
											</div>
										)}

										<h2 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
											{museum.name}
										</h2>

										{museum.description && (
											<p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
												{museum.description}
											</p>
										)}
									</div>

									{/* Card Footer */}
									<div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800/80">
										<span className="font-mono text-xs text-slate-500 dark:text-slate-500">
											{museum.address ??
												"Location available on details page"}
										</span>
										<button className="flex items-center space-x-2 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400">
											<span>View Museum</span>
											<ArrowRight className="h-4 w-4" />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{museums?.length === 0 && !isLoading && (
					<div className="space-y-3 rounded-3xl border border-slate-200 bg-white py-16 text-center dark:border-slate-800 dark:bg-slate-900">
						<Building2 className="mx-auto h-12 w-12 text-slate-400" />
						<h3 className="text-lg font-medium">
							No museums found
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
