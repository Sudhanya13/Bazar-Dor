// "use client";

// import { useState } from "react";
// import Productscard from "./homepage/Productscard";

// const SortingCategoryData = ({ data }) => {
//   const [sort, setSort] = useState("default");

//   const sortProduct = () => {
//     const sortedProduct = [...data];

//     if (sort === "priceLowToHigh") {
//       sortedProduct.sort((a, b) => a.today - b.today);
//     } else if (sort === "priceHighToLow") {
//       sortedProduct.sort((a, b) => b.today - a.today);
//     }

//     return sortedProduct;
//   };

//   return (
//     <>
//       <div className="bg-white border border-gray-200 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center px-4 my-4">
//         <p className="m-4">
//           মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
//         </p>

//         <div className="flex items-center gap-2 px-4 pb-4 sm:pb-0">
//           <p>সাজান:</p>

//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="select rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
//           >
//             <option value="default">ডিফল্ট</option>
//             <option value="priceLowToHigh">দাম: কম থেকে বেশি</option>
//             <option value="priceHighToLow">দাম: বেশি থেকে কম</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
//         {sortProduct().map((item) => (
//           <Productscard key={item.id} data={item} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SortingCategoryData;
"use client";

import { useState } from "react";
import Link from "next/link";

const toBengaliNumerals = (num) => {
  if (num === undefined || num === null) return "";

  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return String(num).replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
};

export default function SortingCategoryData({ data }) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...data].sort((a, b) => {
    const priceA = Number(a.today ?? a.price ?? 0);
    const priceB = Number(b.today ?? b.price ?? 0);

    if (sort === "priceLowToHigh") return priceA - priceB;
    if (sort === "priceHighToLow") return priceB - priceA;

    return 0;
  });

  return (
    <div>
      {/* Sorting Controls */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-base-content/70">
          মোট {toBengaliNumerals(data.length)} টি পণ্য
        </p>

        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium">
            সাজান:
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="default">ডিফল্ট</option>
            <option value="priceLowToHigh">দাম: কম থেকে বেশি</option>
            <option value="priceHighToLow">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      {/* Sorted Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedProducts.map((item) => {
          const pct = Number(item.change?.pct ?? 0);
          const isIncrease = pct > 0;
          const isDecrease = pct < 0;

          return (
            <Link
              key={item.id || item.slug || item.nameBn}
              href={`/product/${item.slug || item.id}`}
              className="group block rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="card flex h-full flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <div className="flex items-center justify-center bg-base-200/50 py-6">
                  <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                    {item.image || item.icon || "🍚"}
                  </span>
                </div>

                <div className="card-body flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h2 className="card-title text-xl font-bold transition-colors group-hover:text-primary">
                      {item.nameBn || item.name || "পণ্য"}
                    </h2>

                    <span className="mt-1.5 inline-block rounded-md bg-base-200 px-2.5 py-1 text-xs">
                      {item.unitBn || "প্রতি কেজি"}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-base-200 pt-3">
                    <div>
                      <p className="text-xs text-base-content/70">আজকের দাম</p>
                      <p className="text-2xl font-extrabold text-primary">
                        ৳ {toBengaliNumerals(item.today ?? item.price)}
                      </p>
                    </div>

                    <div
                      className={`badge gap-1 border px-3 py-3 font-semibold ${
                        isIncrease
                          ? "border-red-200 bg-red-50 text-red-600"
                          : isDecrease
                            ? "border-green-200 bg-green-50 text-green-600"
                            : "border-gray-200 bg-gray-100 text-gray-500"
                      }`}
                    >
                      <span>{isIncrease ? "▲" : isDecrease ? "▼" : "—"}</span>
                      <span>{toBengaliNumerals(Math.abs(pct))}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
