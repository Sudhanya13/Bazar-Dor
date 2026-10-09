import Link from "next/link";
import React from "react";

export default function Userinfo() {
  //   const { data: session } = authClient.useSession();
  //   const user = session?.user;
  //   console.log(usersession);

  return (
    <>
      {/* 
      <div>
        {user?<div> <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div>} */}

      {/* </div> */}
      <div className="flex items-center gap-2">
        <Link href="/Signin">
          {" "}
          <button className="btn btn-ghost  ">সাইন ইন</button>
        </Link>

        <Link href="/Signup">
          {" "}
          <button className="btn  bg-green-600">সাইন আপ</button>
        </Link>
      </div>
    </>
  );
}
