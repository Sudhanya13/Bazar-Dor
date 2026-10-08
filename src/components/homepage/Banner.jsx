"use client";
import Image from "next/image";
import React from "react";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

export default function Banner() {
  return (
    <>
      <div className="container mx-auto flex justify-between max-w-7xl mt-25">
        <div className="flex flex-col ">
          <p>{date}</p>
          <h2>
            আজকের বাজারের দাম এক <br />
            নজরে
          </h2>
          <p>
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a href="#সব-পণ্য">
            {" "}
            <button className="btn btn-accent"> সব পণ্য </button>
          </a>
        </div>
        <div>
          <Image
            src="/bazar-hero.png"
            alt="banner"
            height={56}
            width={56}
            className="h-[345px] w-full"
          />
        </div>
      </div>
    </>
  );
}
