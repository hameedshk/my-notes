import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
const { Client } = require('postgres')
import bcrypt from 'bcryptjs'
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

config({ path: '.env' })

if (!`${process.env.DATABASE_HOST}`) {
  console.warn('database host is not set!')
}

const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?sslmode=require`;

// const client = new Client({
//   connectionString: connectionString,
//   ssl: { rejectUnauthorized: false },
// });

export let db = drizzle(connectionString)
