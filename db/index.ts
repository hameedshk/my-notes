import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'

config({ path: '.env' })
if (!process.env.DATABASE_URL) {
  console.warn('process.env.DATABASE_URL is not set!')
}

export let db = drizzle(process.env.DATABASE_URL)
