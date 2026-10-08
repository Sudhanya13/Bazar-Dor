import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
import Link from "next/link";
const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
export default function Navbar() {
  return (
    <>
      <nav className=" px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2  ">
            <div className="bg-green-700 rounded-xl h-9 w-12 flex items-center justify-center">
              <span className=" text-2xl  ">🛒</span>
              {/* <Image
                className="h-9   px-6 py-2 w-12"
                src="/logo-icon.png"
                alt="logo"
                height={45}
                width={55}
              /> */}
            </div>

            <div>
              <Link href="/">
                <h1 className="text-xl text-[#000000] font-bold"> বাজার দর</h1>
              </Link>

              <p className="text-sm text-gray-600">{date}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost  ">সাইন ইন</button>

            <button className="btn  bg-green-600">সাইন আপ</button>
          </div>
        </div>
        <div>
          <Navlinks></Navlinks>
        </div>
      </nav>
    </>
  );
}
