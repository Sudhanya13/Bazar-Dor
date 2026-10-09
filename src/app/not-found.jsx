"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-extrabold text-green-700">404</h1>

      <h2 className="text-2xl font-bold mt-4">পেজটি খুঁজে পাওয়া যায়নি!</h2>

      <p className="text-gray-500 mt-3">
        দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
