// "use client";
// // import { useRouter } from "next/navigation";
// // import React from "react";
// // export default function Signin() {
// //   const router = useRouter();
// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     const formdata = new FormData(e.target);
// //     const user = Object.fromEntries(formdata.entries());
// //     console.log(user);
// //     return (
// //       <>
// //         <div className="mx-auto  max-w-7xl">
// //           <form onSubmit={onSubmit}>
// //             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
// //               <legend className="fieldset-legend">Login</legend>

// //               <label className="label">Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 className="input"
// //                 placeholder="Email"
// //               />

// //               <label className="label">Password</label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 className="input"
// //                 placeholder="Password"
// //               />

// //               <button className="btn btn-neutral mt-4">Register</button>
// //             </fieldset>
// //           </form>
// //         </div>
// //       </>
// //     );
// //   };
// // }

// import { useRouter } from "next/navigation";
// import React from "react";
// import { authClient } from "@/lib/auth-client";
// import { toast } from "react-hot-toast";
// import Link from "next/link";
// // import { Link } from "lucide-react";

// const handleGooglesignin = async () => {
//   toast.loading("গুগল রিডাইরেক্ট করা হচ্ছে...");
//   await authClient.signIn.social({
//     provider: "google",
//     // callbackURL: "/",
//   });
// };

// const handleGithubsignin = async () => {
//   (toast.loading("গিটহাবে রিডাইরেক্ট করা হচ্ছে..."),
//     await authClient.signIn.social({
//       provider: "github",
//       // callbackURL: "/",
//     }));
// };

// export default function Signin() {
//   const router = useRouter();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formdata = new FormData(e.currentTarget);
//     const user = Object.fromEntries(formdata.entries());

//     // Correct method capitalization for Better Auth (signIn)
//     const { data, error } = await authClient.signIn.email({
//       ...user,
//       callbackURL: "/",
//     });

//     if (error) {
//       console.error(error);
//       toast.error("সাইন ইন ব্যর্থ হয়েছে।");
//       return;
//     }

//     if (data) {
//       toast.success("সফলভাবে সাইন ইন হয়েছে।");
//       router.push("/");
//     }
//   };

//   // The JSX must be returned directly from the main component function
//   return (
//     <>
//       <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center px-4">
//         <h1 className="text-center  font-black text-3xl">সাইন ইন</h1>
//         <p className="py-3">
//           বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
//         </p>
//         <form onSubmit={onSubmit} className="w-full max-w-sm">
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-xl  w-sm border p-4">
//             <legend className="fieldset-legend">Login</legend>

//             <label className="label ">ইমেইল</label>
//             <input
//               type="email"
//               name="email"
//               className="input  px-5 rounded-md"
//               placeholder="you@example.com"
//               required
//             />

//             <label className="label ">পাসওয়ার্ড</label>
//             <input
//               type="password"
//               name="password"
//               className="input  px-5 rounded-md"
//               placeholder="minimum 8 letters"
//               required
//             />

//             <button type="submit" className="btn btn-neutral bg-green-700 mt-4">
//               সাইন ইন
//             </button>

//             {/* <div className=" font-white text-center py-3">অথবা</div>
//             <button
//               type="button"
//               onClick={handleGooglesignin}
//               className="btn btn-neutral border-1 border-amber-100 font bold text-[#000000] bg-[#FFFFFF]"
//             >
//               {" "}
//               Signin With Google
//             </button>
//             <button
//               type="button"
//               onClick={handleGithubsignin}
//               className="btn btn-neutral border-1 border-amber-100 font bold text-[#000000] bg-[#FFFFFF]"
//             >
//               {" "}
//               Signin With Github
//             </button> */}

//             <div className="text-center py-3 text-xl text-black">অথবা</div>

//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={handleGooglesignin}
//                 className="btn btn-neutral flex-1 bg-white text-black border border-amber-100 font-bold gap-2"
//               >
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
//                   />
//                 </svg>
//                 Google
//               </button>

//               <button
//                 type="button"
//                 onClick={handleGithubsignin}
//                 className="btn btn-neutral flex-1 bg-white text-black border border-amber-100 font-bold gap-2"
//               >
//                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
//                 </svg>
//                 GitHub
//               </button>
//             </div>
//           </fieldset>
//         </form>

//         <div className="mt-6 flex flex-col items-center gap-3 text-center">
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <h2 className="text-[#000000]">অ্যাকাউন্ট নেই?</h2>

//             <Link
//               href="/Signup"
//               className="font-semibold text-green-600 hover:text-green-700 transition-colors"
//             >
//               সাইন আপ করুন
//             </Link>
//           </div>

//           <Link
//             href="/"
//             className="text-sm text-[#1D271F] hover:text-green-600 transition-colors"
//           >
//             ← হোম পেজে ফিরে যান
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
// // র্মের তথ্য ঠিক করে আবার চেষ্টা করুন।

"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Signin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const { error } = await authClient.signIn.email({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      if (error) {
        toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে।");
        return;
      }

      toast.success("সফলভাবে সাইন ইন হয়েছে।");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Signin error:", error);
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignin = async (provider) => {
    if (socialLoading) return;

    setSocialLoading(provider);

    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (error) {
      console.error(`${provider} signin error:`, error);
      toast.error("সোশ্যাল লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
      setSocialLoading("");
    }
  };

  return (
    <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center px-4">
      <h1 className="text-center text-3xl font-bold text-black">সাইন ইন</h1>

      <p className="py-3 text-center text-gray-600">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>

      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <fieldset className="fieldset w-full rounded-xl border border-gray-200 bg-base-200 p-4">
          <legend className="fieldset-legend">Login</legend>

          <label htmlFor="email" className="label">
            ইমেইল
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input w-full rounded-md"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="password" className="label mt-3">
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="input w-full rounded-md"
            placeholder="আপনার পাসওয়ার্ড"
            autoComplete="current-password"
            required
          />

          <button
            type="submit"
            disabled={loading || !!socialLoading}
            className="btn mt-4 w-full border-0 bg-green-700 text-white hover:bg-green-800"
          >
            {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
          </button>

          <div className="py-3 text-center text-gray-500">অথবা</div>

          <div className="flex gap-3">
            <button
              type="button"
              disabled={loading || !!socialLoading}
              onClick={() => handleSocialSignin("google")}
              className="btn flex-1 border border-gray-200 bg-white text-black hover:bg-gray-50"
            >
              {socialLoading === "google" ? "অপেক্ষা করুন..." : "Google"}
            </button>

            <button
              type="button"
              disabled={loading || !!socialLoading}
              onClick={() => handleSocialSignin("github")}
              className="btn flex-1 border border-gray-200 bg-white text-black hover:bg-gray-50"
            >
              {socialLoading === "github" ? "অপেক্ষা করুন..." : "GitHub"}
            </button>
          </div>
        </fieldset>
      </form>

      <div className="mt-6 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-black">অ্যাকাউন্ট নেই?</span>
          <Link
            href="/Signup"
            className="font-semibold text-green-600 transition-colors hover:text-green-700"
          >
            সাইন আপ করুন
          </Link>
        </div>

        <Link
          href="/"
          className="text-sm text-gray-700 transition-colors hover:text-green-600"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
