import mongoose from "mongoose";

/**
 * MongoDB connection URI fra miljøvariabler
 */
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable in .env");
}

/**
 * Cache connection for development / hot reload
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Opret forbindelse til MongoDB
 */
async function dbConnect() {
  // Returner cached connection, hvis den allerede findes
  if (cached.conn) {
    return cached.conn;
  }

  // Hvis der ikke allerede er en igangværende connection-promise, lav en
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false, // disables mongoose buffering until connection is established
    };

    cached.promise = mongoose
      .connect(MONGO_URI, opts)
      .then((mongooseInstance) => {
        console.log("MongoDB connected");
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error("MongoDB connection error:", error);
    throw error;
  }

  return cached.conn;
}

export default dbConnect;
