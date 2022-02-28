import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

function getClientPromise() {
  if (!uri) {
    // 🚨 make a noise 🚨
    throw new Error(`ATTENTION!! Please add MONGO URI to environment variables`)
  }

  return process.env.NODE_ENV === 'development' && global._mongoClientPromise
    ? global._mongoClientPromise
    : new MongoClient(uri, options)
}

export const db = getClientPromise().connect()
