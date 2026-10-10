// // // import React from "react";

// // // const fetchAllProducts = async () => {
// // //   const res = await fetch(
// // //     "https://api.api-store.workers.dev/api/bazardor/products",
// // //   );
// // //   return res.json();
// // // };
// // // export default function IncreasePrice() {
// // //   return

// // //   <div>

// // //   </div>;
// // // }

// // import React from "react";
// // import Link from "next/link";

// // const fetchAllProducts = async () => {
// //   const res = await fetch(
// //     "https://api.api-store.workers.dev/api/bazardor/products",
// //     { cache: "no-store" },
// //   );

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch products");
// //   }

// //   const data = await res.json();

// //   return Array.isArray(data) ? data : data.products || data.data || [];
// // };

// // const toBengaliNumerals = (num) => {
// //   if (num === undefined || num === null) return "";

// //   return String(num).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
// // };

// // export default async function IncreasePrice() {
// //   let products = [];

// //   try {
// //     products = await fetchAllProducts();
// //   } catch (error) {
// //     console.error("Failed to load products:", error);
// //   }

// //   // Show only products with increased prices
// //   const increasedProducts = products.filter(
// //     (item) => Number(item.change?.pct) > 0,
// //   );

// //   if (increasedProducts.length === 0) {
// //     return (
// //       <section className="container mx-auto max-w-7xl px-4 py-10">
// //         <h2 className="text-2xl font-bold">📈 যেসব পণ্যের দাম বেড়েছে</h2>
// //         <p className="mt-4 text-base-content/70">
// //           বর্তমানে দাম বেড়েছে এমন কোনো পণ্য পাওয়া যায়নি।
// //         </p>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="container mx-auto mt-10 max-w-7xl px-4">
// //       <div className="mb-6">
// //         <h2 className="text-2xl font-bold text-base-content">
// //           📈 যেসব পণ্যের দাম বেড়েছে
// //         </h2>
// //         <p className="mt-1 text-sm text-base-content/70">
// //           দাম বৃদ্ধি পাওয়া পণ্যের তালিকা
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //         {increasedProducts.map((item) => {
// //           const pct = Number(item.change.pct);

// //           return (
// //             <Link
// //               key={item.id || item.slug || item.nameBn}
// //               href={`/product/${item.slug}`}
// //               className="group block"
// //             >
// //               <div className="card h-full overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
// //                 {/* Product Image */}
// //                 <div className="flex items-center justify-center bg-base-200/50 py-6">
// //                   <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
// //                     {item.image || item.icon || "🛒"}
// //                   </span>
// //                 </div>

// //                 {/* Product Details */}
// //                 <div className="card-body gap-3 p-5">
// //                   <div>
// //                     <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
// //                       {item.nameBn}
// //                     </h3>

// //                     <span className="mt-2 inline-block rounded-md bg-base-200 px-3 py-1 text-xs text-base-content/70">
// //                       {item.unitBn || "প্রতি কেজি"}
// //                     </span>
// //                   </div>

// //                   {/* Price */}
// //                   <div className="mt-2 flex items-center justify-between border-t border-base-200 pt-4">
// //                     <div>
// //                       <p className="text-xs text-base-content/70">আজকের দাম</p>

// //                       <p className="text-2xl font-extrabold text-primary">
// //                         ৳ {toBengaliNumerals(item.today)}
// //                       </p>
// //                     </div>

// //                     {/* Increase Badge */}
// //                     <span className="badge gap-1 border border-red-200 bg-red-50 px-3 py-3 font-semibold text-red-600">
// //                       <span>▲</span>
// //                       {toBengaliNumerals(Math.abs(pct))}%
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Link>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // }

// import React from "react";
// import Link from "next/link";

// const API_URL =
//   "https://api.api-store.workers.dev/api/bazardor/products";

// async function fetchAllProducts() {
//   try {
//     const res = await fetch(API_URL, { cache: "no-store" });

//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data = await res.json();

//     return Array.isArray(data)
//       ? data
//       : data.products || data.data || [];
//   } catch (error) {
//     console.error("Product fetch error:", error);
//     return [];
//   }
// }

// function bnNumber(value, decimals = 0) {
//   const number = Number(value);

//   if (!Number.isFinite(number)) return "০";

//   return number.toLocaleString("bn-BD", {
//     minimumFractionDigits: decimals,
//     maximumFractionDigits: decimals,
//   });
// }

