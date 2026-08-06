import { config } from "dotenv"
import { expand } from "dotenv-expand"
import { defineConfig, env } from "prisma/config"

expand(config({ path: ".env" }))

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
		seed: "npx tsx prisma/seed.ts",
	},
	datasource: {
		url: env("DATABASE_URL"),
	},
})
