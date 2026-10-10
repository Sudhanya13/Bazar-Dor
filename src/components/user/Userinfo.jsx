// "use client";

// import { authClient } from "@/lib/auth-client";
// import { toast } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Userinfo() {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;
//   console.log(user);
//   const router = useRouter();

//   const handlesignout = async () => {
//     const { error } = await authClient.signOut();

//     if (error) {
//       toast.error("সাইন আউট ব্যর্থ হয়েছে।");
//       return;
//     }

//     toast.success("সফলভাবে সাইন আউট হয়েছে।");
//     router.push("/");
//     router.refresh();
//   };

//   return (
//     <div>
//       {user ? (
//         <div className="flex items-center gap-2">
//           {/* <div className="avatar"> */}
//           {/* <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-bold uppercase text-white">
//                 {user.name?.charAt(0) || "U"}
//               </div>
//             </div> */}
//           <div className="avatar">
//             <div className="relative h-48 w-48 overflow-hidden rounded-xl">
//               <Image
//                 alt="Tailwind-CSS-Avatar-component"
//                 height={55}
//                 width={45}
//                 src={user.image}
//                 className=" object-cover"
//               />
//             </div>
//           </div>

//           <h2>{user?.name}</h2>
//           <button onClick={handlesignout} className="btn btn-block">
//             Signout
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center gap-2">
//           <Link href="/Signin">
//             <button className="btn btn-ghost">সাইন ইন</button>
//           </Link>

//           <Link href="/Signup">
//             <button className="btn bg-green-600 text-white">সাইন আপ</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Userinfo() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handlesignout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট ব্যর্থ হয়েছে।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে।");
    setIsOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      {user ? (
        <div className="relative flex items-center gap-3">
          {/* User image */}
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "User"}
                fill
                sizes="40px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-green-600 text-lg font-bold text-white">
                {user.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
          </div>

          {/* Name and dropdown arrow */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Open user menu"
            className="flex items-center gap-2 font-medium text-gray-800 hover:text-green-600"
          >
            <span>{user.name}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <>
              {/* Click outside to close */}
              <button
                type="button"
                aria-label="Close user menu"
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 cursor-default"
              />

              <div className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                {/* User information */}
                <div className="border-b border-gray-200 px-4 py-4">
                  <p className="truncate font-semibold text-gray-900">
                    {user.name}
                  </p>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>

                {/* Menu options */}
                <div className="p-2">
                  <Link
                    href="/profilepage"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21a8 8 0 0 0-16 0" />
                    </svg>
                    My Profile
                  </Link>

                  <button
                    type="button"
                    onClick={handlesignout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" x2="9" y1="12" y2="12" />
                    </svg>
                    Signout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/Signin">
            <button className="btn btn-ghost">সাইন ইন</button>
          </Link>

          <Link href="/Signup">
            <button className="btn bg-green-600 text-white">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
}
