import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
export default function Navbar() {
  return (
    <>
      <nav className=" px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2  ">
            <Image
              className="bg-green-200  h-13
              w-12"
              src="/logo-icon.png"
              alt="logo"
              height={45}
              width={55}
            />

            <div>
              <h1 className="text-xl font-medium"> 🛒 বাজার দর</h1>

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
