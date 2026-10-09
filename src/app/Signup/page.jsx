// "use client";

// import { authClient } from "@/lib/auth-client";
// // import { google } from "better-auth";
// // import { redirect } from "next/dist/server/api-utils";
// import { useRouter } from "next/navigation";
// import React from "react";
// import toast from "react-hot-toast";

// const handleGooglesignup = async () => {
//   const data = await authClient.signIn.social({
//     provider: "google",
//   });
// };

// export default function Signup() {
//   const router = useRouter();
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formdata = new FormData(e.target);
//     const user = Object.fromEntries(formdata.entries());

//     console.log(user);
//     // try {
//     // const { data, error } = await authClient.signUp.email({
//     //   ...user,
//     // });
//     const { data, error } = await authClient.signUp.email({
//       ...user,
//       callbackURL: "/",
//     });

//     if (error) {
//       console.log(error);
//       toast.error("Registration failed!");
//       return;
//     }

//     if (data) {
//       console.log(data);
//       toast.success("Registration successful!");
//       router.push("/");
//     }
//     // } catch (error) {
//     //   toast.error(error.message || "Something went wrong!");
//     // }

//     //     if (data) {
//     //       console.log(data);
//     //       toast.success("Registration successful!");
//     //       // redirect("/");
//     //       router.push("/");

//     // //       catch (error) {
//     // //   toast.error(error.message || "Something went wrong!");
//     // // }
//     //     }
//     //     if (error) {
//     //       console.log(error);
//     //       toast.error(error.message || "Registration failed!");
//     //     }
//   };
//   return (
//     <div className=" mx-auto  max-w-7xl">
//       <h1 className="text-center font-bold font-black text-3xl">
//         অ্যাকাউন্ট তৈরি করুন
//       </h1>
//       <p className="py-3">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>{" "}
//       <form onSubmit={onSubmit}>
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-xl w-sm border p-4">
//           <legend className="fieldset-legend">Login</legend>

//           <label className="label">নাম</label>
//           <input
//             type="name"
//             name="name"
//             className="input  px-5 rounded-md"
//             placeholder="example: Sudhanya Dutta"
//           />

//           <label className="label">ইমেইল</label>
//           <input
//             type="email"
//             name="email"
//             className="input  px-5 rounded-md"
//             placeholder="you@example.com"
//           />

//           <label className="label">পাসওয়ার্ড</label>
//           <input
//             type="password"
//             name="password"
//             className="input  px-5 rounded-md"
//             placeholder="Minimum 8 letters"
//           />
//           <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
//           <input
//             type="password"
//             name="password"
//             className="input  px-5 rounded-md"
//             placeholder="write again"
//           />
//           <button className="btn btn-neutral bg-green-700 mt-4">
//             {" "}
//             অ্যাকাউন্ট তৈরি করুন
//           </button>

//           <button onClick={handleGooglesignup} className="btn btn-neutral">
//             {" "}
//             Signup With Google
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();

  const handleGooglesignup = async () => {
    await authClient.signUp.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries());

    console.log(user);

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      toast.error(error.message || "Registration failed!");
      return;
    }

    if (data) {
      console.log(data);
      toast.success("Registration successful!");
      router.push("/");
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-center font-bold font-black text-3xl">
        অ্যাকাউন্ট তৈরি করুন
      </h1>
      <p className="py-3">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>{" "}
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-xl w-sm border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input px-5 rounded-md"
            placeholder="example: Sudhanya Dutta"
          />

          <label className="label">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input px-5 rounded-md"
            placeholder="you@example.com"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input px-5 rounded-md"
            placeholder="Minimum 8 letters"
          />

          <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
            type="password"
            name="confirmPassword"
            className="input px-5 rounded-md"
            placeholder="write again"
          />

          <button type="submit" className="btn btn-neutral bg-green-700 mt-4">
            অ্যাকাউন্ট তৈরি করুন
          </button>

          <div className=" font-white text-center py-3">অথবা</div>

          <button
            type="button"
            onClick={handleGooglesignup}
            className="btn btn-neutral border-1 border-amber-100  font bold text-[#000000] bg-[#FFFFFF]"
          >
            Signup With Google
          </button>
        </fieldset>
      </form>
    </div>
  );
}
