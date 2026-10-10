// "use client";

// // import { authClient } from "@/lib/auth-client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import React from "react";

// // export default function ProfilePage() {
// //   const { data: session } = authClient.useSession();
// //   const user = session?.user;
// //   console.log(user);

// //   return (
// //     <>
// //       <Link href="/profilepage">
// //         <div className="avatar">
// //           <div className="relative h-120 w-full px-4 overflow-hidden rounded-xl">
// //             <Image
// //               alt="Tailwind-CSS-Avatar-component"
// //               src="/illustration-cartoon-of-a-cute-girl-standing-and-smiling-while-dressed-in-colorful-and-casual-clothes-vector.jpg"
// //               fill
// //               className="object-cover"
// //             />
// //           </div>
// //         </div>
// //       </Link>

// //       <h2> {user?.name}</h2>
// //       <p>{user?.email}</p>
// //     </>
// //   );
// // }
// // // import Image from "next/image";
// // // import React from "react";

// // // export default function ProfilePage() {
// // //   const { data: session } = authClient.useSession();
// // //   const user = session?.user;
// // //   console.log(user);
// // //   return (
// // //     <>
// // //       <div className="avatar">
// // //         {/* <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
// // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-bold uppercase text-white">
// // //             {user.name?.charAt(0) || "U"}
// // //           </div> */}
// // //         {/* </div> */}
// // //         <div className="avatar">
// // //           <div className="relative h-48 w-48 overflow-hidden rounded-xl">
// // //             <Image
// // //               alt="Tailwind-CSS-Avatar-component"
// // //               height={55}
// // //               width={45}
// // //               src="/illustration-cartoon-of-a-cute-girl-standing-and-smiling-while-dressed-in-colorful-and-casual-clothes-vector.jpg"
// // //               className=" object-cover"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { ArrowLeft, LogOut } from "lucide-react";

