// lib/mongodb.js
import { MongoClient, ServerApiVersion } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { client: null, promise: null };
}

async function connectToDatabase() {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    }).then((client) => client);
  }
  cached.client = await cached.promise;
  return cached.client;
}

export default connectToDatabase;
