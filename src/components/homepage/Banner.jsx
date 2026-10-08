"use client";
import Image from "next/image";
import React from "react";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

{
  /* <div className="container mx-auto flex justify-between max-w-7xl mt-25">
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
      </div> */
}

export default function Banner() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50/50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start max-w-xl text-left">
            {/* Date Badge */}
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full">
              {date}
            </span>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight md:leading-tight mb-4">
              আজকের বাজারের দাম <br className="hidden sm:inline" />
              <span className="text-emerald-600">এক নজরে</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* Call to Action */}
            <a href="#সব-পণ্য">
              <button className="btn btn-accent px-6 py-3 text-white font-medium bg-emerald-600 hover:bg-emerald-700 border-none rounded-lg shadow-sm hover:shadow transition-all">
                সব পণ্য দেখুন
              </button>
            </a>
          </div>

          {/* Right Column: Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/bazar-hero.png"
              alt="bazar hero banner"
              width={500}
              height={345}
              priority
              className="h-auto max-h-[345px] w-full max-w-md object-contain drop-shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
