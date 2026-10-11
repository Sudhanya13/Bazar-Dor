// // import React from "react";

// // const Productdetails = async () => {
// //   const res = await fetch(
// //     "https://api.api-store.workers.dev/api/bazardor/products",
// //   );
// //   return res.json();
// // };

// // export default async function page({ params }) {
// //   const { id } = await params;
// //   const productData = await Productdetails();
// //   console.log(productData);
// //   return (
// //     <>
// //       <div>
// //         <div>
// //           {slug
// // প্রতি কেজি · মসলা

// // গতকালের তুলনায় আজ দাম বেড়েছে ৯.০%}
// //           {}
// //         </div>

// //         <div>
// //           {}
// //           {}
// //         </div>

// //         <div>
// //           <h2>দামের সারসংক্ষেপ</h2>

// //           <h2>বাজারভিত্তিক আজকের দাম</h2>
// //         </div>
// //       </div>
// //       মসলা
// //     </>
// //   );
// // }

// import React from "react";
// import { notFound } from "next/navigation";
// // export const instant = false;

// // Data Fetcher
// async function getProducts() {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/bazardor/products",
//     { next: { revalidate: 60 } },
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch product data");
//   }

//   return res.json();
// }

// export default async function Page({ params }) {
//   const { id } = await params;
//   const products = await getProducts();

//   // Find product by id or slug
//   const product = products.find(
//     (item) => item.id.toString() === id || item.slug === id,
//   );

//   if (!product) {
//     notFound();
//   }

//   // Format unit label in Bengali
//   const unitLabel =
//     product.unit === "kg"
//       ? "কেজি"
//       : product.unit === "litre"
//         ? "লিটার"
//         : product.unit;

//   const isUp = product.change.dir === "up";
//   const isDown = product.change.dir === "down";

//   return (
//     <div className="min-h-screen bg-slate-50/80 py-8 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-4xl mx-auto space-y-6">
//         {/* Top Header & Breadcrumb / Tag */}
//         <div className="flex items-center justify-between text-sm text-slate-500">
//           <div className="flex items-center gap-2">
//             <span className="text-base">{product.categoryIcon}</span>
//             <span className="font-medium hover:text-emerald-600 transition-colors cursor-pointer">
//               {product.categoryNameBn}
//             </span>
//             <span>/</span>
//             <span className="text-slate-900 font-semibold">
//               {product.nameBn}
//             </span>
//           </div>
//           <span className="text-xs bg-slate-200/60 text-slate-600 px-2.5 py-1 rounded-full font-medium">
//             আজকের বাজারদর
//           </span>
//         </div>

//         {/* Hero Product Card */}
//         <div className="relative overflow-hidden bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
//           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

//           <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
//             {/* Left: Icon & Title */}
//             <div className="flex items-center gap-5">
//               <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center text-4xl sm:text-5xl shadow-inner shrink-0">
//                 {product.image || product.categoryIcon}
//               </div>
//               <div>
//                 <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
//                   {product.nameBn}
//                 </h1>
//                 <div className="mt-1 flex items-center gap-2">
//                   <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
//                     প্রতি {unitLabel}
//                   </span>
//                   <span className="text-xs text-slate-400">•</span>
//                   <span className="text-xs text-slate-500 font-medium">
//                     শ্রেণী: {product.categoryNameBn}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Price Badge Status */}
//             <div className="flex flex-col sm:items-end gap-1">
//               <div
//                 className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
//                   isUp
//                     ? "bg-rose-50 text-rose-700 border border-rose-200/60"
//                     : isDown
//                       ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
//                       : "bg-slate-100 text-slate-700 border border-slate-200/60"
//                 }`}
//               >
//                 {isUp && (
//                   <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                     <path d="M12 4l-8 8h16l-8-8z" />
//                   </svg>
//                 )}
//                 {isDown && (
//                   <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                     <path d="M12 20l8-8H4l8 8z" />
//                   </svg>
//                 )}
//                 {!isUp && !isDown && (
//                   <span className="text-lg leading-none">•</span>
//                 )}

