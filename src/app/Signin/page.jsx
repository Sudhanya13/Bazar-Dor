"use client";
// import { useRouter } from "next/navigation";
// import React from "react";
// export default function Signin() {
//   const router = useRouter();
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formdata = new FormData(e.target);
//     const user = Object.fromEntries(formdata.entries());
//     console.log(user);
//     return (
//       <>
//         <div className="mx-auto  max-w-7xl">
//           <form onSubmit={onSubmit}>
//             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//               <legend className="fieldset-legend">Login</legend>

//               <label className="label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="input"
//                 placeholder="Email"
//               />

//               <label className="label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="input"
//                 placeholder="Password"
//               />

//               <button className="btn btn-neutral mt-4">Register</button>
//             </fieldset>
//           </form>
//         </div>
//       </>
//     );
//   };
// }

import { useRouter } from "next/navigation";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const handleGooglesignin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};

export default function Signin() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries());

    // Correct method capitalization for Better Auth (signIn)
    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      console.error(error);
      toast.error("সাইন আউট ব্যর্থ হয়েছে।");
      return;
    }

    if (data) {
      toast.success("সফলভাবে সাইন আউট হয়েছে।");
      router.push("/");
    }
  };

  // The JSX must be returned directly from the main component function
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center font-bold font-black text-3xl">সাইন ইন</h1>
        <p className="py-3">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-xl w-sm border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label className="label ">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input  px-5 rounded-md"
              placeholder="you@example.com"
              required
            />

            <label className="label ">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input  px-5 rounded-md"
              placeholder="minimum 8 letters"
              required
            />

            <button type="submit" className="btn btn-neutral bg-green-700 mt-4">
              সাইন ইন
            </button>

            <div className=" font-white text-center py-3">অথবা</div>
            <button
              type="button"
              onClick={handleGooglesignin}
              className="btn btn-neutral border-1 border-amber-100 font bold text-[#000000] bg-[#FFFFFF]"
            >
              {" "}
              Signin With Google
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
// র্মের তথ্য ঠিক করে আবার চেষ্টা করুন।
