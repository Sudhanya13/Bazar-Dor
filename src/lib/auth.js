// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// // import { client } from "@/db"; // your mongodb client
// import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.BETTER_AUTH_URI);
// const db = client.db("bazar-dor");

// export const auth = betterAuth({
//   emailAndPassword: {
//     enabled: true,
//   },
//   database: mongodbAdapter(db, {
//     // socialProviders: {
//     //   github: {
//     //     clientId: process.env.GITHUB_CLIENT_ID as string,
//     //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     //   },
//     // },
//     client,
//   }),
// });

// export const auth = betterAuth({
//     database: mongodbAdapter(client.db(), { client }),
// });

// export const auth = betterAuth({
//   //...
// });
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_URI);
const db = client.db("bazar-dor");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