//                 <span>
//                   {isUp
//                     ? `গতকালের তুলনায় আজ দাম বেড়েছে ${Math.abs(product.change.pct)}%`
//                     : isDown
//                       ? `গতকালের তুলনায় আজ দাম কমেছে ${Math.abs(product.change.pct)}%`
//                       : "গতকালের তুলনায় দাম অপরিবর্তিত"}
//                 </span>
//               </div>
//               <p className="text-[11px] text-slate-400 mt-0.5">
//                 সর্বশেষ আপডেট: আজ
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Price History Overview Cards */}
//         <div>
//           <h2 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
//             <svg
//               className="w-4 h-4 text-emerald-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//               />
//             </svg>
//             দামের সারসংক্ষেপ
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
//             {/* Today */}
//             <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-4 sm:p-5 rounded-2xl shadow-md shadow-emerald-600/10 relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-3 opacity-10 text-white">
//                 <svg
//                   className="w-16 h-16"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
//                 </svg>
//               </div>
//               <p className="text-xs font-medium text-emerald-100">
//                 আজকের গড় দাম
//               </p>
//               <p className="text-2xl sm:text-3xl font-black mt-1">
//                 {product.today}টাকা
//               </p>
//               <p className="text-[11px] text-emerald-200 mt-1">
//                 সর্বশেষ বাজারদর
//               </p>
//             </div>

//             {/* Yesterday */}
//             <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
//               <p className="text-xs font-medium text-slate-500">গতকালের দাম</p>
//               <p className="text-xl sm:text-2xl font-bold text-slate-800 mt-1">
//                 {product.yesterday}টাকা
//               </p>
//               <p className="text-[11px] text-slate-400 mt-1">১ দিন পূর্বে</p>
//             </div>

//             {/* Last Week */}
//             <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
//               <p className="text-xs font-medium text-slate-500">
//                 গত সপ্তাহের দাম
//               </p>
//               <p className="text-xl sm:text-2xl font-bold text-slate-800 mt-1">
//                 {product.lastWeek}টাকা
//               </p>
//               <p className="text-[11px] text-slate-400 mt-1">৭ দিন পূর্বে</p>
//             </div>

//             {/* Last Month */}
//             <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
//               <p className="text-xs font-medium text-slate-500">গত মাসের দাম</p>
//               <p className="text-xl sm:text-2xl font-bold text-slate-800 mt-1">
//                 ৳{product.lastMonth}
//               </p>
//               <p className="text-[11px] text-slate-400 mt-1">৩০ দিন পূর্বে</p>
//             </div>
//           </div>
//         </div>

//         {/* Regional Market Prices Table */}
//         <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
//           <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//             <div>
//               <h2 className="text-lg font-bold text-slate-900">
//                 বাজারভিত্তিক আজকের দাম
//               </h2>
//               <p className="text-xs text-slate-500 mt-0.5">
//                 দেশের বিভিন্ন অঞ্চলের বাজারভিত্তিক সর্বনিম্ন ও সর্বাধিক দর
//               </p>
//             </div>
//             <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">
//               {product.markets?.length || 0}টি বাজার নিবন্ধিত
//             </span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm border-collapse">
//               <thead>
//                 <tr className="bg-slate-50/70 text-slate-600 text-xs uppercase tracking-wider border-b border-slate-100">
//                   <th className="py-3.5 px-5 font-bold">বাজার</th>
//                   <th className="py-3.5 px-5 font-bold">বিভাগ</th>
//                   <th className="py-3.5 px-5 font-bold text-center">
//                     সর্বনিম্ন
//                   </th>
//                   <th className="py-3.5 px-5 font-bold text-center">
//                     সর্বাধিক
//                   </th>
//                   <th className="py-3.5 px-5 font-bold text-right pr-6">
//                     গড় দাম
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 text-slate-700">
//                 {product.markets.map((item, idx) => {
//                   const avgPrice = ((item.min + item.max) / 2).toFixed(1);
//                   return (
//                     <tr
//                       key={idx}
//                       className="hover:bg-slate-50/80 transition-colors group"
//                     >
//                       <td className="py-4 px-5 font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
//                         {item.market}
//                       </td>
//                       <td className="py-4 px-5 text-slate-500 font-medium">
//                         <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs text-slate-600">
//                           {item.division}
//                         </span>
//                       </td>
//                       <td className="py-4 px-5 text-center font-medium text-slate-600">
//                         {item.min}টাকা
//                       </td>
//                       <td className="py-4 px-5 text-center font-medium text-slate-600">
//                         {item.max} টাকা
//                       </td>
//                       <td className="py-4 px-5 text-right pr-6 font-bold text-emerald-600 text-base">
//                         {avgPrice} টাকা
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { notFound } from "next/navigation";

