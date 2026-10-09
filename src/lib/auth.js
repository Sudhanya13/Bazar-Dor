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
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.Github_Client_ID,
      clientSecret: process.env.Github_Client_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
