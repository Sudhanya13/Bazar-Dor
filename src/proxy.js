// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "./lib/auth";
// import { headers } from "next/headers";

// // This function can be marked `async` if using `await` inside
// export async function proxy(request:NextRequest) {
//   const session = await auth.api.getSession({ headers: await headers() });
//   console.log(session);
//   const user = session?.user;
//     console.log(user);

//   if (!user) {

//     return NextResponse.redirect(new URL("/Signup", request.url));

//   }
// }

// export const config = {
//   matcher:["/profilepage" ,"/product/:path"]
// };

import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);

  const user = session?.user;
  console.log(user);

  // If the user is unauthenticated, redirect them to the Signup page
  if (!user) {
    return NextResponse.redirect(new URL("/Signup", request.url));
  }

  // REQUIRED: Let authorized requests pass through to the page/route
  return NextResponse.next();
}

export const config = {
  matcher: ["/profilepage", "/product/:path*"],
};
