import Image from "next/image";
import React from "react";
import Productscard from "./Productscard";
import Link from "next/link";

const fetchAllProducts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  return res.json();
};

export default async function Allproducts() {
  const allproducts = await fetchAllProducts();
  console.log(allproducts);
  return (
    <>
      <h1>সব পণ্য</h1>
      <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Productscard allproducts={allproducts}></Productscard>
        </div>
      </div>
    </>
  );
}