async function getProducts() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  const data = await res.json();

  // Supports either a direct array or an API response object.
  return Array.isArray(data) ? data : (data.data ?? []);
}

export default async function Page({ params }) {
  const { id } = await params;
  const products = await getProducts();

  const product = products.find(
    (item) => String(item.id) === String(id) || item.slug === id,
  );

  if (!product) {
    notFound();
  }

  const markets = product.markets ?? [];

  const unitLabels = {
    kg: "কেজি",
    litre: "লিটার",
    liter: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
    pcs: "পিস",
    liter: "লিটার",
  };

  const unitLabel = unitLabels[product.unit] ?? product.unit ?? "পিস";

  // Calculate prices using the actual market data.
  const minPrices = markets
    .map((market) => Number(market.min))
    .filter(Number.isFinite);

  const maxPrices = markets
    .map((market) => Number(market.max))
    .filter(Number.isFinite);

  const marketAverages = markets
    .map((market) => {
      const min = Number(market.min);
      const max = Number(market.max);

      return Number.isFinite(min) && Number.isFinite(max)
        ? (min + max) / 2
        : null;
    })
    .filter((price) => price !== null);

  const minPrice = minPrices.length > 0 ? Math.min(...minPrices) : null;

  const maxPrice = maxPrices.length > 0 ? Math.max(...maxPrices) : null;

  const avgPrice =
    marketAverages.length > 0
      ? marketAverages.reduce((sum, price) => sum + price, 0) /
        marketAverages.length
      : null;

  const formatPrice = (price) =>
    price === null
      ? "তথ্য নেই"
      : `${Number(price.toFixed(2)).toLocaleString("bn-BD")} টাকা`;

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  return (
    <div className="min-h-screen bg-slate-50/80 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Summary */}
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span>{product.categoryIcon}</span>
            <span>{product.categoryNameBn}</span>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              {product.nameBn}
            </span>
          </div>

          <span className="text-xs bg-slate-200/60 text-slate-600 px-2.5 py-1 rounded-full font-medium">
            আজকের বাজারদর
          </span>
        </div>

        <section className="relative overflow-hidden bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center text-4xl sm:text-5xl shrink-0">
                {product.image || product.categoryIcon}
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {product.nameBn}
                </h1>

                <p className="text-sm text-slate-500 mt-2">
                  বিভিন্ন বাজারের আজকের দাম এক নজরে দেখুন।
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700">
                    প্রতি {unitLabel}
                  </span>

                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                    {product.categoryNameBn}
                  </span>

                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                    {product.nameBn}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1">
              <div
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold ${
                  isUp
                    ? "bg-rose-50 text-rose-700 border border-rose-200"
                    : isDown
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                }`}
              >
                {isUp
                  ? `গতকালের তুলনায় দাম বেড়েছে ${Math.abs(
                      Number(product.change?.pct ?? 0),
                    )}%`
                  : isDown
                    ? `গতকালের তুলনায় দাম কমেছে ${Math.abs(
                        Number(product.change?.pct ?? 0),
                      )}%`
                    : "গতকালের তুলনায় দাম অপরিবর্তিত"}
              </div>

              <p className="text-[11px] text-slate-400 mt-1">
                সর্বশেষ আপডেট: আজ
              </p>
            </div>
          </div>
        </section>

        {/* Price Summary */}
        <section>
          <h2 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Minimum Price */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  সর্বনিম্ন দাম
                </p>
                <span className="text-xl">📉</span>
              </div>

              <p className="text-2xl sm:text-3xl font-black text-emerald-700 mt-3">
                {formatPrice(minPrice)}
              </p>

              <p className="text-xs text-slate-400 mt-2">
                সব বাজারের মধ্যে সর্বনিম্ন
              </p>
            </div>

            {/* Maximum Price */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  সর্বাধিক দাম
                </p>
                <span className="text-xl">📈</span>
              </div>

              <p className="text-2xl sm:text-3xl font-black text-rose-600 mt-3">
                {formatPrice(maxPrice)}
              </p>

              <p className="text-xs text-slate-400 mt-2">
                সব বাজারের মধ্যে সর্বাধিক
              </p>
            </div>

            {/* Average Price */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-5 rounded-2xl shadow-md shadow-emerald-600/10">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-emerald-100">গড় দাম</p>
                <span className="text-xl">📊</span>
              </div>

              <p className="text-2xl sm:text-3xl font-black mt-3">
                {formatPrice(avgPrice)}
              </p>

              <p className="text-xs text-emerald-100 mt-2">
                সব বাজারের গড় দামের ভিত্তিতে
              </p>
            </div>
          </div>
        </section>

        {/* Market-wise Prices */}
        <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                বাজারভিত্তিক আজকের দাম
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                বিভিন্ন বাজারের সর্বনিম্ন, সর্বাধিক ও গড় দর
              </p>
            </div>

            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">
              {markets.length.toLocaleString("bn-BD")}টি বাজার নিবন্ধিত
            </span>
          </div>

          {markets.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 text-slate-600 text-xs border-b border-slate-100">
                    <th className="py-3.5 px-5 font-bold">বাজার</th>
                    <th className="py-3.5 px-5 font-bold">বিভাগ</th>
                    <th className="py-3.5 px-5 font-bold text-center">
                      সর্বনিম্ন
                    </th>
                    <th className="py-3.5 px-5 font-bold text-center">
                      সর্বাধিক
                    </th>
                    <th className="py-3.5 px-5 font-bold text-right pr-6">
                      গড় দাম
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {markets.map((item, idx) => {
                    const min = Number(item.min);
                    const max = Number(item.max);

                    const marketAverage =
                      Number.isFinite(min) && Number.isFinite(max)
                        ? (min + max) / 2
                        : null;

                    return (
                      <tr
                        key={`${item.market}-${idx}`}
                        className="hover:bg-slate-50/80 transition-colors group"
                      >
                        <td className="py-4 px-5 font-semibold text-slate-900 group-hover:text-emerald-700">
                          {item.market}
                        </td>

                        <td className="py-4 px-5 text-slate-500 font-medium">
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs text-slate-600">
                            {item.division}
                          </span>
                        </td>

                        <td className="py-4 px-5 text-center font-medium text-slate-600 whitespace-nowrap">
                          {formatPrice(Number.isFinite(min) ? min : null)}
                        </td>

                        <td className="py-4 px-5 text-center font-medium text-slate-600 whitespace-nowrap">
                          {formatPrice(Number.isFinite(max) ? max : null)}
                        </td>

                        <td className="py-4 px-5 text-right pr-6 font-bold text-emerald-600 whitespace-nowrap">
                          {formatPrice(marketAverage)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="p-6 text-sm text-slate-500 text-center">
              এই পণ্যের জন্য কোনো বাজারের তথ্য পাওয়া যায়নি।
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
