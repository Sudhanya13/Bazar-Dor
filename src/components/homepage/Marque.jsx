// import React from "react";

// const fetchproducts = async () => {
//   const res = await fetch(
//     "https://api.api-store.workers.dev/api/bazardor/products",
//   );
//   const data = await res.json();
//   console.log(data);

//   return data;
// };

// export default async function Marque() {
//   const resdata = await fetchproducts();
//   console.log(resdata);
//   return(

//   <>

//   {data.map((item,index)=>{
//     return <div key="index">

//     </div>

//   })

// }

//   </>
//   );
// }

import React from "react";
export const instant = false;

const fetchproducts = async () => {
  try {
    const res = await fetch(
      // "https://api.api-store.workers.dev/api/bazardor/products",
      "https://openapi.programming-hero.com/api/bazardor/products",
      { cache: "no-store" },
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch marquee products:", error);
    return [];
  }
};

// Extracted item component to keep code DRY
function ProductItem({ item }) {
  return (
    <div className="flex items-center gap-2 px-6 py-3 whitespace-nowrap border-r border-green-200">
      <span className="text-xl">{item.image}</span>
      <span className="font-medium text-gray-800">{item.nameBn}</span>
      <span className="font-semibold text-gray-900">
        ৳{item.today}/{item.unit === "kg" ? "কেজি" : "লিটার"}
      </span>
      <span
        className={
          item.change?.dir === "up"
            ? "text-red-600 font-semibold"
            : item.change?.dir === "down"
              ? "text-green-500 font-semibold"
              : "text-gray-500 font-semibold"
        }
      >
        {item.change?.dir === "up"
          ? "▲"
          : item.change?.dir === "down"
            ? "▼"
            : "−"}{" "}
        {Math.abs(item.change?.pct ?? 0)}%
      </span>
    </div>
  );
}

export default async function Marquee() {
  const products = await fetchproducts();

  if (!Array.isArray(products) || products.length === 0) {
    return null; // Gracefully render nothing if fetch fails
  }

  return (
    <div className="w-full overflow-hidden bg-green-50 border-y border-green-200">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {/* First set */}
        <div className="flex shrink-0">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>

        {/* Duplicate set for seamless looping */}
        <div className="flex shrink-0" aria-hidden="true">
          {products.map((item) => (
            <ProductItem key={`duplicate-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