// export default function ProfilePage() {
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [name, setName] = useState(user?.name || "");

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     // প্রোফাইল আপডেটের লজিক এখানে লিখুন
//     console.log("Updated Name:", name);
//   };

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   if (isPending) {
//     return (
//       <div className="flex justify-center items-center min-h-[300px]">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto my-8 p-6 bg-base-100 rounded-2xl shadow-xl border border-base-200">
//       {/* হেডার: শিরোনাম ও ব্যাক আইকন */}
//       <div className="flex items-center justify-between pb-4 border-b border-base-200">
//         <div>
//           <h2 className="text-2xl font-black text-base-content">
//             আমার প্রোফাইল
//           </h2>
//           <p className="text-sm text-base-content/70 font-medium">
//             আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
//           </p>
//         </div>
//         <Link href="/" className="btn btn-ghost btn-circle" title="ফিরে যান">
//           <ArrowLeft className="w-6 h-6" />
//         </Link>
//       </div>

//       {/* প্রোফাইল সেকশন: বামে ছবি ও তথ্য, ডানে সাইন আউট বাটন */}
//       <div className="flex items-center justify-between py-6 border-b border-base-200">
//         <div className="flex items-center gap-4">
//           <div className="avatar ring-primary ring-offset-base-100 ring-2 ring-offset-2 rounded-full">
//             <div className="relative w-16 h-16 overflow-hidden rounded-full">
//               {user?.image ? (
//                 <Image
//                   alt={user?.name || "User Avatar"}
//                   src={user.image}
//                   fill
//                   className="object-cover"
//                 />
//               ) : (
//                 <Image
//                   alt="Default Avatar"
//                   src="/illustration-cartoon-of-a-cute-girl-standing-and-smiling-while-dressed-in-colorful-and-casual-clothes-vector.jpg"
//                   fill
//                   className="object-cover"
//                 />
//               )}
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold text-base-content">
//               {user?.name || "ইউজার"}
//             </h3>
//             <p className="text-sm text-base-content/70">
//               {user?.email || "email@example.com"}
//             </p>
//           </div>
//         </div>

//         {/* সাইন আউট বাটন */}
//         <button
//           onClick={handleSignOut}
//           className="btn btn-outline btn-error btn-sm gap-2"
//         >
//           <LogOut className="w-4 h-4" />
//           সাইন আউট
//         </button>
//       </div>

//       {/* তথ্য আপডেট করার ফর্ম */}
//       <div className="mt-6">
//         <h3 className="text-lg font-bold mb-4 text-base-content">তথ্য</h3>
//         <form onSubmit={handleUpdate} className="space-y-4">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-medium">নাম</span>
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="আপনার নাম লিখুন"
//               className="input input-bordered w-full"
//             />
//           </div>

//           <Link href="/profilepage/update">
//             <button
//               type="submit"
//               className="btn btn-neutral bg-green-700 border-none mt-4"
//             >
//               আপডেট
//             </button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }
// // "use client";

// // import { authClient } from "@/lib/auth-client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React from "react";

// // export default function ProfilePage() {
// //   const { data: session, isPending } = authClient.useSession();
// //   const user = session?.user;

// //   if (isPending) {
// //     return (
// //       <div className="flex justify-center items-center min-h-[300px]">
// //         <span className="loading loading-spinner loading-lg text-primary"></span>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-md mx-auto my-8 p-6 bg-base-100 rounded-2xl shadow-xl border border-base-200 text-center">
// //       <Link href="/profilepage" className="inline-block group">
// //         <div className="avatar ring-primary ring-offset-base-100 ring-4 ring-offset-2 rounded-full transition-transform duration-300 group-hover:scale-105">
// //           <div className="relative w-32 h-32 overflow-hidden rounded-full">
// //             {user?.image ? (
// //               <Image
// //                 alt={user?.name || "User Avatar"}
// //                 src={user.image}
// //                 fill
// //                 className="object-cover"
// //               />
// //             ) : (
// //               <Image
// //                 alt="Default Avatar"
// //                 src="/illustration-cartoon-of-a-cute-girl-standing-and-smiling-while-dressed-in-colorful-and-casual-clothes-vector.jpg"
// //                 fill
// //                 className="object-cover"
// //               />
// //             )}
// //           </div>
// //         </div>
// //       </Link>

// //       <div className="mt-4 space-y-1">
// //         <h2 className="text-2xl font-black text-base-content">
// //           {user?.name || "ইউজার"}
// //         </h2>
// //         <p className="text-sm text-base-content/70 font-medium">
// //           {user?.email || "email@example.com"}
// //         </p>
// //       </div>

// //       <div className="mt-6 flex gap-3 justify-center">
// //         <Link
// //           href="/profilepage"
// //           className="btn btn-neutral btn-sm rounded-lg px-5"
// //         >
// //           প্রোফাইল সম্পাদনা
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { ArrowLeft, LogOut } from "lucide-react";

// export default function ProfilePage() {
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [name, setName] = useState(user?.name || "");

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     // প্রোফাইল আপডেটের লজিক এখানে লিখুন
//     console.log("Updated Name:", name);
//   };

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   if (isPending) {
//     return (
//       <div className="flex justify-center items-center min-h-[300px]">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto my-8 p-6 bg-base-100 rounded-2xl shadow-xl border border-base-200">
//       {/* 1. Top Section: h1 and p (with Back button) */}
//       <div className="flex items-center justify-between pb-4 border-b border-base-200">
//         <div>
//           <h1 className="text-2xl font-black text-base-content">
//             আমার প্রোফাইল
//           </h1>
//           <p className="text-sm text-base-content/70 font-medium">
//             আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
//           </p>
//         </div>
//         <Link href="/" className="btn btn-ghost btn-circle" title="ফিরে যান">
//           <ArrowLeft className="w-6 h-6" />
//         </Link>
//       </div>

//       {/* 2. User Info Section: Avatar, Name & Email on left, Sign Out on right */}
//       <div className="flex items-center justify-between py-6 border-b border-base-200">
//         <div className="flex items-center gap-4">
//           <div className="avatar ring-primary ring-offset-base-100 ring-2 ring-offset-2 rounded-full">
//             <div className="relative w-16 h-16 overflow-hidden rounded-full">
//               {user?.image ? (
//                 <Image
//                   alt={user?.name || "User Avatar"}
//                   src={user.image}
//                   fill
//                   className="object-cover"
//                 />
//               ) : (
//                 <Image
//                   alt="Default Avatar"
//                   src="/illustration-cartoon-of-a-cute-girl-standing-and-smiling-while-dressed-in-colorful-and-casual-clothes-vector.jpg"
//                   fill
//                   className="object-cover"
//                 />
//               )}
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold text-base-content">
//               {user?.name || "ইউজার"}
//             </h3>
//             <p className="text-sm text-base-content/70">
//               {user?.email || "email@example.com"}
//             </p>
//           </div>
//         </div>

//         {/* সাইন আউট বাটন */}
//         <button
//           onClick={handleSignOut}
//           className="btn btn-outline btn-error btn-sm gap-2"
//         >
//           <LogOut className="w-4 h-4" />
//           সাইন আউট
//         </button>
//       </div>

//       {/* 3. Card-Body & Form Section */}
//       <div className="card-body p-0 mt-6">
//         <h3 className="text-lg font-bold mb-2 text-base-content">তথ্য</h3>
//         <form onSubmit={handleUpdate} className="space-y-4">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-medium">নাম</span>
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="আপনার নাম লিখুন"
//               className="input input-bordered w-full"
//             />
//           </div>

//           <div>
//             <Link href="/profilepage/update">
//               <button
//                 type="submit"
//                 className="btn btn-neutral bg-green-700 hover:bg-green-800 border-none mt-4 text-white"
//               >
//                 আপডেট
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { ArrowLeft, LogOut, User } from "lucide-react";

// export default function ProfilePage() {
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [name, setName] = useState(user?.name || "");

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     // প্রোফাইল আপডেটের লজিক এখানে লিখুন
//     console.log("Updated Name:", name);
//   };

//   const handleSignOut = async () => {
//     await authClient.signOut();

//   };

//   if (isPending) {
//     return (
//       <div className="flex justify-center items-center min-h-[300px]">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto w-full m-4 flex flex-col gap-y-4">
//       {/* Top Header Section */}
//       <div className="my-4 mx-2 flex items-center justify-between">
//         <div className="text-center sm:text-left">
//           <h1 className="text-2xl font-bold text-base-content">
//             আমার প্রোফাইল
//           </h1>
//           <p className="text-sm text-base-content/70">
//             আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
//           </p>
//         </div>
//         <Link href="/" className="btn btn-ghost btn-circle" title="ফিরে যান">
//           <ArrowLeft className="w-6 h-6" />
//         </Link>
//       </div>

//       {/* User Info Card */}
//       <div className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl p-4 mx-2">
//         <div className="flex gap-4 items-center">
//           <div className="avatar ring-primary ring-offset-base-100 ring-2 ring-offset-2 rounded-2xl">
//             <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
//               {user?.image ? (
//                 <Image
//                   alt={user?.name || "User Avatar"}
//                   src={user.image}
//                   fill
//                   className="object-cover"
//                 />
//               ) : (
//                 <User className="w-10 h-10 mt-1 text-base-content/50" />
//               )}
//             </div>
//           </div>
//           <div>
//             <h1 className="text-xl font-semibold text-gray-900">
//               {user?.name || "ইউজার"}
//             </h1>
//             <p className="text-sm text-gray-500">
//               {user?.email || "email@example.com"}
//             </p>
//           </div>
//         </div>

//         {/* Sign Out Button */}
//         <div>
//           <button
//             onClick={handleSignOut}
//             className="btn border-none text-red-700 bg-transparent hover:bg-red-50 gap-2"
//           >
//             <LogOut className="w-4 h-4" />
//             সাইন আউট
//           </button>
//         </div>
//       </div>

//       {/* Update Info Form Card */}
//       <div className="bg-white rounded-2xl border border-gray-200 p-4 mx-2">
//         <h1 className="text-xl font-semibold mb-2 text-gray-900">তথ্য</h1>
//         <form onSubmit={handleUpdate}>
//           <fieldset className="fieldset border-none rounded-box w-full p-0 space-y-2">
//             <label className="label font-medium text-gray-700">নাম</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="input input-bordered w-full"
//               placeholder="আপনার নাম লিখুন"
//               required
//             />

//             <Link href="/profilepage/update" className="inline-block">
//               <button
//                 type="submit"
//                 className="btn btn-neutral bg-green-700 hover:bg-green-800 border-none mt-4 text-white"
//               >
//                 আপডেট
//               </button>
//             </Link>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowLeft, LogOut, User } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    // প্রোফাইল আপডেটের লজিক এখানে লিখুন
    console.log("Updated Name:", name);
  };

  const handleSignOut = async () => {
    const { data, error } = await authClient.signOut();

    if (error) {
      console.error(error);
      toast.error("সাইন আউট ব্যর্থ হয়েছে।");
      return;
    }

    if (data) {
      toast.success("সফলভাবে সাইন আউট হয়েছে।");
      router.push("/Signup");
    }
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full m-4 flex flex-col gap-y-4">
      {/* Top Header Section */}
      <div className="my-4 mx-2 flex items-center justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-base-content">
            আমার প্রোফাইল
          </h1>
          <p className="text-sm text-base-content/70">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>
        <Link href="/" className="btn btn-ghost btn-circle" title="ফিরে যান">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* User Info Card */}
      <div className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl p-4 mx-2">
        <div className="flex gap-4 items-center">
          <div className="avatar ring-primary ring-offset-base-100 ring-2 ring-offset-2 rounded-2xl">
            <div className="relative w-16 h-16 overflow-hidden rounded-2xl flex items-center justify-center bg-base-200">
              {user?.image ? (
                <Image
                  alt={user?.name || "User Avatar"}
                  src={user.image}
                  fill
                  className="object-cover"
                />
              ) : (
                <User className="w-10 h-10 mt-1 text-base-content/50" />
              )}
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {user?.name || "ইউজার"}
            </h1>
            <p className="text-sm text-gray-500">
              {user?.email || "email@example.com"}
            </p>
          </div>
        </div>

        {/* Sign Out Button */}
        <div>
          <button
            onClick={handleSignOut}
            className="btn border-none text-red-700 bg-transparent hover:bg-red-50 gap-2"
          >
            <LogOut className="w-4 h-4" />
            সাইন আউট
          </button>
        </div>
      </div>

      {/* Update Info Form Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 mx-2">
        <h1 className="text-xl font-semibold mb-2 text-gray-900">তথ্য</h1>
        <form onSubmit={handleUpdate}>
          <fieldset className="fieldset border-none rounded-box w-full p-0 space-y-2">
            <label className="label font-medium text-gray-700">নাম</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              placeholder="আপনার নাম লিখুন"
              required
            />

            <Link href="/profilepage/update" className="inline-block">
              <button
                type="submit"
                className="btn btn-neutral bg-green-700 hover:bg-green-800 border-none mt-4 text-white"
              >
                আপডেট
              </button>
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
