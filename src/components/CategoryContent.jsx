// import { notFound } from "next/navigation";
// import SortingCategoryData from "./SortingCategoryData";

// const CategoryContent = async ({ params }) => {
//   const { categoryId } = await params;

//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
//     { cache: "no-store" },
//   );

//   //   if (!res.ok) {
//   //     notFound();
//   //   }

//   const jsonRes = await res.json();

//   const data = Array.isArray(jsonRes)
//     ? jsonRes
//     : jsonRes.products || jsonRes.data || [];
//   console.log(jsonRes);

//   //   if (!data || data.length === 0) {
//   //     notFound();
//   //   }

//   const firstData = jsonRes[0];
//   console.log(data);

//   return (
//     <div className="container mx-auto max-w-7xl p-4">
//       <div className="mb-4 flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-4">
//         <span className="flex items-center justify-center rounded-2xl border border-gray-100 p-2 text-4xl">
//           {firstData?.categoryIcon || firstData?.icon || "📁"}
//         </span>

//         <div>
//           <h1 className="text-3xl font-bold">
//             {firstData?.categoryNameBn || "ক্যাটাগরি পণ্যসমূহ"}
//           </h1>

//           <span>
//             {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
//           </span>
//         </div>
//       </div>

//       <SortingCategoryData data={data} />
//     </div>
//   );
// };

// export default CategoryContent;
