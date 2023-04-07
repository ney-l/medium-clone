import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    // 🚨 make a noise 🚨
    throw new Error(`ATTENTION!! Please add MONGO URI to environment variables`)
  }

  const globalWithMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>
  }

  const mongoClientPromise = globalWithMongoClientPromise._mongoClientPromise

  return process.env.NODE_ENV === 'development' && mongoClientPromise
    ? mongoClientPromise
    : new MongoClient(uri).connect()
}

export const db = getClientPromise()
