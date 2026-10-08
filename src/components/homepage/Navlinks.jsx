// import React, { useEffect, useState } from "react";
// export default function Navlinks() {
//   //      const [categories, setCategories] = useState([]);

//   //
//   // 2. Define the async function inside useEffect
//   const fetchCategories = async () => {
//     const response = await fetch(
//       "https://api.api-store.workers.dev/api/bazardor/categories",
//     );
//     const data = await response.json();

//
//  1. Crucial for using React Hooks in Next.js

import Link from "next/link";
// import React, { useEffect, useState } from "react"; // 2. Added missing imports
// import TestCard from "./TestCard";

const fetchCategories = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data = await response.json();
  //   console.log(data);
  return data;
};

export default async function Navlinks() {
  const data = await fetchCategories();
  // console.log(data);

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.api-store.workers.dev/api/bazardor/categories",
  //       );
  //       const resData = await response.json();

  //       // This will successfully print to your BROWSER console!
  //       console.log(resData);

  //       if (resData.success) {
  //         setCategories(resData.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchCategories(); // 4. This must sit cleanly outside the fetchCategories definition
  // }, []);

  return (
    <>
      <div className="mt-4 px-6 py-3 container flex gap-5 mx-auto max-w-7xl">
        {data.map((item, index) => (
          <div key={index}>
            <Link href={`/category/${item.slug}`} key={item.id}>
              <button className="btn btn-ghost ">
                {" "}
                {item.icon}
                {item.nameBn}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
