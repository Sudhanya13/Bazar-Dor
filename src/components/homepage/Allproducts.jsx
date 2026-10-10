import Image from "next/image";
import React from "react";
import Productscard from "./Productscard";
import Link from "next/link";

// const fetchAllProducts = async () => {
//   const res = await fetch(
//     "https://api.api-store.workers.dev/api/bazardor/products",
//   );
//   return res.json();
// };
const fetchAllProducts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  return res.json();
};

export default async function Allproducts() {
  const allproducts = await fetchAllProducts();
  console.log(allproducts);
  return (
    <>
      <div className="items-center ">
        <h1 className="text-2xl text-black font-bold">সব পণ্য</h1>
        <p className="text-xl text-grey">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
      </div>

      <div className="container mx-auto  max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Productscard allproducts={allproducts}></Productscard>
        </div>
      </div>
    </>
  );
}
