import { HydrateClient } from "~/trpc/server"
import MuseumsPage from "./_components/museum"

export default async function Home() {
	return (
		<HydrateClient>
			<main>
				<MuseumsPage />
			</main>
		</HydrateClient>
	)
}
