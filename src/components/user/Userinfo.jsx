"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Userinfo() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handlesignout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট ব্যর্থ হয়েছে।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে।");
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2">
          {/* <div className="avatar"> */}
          {/* <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-bold uppercase text-white">
                {user.name?.charAt(0) || "U"}
              </div>
            </div> */}
          <div className="avatar">
            <div className="relative h-48 w-48 overflow-hidden rounded-xl">
              <Image
                alt="Tailwind-CSS-Avatar-component"
                height={55}
                width={45}
                src="/illustration-cartoon-of-a-cute-girl-standing-and-smiling-while-dressed-in-colorful-and-casual-clothes-vector.jpg"
                className=" object-cover"
              />
            </div>
          </div>

          <h2>{user?.name}</h2>
          <button onClick={handlesignout} className="btn btn-block">
            Signout
          </button>
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
