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
  // sessionStorage.setItem("show_login_toast", "true");
  const router = useRouter();

  const handleGooglesignup = async () => {
    toast.loading("গুগল রিডাইরেক্ট করা হচ্ছে...");
    await authClient.signIn.social({
      provider: "google",
      // callbackURL: "/",
    });
  };
  const handleGithubsignup = async () => {
    toast.loading("গুগল রিডাইরেক্ট করা হচ্ছে...");
    await authClient.signIn.social({
      provider: "github",
      // callbackURL: "/",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries());

    console.log(user);
    // for the password matching--
    if (user.password !== user.confirmPassword) {
      toast.error("ফর্মের তথ্য ঠিক করে আবার চেষ্টা করুন।");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    // if (error) {
    //   console.log(error);
    //   toast.error(error.message || "Registration failed!");
    //   return;
    // }
    if (error) {
      console.log(error);
      const errorMessage = error.message?.toLowerCase() || "";

      // পাসওয়ার্ড বা ইনপুট সম্পর্কিত ভুল থাকলে বাংলা মেসেজ
      if (
        errorMessage.includes("password") ||
        errorMessage.includes("invalid") ||
        errorMessage.includes("short")
      ) {
        toast.error("সাইন আউট ব্যর্থ হয়েছে।");
      } else {
        // অন্যান্য সমস্ত রেজিস্ট্রেশন ত্রুটির জন্য
        toast.error("সাইন আউট ব্যর্থ হয়েছে।");
      }
      return;
    }

    if (data) {
      console.log(data);
      toast.success("Registration successful!");

      router.push("/");
    }
  };

  return (
    <div className="mx-auto max-w-7xl mt-6">
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

          {/* <div className=" font-white text-center py-3">অথবা</div>

          <button
            type="button"
            onClick={handleGooglesignup}
            className="btn btn-neutral border-1 border-amber-100  font bold text-[#000000] bg-[#FFFFFF]"
          >
            Signup With Google
          </button>

          <button
            type="button"
            onClick={handleGithubsignup}
            className="btn btn-neutral border-1 border-amber-100  font bold text-[#000000] bg-[#FFFFFF]"
          >
            Signup With Github
          </button> */}

          <div className="text-center text-xl py-3 text-black">অথবা</div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleGooglesignup}
              className="btn btn-neutral flex-1 bg-white text-black border border-amber-100 font-bold gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google
            </button>

            <button
              type="button"
              onClick={handleGithubsignup}
              className="btn btn-neutral flex-1 bg-white text-black border border-amber-100 font-bold gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
