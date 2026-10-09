import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white mt-14">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-3 px-4 py-6 border-t border-gray-200 text-gray-500 text-sm">
        <div>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</div>

        <div>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</div>
      </div>
    </footer>
  );
}