// function ProductCard({ item }) {
//   const pct = Number(item.change?.pct ?? 0);

//   const isUp = pct > 0;
//   const isDown = pct < 0;

//   const badgeClass = isUp
//     ? "border-green-200 bg-green-50 text-green-700"
//     : isDown
//       ? "border-red-200 bg-red-50 text-red-600"
//       : "border-gray-200 bg-gray-100 text-gray-500";

//   const arrow = isUp ? "▲" : isDown ? "▼" : "—";

//   return (
//     <Link
//       href={`/product/${item.slug}`}
//       className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//     >
//       <article className="card flex h-full flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
//         {/* Emoji / Illustration */}
//         <div className="flex h-36 items-center justify-center bg-base-200/50">
//           <span
//             role="img"
//             aria-label={item.nameBn || "পণ্য"}
//             className="text-6xl transition-transform duration-300 group-hover:scale-110"
//           >
//             {item.image || item.icon || "🛒"}
//           </span>
//         </div>

//         {/* Product Information */}
//         <div className="card-body flex flex-1 flex-col justify-between gap-4 p-4">
//           <div>
//             <h3 className="text-lg font-bold text-base-content transition-colors group-hover:text-primary">
//               {item.nameBn || item.name || "পণ্য"}
//             </h3>

//             <p className="mt-2 inline-block rounded-md bg-base-200 px-2.5 py-1 text-xs text-base-content/70">
//               {item.unitBn || "প্রতি কেজি"}
//             </p>
//           </div>

//           {/* Price + Change */}
//           <div className="flex items-center justify-between gap-2 border-t border-base-200 pt-3">
//             <div>
//               <p className="text-xs text-base-content/70">
//                 আজকের দাম
//               </p>

//               <p className="mt-1 text-xl font-extrabold text-primary">
//                 {bnNumber(item.today)} টাকা
//               </p>
//             </div>

//             <span
//               className={`badge shrink-0 gap-1 border px-2.5 py-3 font-semibold ${badgeClass}`}
//               aria-label={`দাম পরিবর্তন ${bnNumber(Math.abs(pct), 1)} শতাংশ`}
//             >
//               {arrow} {bnNumber(Math.abs(pct), 1)}%
//             </span>
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// }

// function Section({ title, icon, products, emptyMessage }) {
//   return (
//     <section className="mb-12">
//       <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <h2 className="text-2xl font-extrabold text-base-content">
//             {title} {icon}
//           </h2>

//           <p className="mt-1 text-sm text-base-content/70">
//             আজকের বাজারদরের পরিবর্তন
//           </p>
//         </div>

//         <span className="rounded-full bg-base-200 px-3 py-1 text-sm font-medium">
//           {bnNumber(products.length)} টি পণ্য
//         </span>
//       </div>

//       {products.length === 0 ? (
//         <p className="rounded-xl border border-base-200 p-6 text-center text-base-content/70">
//           {emptyMessage}
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
//           {products.map((item, index) => (
//             <ProductCard
//               key={item.id || item.slug || item.nameBn || index}
//               item={item}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// export default async function ProductPriceSections() {
//   const products = await fetchAllProducts();

//   const risers = products
//     .filter((item) => Number(item.change?.pct) > 0)
//     .sort(
//       (a, b) =>
//         Number(b.change?.pct) - Number(a.change?.pct)
//     )
//     .slice(0, 6);

//   const fallers = products
//     .filter((item) => Number(item.change?.pct) < 0)
//     .sort(
//       (a, b) =>
//         Number(a.change?.pct) - Number(b.change?.pct)
//     )
//     .slice(0, 6);

//   return (
//     <div className="container mx-auto max-w-[1600px] px-4 py-8">
//       <Section
//         title="আজ দাম বেড়েছে"
//         icon="▲"
//         products={risers}
//         emptyMessage="আজ দাম বেড়েছে এমন কোনো পণ্য নেই।"
//       />

//       <Section
//         title="আজ দাম কমেছে"
//         icon="▼"
//         products={fallers}
//         emptyMessage="আজ দাম কমেছে এমন কোনো পণ্য নেই।"
//       />
//     </div>
//   );
// }
import React from "react";

import Link from "next/link";
import { connection } from "next/server";

const API_URL = "https://api.api-store.workers.dev/api/bazardor/products";

async function fetchAllProducts() {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return Array.isArray(data) ? data : data.products || data.data || [];
  } catch (error) {
    console.error("Product fetch error:", error);
    return [];
  }
}

// Safely extract numeric percentage change value
function getPctValue(item) {
  const rawPct = item?.change?.pct ?? item?.pctChange ?? item?.pct;
  if (rawPct === null || rawPct === undefined) return 0;

  // Clean string in case API returns "%" symbol or non-numeric characters
  const cleanStr = String(rawPct).replace(/[^0-9.-]/g, "");
  const num = parseFloat(cleanStr);
  return Number.isFinite(num) ? num : 0;
}

function bnNumber(value, decimals = 0) {
  const number = Number(value);

  if (!Number.isFinite(number)) return "০";

  return number.toLocaleString("bn-BD", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function ProductCard({ item }) {
  const pct = getPctValue(item);

  const isUp = pct > 0;
  const isDown = pct < 0;

  const badgeClass = isUp
    ? "border-green-200 bg-green-50 text-green-700"
    : isDown
      ? "border-red-200 bg-red-50 text-red-600"
      : "border-gray-200 bg-gray-100 text-gray-500";

  const arrow = isUp ? "▲" : isDown ? "▼" : "—";

  return (
    <Link
      href={`/product/${item.slug || "#"}`}
      className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <article className="card flex h-full flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Emoji / Illustration */}
        <div className="flex h-36 items-center justify-center bg-base-200/50">
          <span
            role="img"
            aria-label={item.nameBn || "পণ্য"}
            className="text-6xl transition-transform duration-300 group-hover:scale-110"
          >
            {item.image || item.icon || "🛒"}
          </span>
        </div>

        {/* Product Information */}
        <div className="card-body flex flex-1 flex-col justify-between gap-4 p-4">
          <div>
            <h3 className="text-lg font-bold text-base-content transition-colors group-hover:text-primary">
              {item.nameBn || item.name || "পণ্য"}
            </h3>

            <p className="mt-2 inline-block rounded-md bg-base-200 px-2.5 py-1 text-xs text-base-content/70">
              {item.unitBn || item.unit || "প্রতি কেজি"}
            </p>
          </div>

          {/* Price + Change */}
          <div className="flex items-center justify-between gap-2 border-t border-base-200 pt-3">
            <div>
              <p className="text-xs text-base-content/70">আজকের দাম</p>

              <p className="mt-1 text-xl font-extrabold text-primary">
                {bnNumber(item.today || item.price || 0)} টাকা
              </p>
            </div>

            <span
              className={`badge shrink-0 gap-1 border px-2.5 py-3 font-semibold ${badgeClass}`}
              aria-label={`দাম পরিবর্তন ${bnNumber(Math.abs(pct), 1)} শতাংশ`}
            >
              {arrow} {bnNumber(Math.abs(pct), 1)}%
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Section({ title, icon, products, emptyMessage, iconColor = "" }) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-base-content flex items-center gap-2">
            {title} <span className={iconColor}>{icon}</span>
          </h2>
        </div>

        <span className="rounded-full bg-base-200 px-3 py-1 text-sm font-medium">
          {bnNumber(products.length)} টি পণ্য
        </span>
      </div>

      {products.length === 0 ? (
        <p className="rounded-xl border border-base-200 p-6 text-center text-base-content/70 bg-base-100">
          {emptyMessage}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <ProductCard
              key={item.id || item.slug || item.nameBn || index}
              item={item}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default async function ProductPriceSections() {
  await connection();
  const products = await fetchAllProducts();

  // Price Increased: percentage > 0 (Sorted from highest increase to lowest)
  const risers = products
    .filter((item) => getPctValue(item) > 0)
    .sort((a, b) => getPctValue(b) - getPctValue(a))
    .slice(0, 6);

  // Price Decreased: percentage < 0 (Sorted from highest decrease to lowest)
  const fallers = products
    .filter((item) => getPctValue(item) < 0)
    .sort((a, b) => getPctValue(a) - getPctValue(b))
    .slice(0, 6);

  return (
    <div className="container mx-auto max-w-[1600px] px-4 py-8">
      <Section
        title="আজ দাম বেড়েছে"
        icon="▲"
        iconColor="text-red-600"
        products={risers}
        emptyMessage="আজ দাম বেড়েছে এমন কোনো পণ্য নেই।"
      />

      <Section
        title="আজ দাম কমেছে"
        icon="▼"
        iconColor="text-green-600"
        products={fallers}
        emptyMessage="আজ দাম কমেছে এমন কোনো পণ্য নেই।"
      />
    </div>
  );
}
