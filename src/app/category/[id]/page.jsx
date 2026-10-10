import SortingCategoryData from "@/components/SortingCategoryData";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// export const instant = false;

// // Fetch products and filter by category slug
// const getCategoryDetails = async (categorySlug) => {
//   try {
//     const res = await fetch(
//       `https://openapi.programming-hero.com/api/bazardor/products?category=${categorySlug}`,

//       { cache: "no-store" },
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data = await res.json();

//     const products = Array.isArray(data)
//       ? data
//       : data.products || data.data || [];

//     // Filter products belonging to this category
//     const filteredProducts = products.filter((item) => {
//       const category =
//         typeof item.category === "object" ? item.category?.slug : item.category;

//       const categorySlugValue =
//         item.categorySlug ||
//         item.category?.slug ||
//         item.category_slug ||
//         item.categoryId ||
//         category;

//       return String(categorySlugValue ?? "") === String(categorySlug);
//     });

//     return filteredProducts;
//   } catch (error) {
//     console.error("Failed to fetch category products:", error);
//     return [];
//   }
// };

// // Convert English digits to Bengali digits
// const toBengaliNumerals = (num) => {
//   if (num === undefined || num === null) return "";

//   const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

//   return String(num).replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
// };

// export default async function Page({ params }) {
//   const resolvedParams = await params;
//   const categorySlug = resolvedParams?.slug || resolvedParams?.id;

//   if (!categorySlug) {
//     return (
//       <div className="p-8 text-center text-gray-500">
//         {" "}
//         এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
//       </div>
//     );
//   }

//   const allproducts = await getCategoryDetails(categorySlug);

//   if (allproducts.length === 0) {
//     return (
//       <div className="p-8 text-center text-gray-500">
//         এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto max-w-7xl p-4">
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {allproducts.map((item) => {
//           const pct = Number(item.change?.pct ?? 0);
//           const isIncrease = pct > 0;
//           const isDecrease = pct < 0;

//           return (
//             <>
//               <div>
//                 <div>
//                   <span>{item.icon}</span>
//                 </div>

//                 <div>
//                   <h2>{item.nameBn}</h2>
//                   <p>
//                     <span className="rounded-full bg-base-200 px-3 py-1 text-sm font-medium">
//                       {bnNumber(categories.length)} টি পণ্য
//                     </span>{" "}
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 Sort control: সাজান: ডিফল্ট | দাম: কম থেকে বেশি | দাম: বেশি থেকে
//                 কম .
//               </div>
//               <Link
//                 key={item.id || item.slug || item.nameBn}
//                 href={`/product/${item.slug}`}
//                 className="group block rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//               >
//                 <div className="card flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
//                   {/* Product Image */}
//                   <div className="flex items-center justify-center bg-base-200/50 py-6">
//                     <span
//                       className="select-none text-7xl transition-transform duration-300 group-hover:scale-110"
//                       role="img"
//                       aria-label={item.nameBn || "পণ্য"}
//                     >
//                       {item.image || item.icon || "🍚"}
//                     </span>
//                   </div>

//                   {/* Product Details */}
//                   <div className="card-body flex flex-1 flex-col justify-between p-5">
//                     <div>
//                       <h2 className="card-title text-xl font-bold text-base-content transition-colors group-hover:text-primary">
//                         {item.nameBn}
//                       </h2>

//                       <span className="mt-1.5 inline-block rounded-md bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/70">
//                         {item.unitBn || "প্রতি কেজি"}
//                       </span>
//                     </div>

//                     {/* Price and Change */}
//                     <div className="mt-4 flex items-center justify-between border-t border-base-200 pt-3">
//                       <div>
//                         <p className="text-xs text-base-content/70">
//                           আজকের দাম
//                         </p>

//                         <p className="text-2xl font-extrabold text-primary">
//                           ৳ {toBengaliNumerals(item.today)}
//                         </p>
//                       </div>

//                       <div
//                         className={`badge gap-1 border px-3 py-3 font-semibold ${
//                           isIncrease
//                             ? "border-red-200 bg-red-50 text-red-600"
//                             : isDecrease
//                               ? "border-green-200 bg-green-50 text-green-600"
//                               : "border-gray-200 bg-gray-100 text-gray-500"
//                         }`}
//                         aria-label={`দাম পরিবর্তন ${toBengaliNumerals(
//                           Math.abs(pct),
//                         )} শতাংশ`}
//                       >
//                         <span className="text-xs">
//                           {isIncrease ? "▲" : isDecrease ? "▼" : "—"}
//                         </span>

//                         <span>{toBengaliNumerals(Math.abs(pct))}%</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// keep this

// import Link from "next/link";

// // Fetch products and filter by category slug
// const getCategoryDetails = async (categorySlug) => {
//   try {
//     const res = await fetch(
//       `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(categorySlug)}`,
//       { cache: "no-store" },
//     );

//     if (!res.ok) {
//       throw new Error(`Failed to fetch products: ${res.status}`);
//     }

//     const jsonRes = await res.json();

//     // Handle common API response formats
//     const products = Array.isArray(jsonRes)
//       ? jsonRes
//       : Array.isArray(jsonRes.products)
//         ? jsonRes.products
//         : Array.isArray(jsonRes.data)
//           ? jsonRes.data
//           : Array.isArray(jsonRes.data?.products)
//             ? jsonRes.data.products
//             : [];

//     // Filter products belonging to this category
//     const filteredProducts = products.filter((item) => {
//       const categoryValue =
//         typeof item.category === "object" ? item.category?.slug : item.category;

//       const itemCategorySlug =
//         item.categorySlug ??
//         item.category_slug ??
//         item.category?.slug ??
//         item.categoryId ??
//         categoryValue;

//       return (
//         String(itemCategorySlug ?? "").toLowerCase() ===
//         String(categorySlug).toLowerCase()
//       );
//     });

//     return filteredProducts;
//   } catch (error) {
//     console.error("Failed to fetch category products:", error);
//     return [];
//   }
// };

// // Convert English digits to Bengali digits
// const toBengaliNumerals = (num) => {
//   if (num === undefined || num === null) return "";

//   const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

//   return String(num).replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
// };

// export default async function Page({ params }) {
//   const resolvedParams = await params;
//   const categorySlug = resolvedParams?.slug || resolvedParams?.id;

//   if (!categorySlug) {
//     return (
//       <div className="p-8 text-center text-gray-500">
//         এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
//       </div>
//     );
//   }

//   const allproducts = await getCategoryDetails(categorySlug);

//   if (allproducts.length === 0) {
//     return (
//       <div className="p-8 text-center text-gray-500">
//         এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
//       </div>
//     );
//   }

//   // Get category information from the first product
//   const firstProduct = allproducts[0];

//   return (
//     <div className="container mx-auto max-w-7xl p-4">
//       {/* Category Header */}
//       <div className="mb-6 flex items-center gap-3 rounded-2xl border border-base-200 bg-base-100 p-5">
//         <span className="text-4xl">
//           {firstProduct.categoryIcon || firstProduct.icon || "📁"}
//         </span>

//         <div>
//           <h1 className="text-2xl font-bold">
//             {firstProduct.categoryNameBn || "ক্যাটাগরি পণ্যসমূহ"}
//           </h1>

//           <p className="mt-1 text-sm text-base-content/70">
//             {toBengaliNumerals(allproducts.length)} টি পণ্য
//           </p>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {allproducts.map((item) => {
//           const pct = Number(item.change?.pct ?? 0);
//           const isIncrease = pct > 0;
//           const isDecrease = pct < 0;

//           return (
//             <Link
//               key={item.id || item.slug || item.nameBn}
//               href={`/product/${item.slug || item.id}`}
//               className="group block rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//             >
//               <div className="card flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
//                 {/* Product Image */}
//                 <div className="flex items-center justify-center bg-base-200/50 py-6">
//                   <span
//                     className="select-none text-7xl transition-transform duration-300 group-hover:scale-110"
//                     role="img"
//                     aria-label={item.nameBn || "পণ্য"}
//                   >
//                     {item.image || item.icon || "🍚"}
//                   </span>
//                 </div>

//                 {/* Product Details */}
//                 <div className="card-body flex flex-1 flex-col justify-between p-5">
//                   <div>
//                     <h2 className="card-title text-xl font-bold text-base-content transition-colors group-hover:text-primary">
//                       {item.nameBn || item.name || "পণ্য"}
//                     </h2>

//                     <span className="mt-1.5 inline-block rounded-md bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/70">
//                       {item.unitBn || "প্রতি কেজি"}
//                     </span>
//                   </div>

//                   {/* Price and Change */}
//                   <div className="mt-4 flex items-center justify-between border-t border-base-200 pt-3">
//                     <div>
//                       <p className="text-xs text-base-content/70">আজকের দাম</p>

//                       <p className="text-2xl font-extrabold text-primary">
//                         ৳ {toBengaliNumerals(item.today ?? item.price)}
//                       </p>
//                     </div>

//                     <div
//                       className={`badge gap-1 border px-3 py-3 font-semibold ${
//                         isIncrease
//                           ? "border-red-200 bg-red-50 text-red-600"
//                           : isDecrease
//                             ? "border-green-200 bg-green-50 text-green-600"
//                             : "border-gray-200 bg-gray-100 text-gray-500"
//                       }`}
//                       aria-label={`দাম পরিবর্তন ${toBengaliNumerals(
//                         Math.abs(pct),
//                       )} শতাংশ`}
//                     >
//                       <span className="text-xs">
//                         {isIncrease ? "▲" : isDecrease ? "▼" : "—"}
//                       </span>

//                       <span>{toBengaliNumerals(Math.abs(pct))}%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
const getCategoryDetails = async (categorySlug) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?category=${categorySlug}`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const jsonRes = await res.json();

    const products = Array.isArray(jsonRes)
      ? jsonRes
      : Array.isArray(jsonRes.products)
        ? jsonRes.products
        : Array.isArray(jsonRes.data)
          ? jsonRes.data
          : Array.isArray(jsonRes.data?.products)
            ? jsonRes.data.products
            : [];

    return products.filter((item) => {
      const categoryValue =
        typeof item.category === "object" ? item.category?.slug : item.category;

      const itemCategorySlug =
        item.categorySlug ??
        item.category_slug ??
        item.category?.slug ??
        item.categoryId ??
        categoryValue;

      return (
        String(itemCategorySlug ?? "").toLowerCase() ===
        String(categorySlug).toLowerCase()
      );
    });
  } catch (error) {
    console.error("Failed to fetch category products:", error);
    return [];
  }
};

const toBengaliNumerals = (num) => {
  if (num === undefined || num === null) return "";

  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return String(num).replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
};
export default async function Page({ params }) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams?.slug || resolvedParams?.id;

  if (!categorySlug) {
    return (
      <div className="p-8 text-center">
        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  const allproducts = await getCategoryDetails(categorySlug);

  if (allproducts.length === 0) {
    return (
      <div className="p-8 text-center">
        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  const firstProduct = allproducts[0];

  return (
    <div className="container mx-auto max-w-7xl p-4">
      {/* Category Header */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-base-200 bg-base-100 p-5">
        <span className="text-4xl">
          {firstProduct.categoryIcon || firstProduct.icon || "📁"}
        </span>

        <div>
          <h1 className="text-2xl font-bold">
            {firstProduct.categoryNameBn || "ক্যাটাগরি পণ্যসমূহ"}
          </h1>

          <p className="mt-1 text-sm text-base-content/70">
            {toBengaliNumerals(allproducts.length)} টি পণ্য
          </p>
        </div>
      </div>

      {/* Sorting and Products */}
      <SortingCategoryData data={allproducts} />
    </div>
  );
}

// import LoadingPage from "@/app/loading";
// import SortingCategoryData from "@/components/categoryPage/SortingCategoryData";
// import { ProductDetail } from "@/types/ProductDetail";
// import { notFound } from "next/navigation";
// import { Suspense } from "react";

// export const instant = false;

// // Async Server Component for Category Content
// async function CategoryContent({
//   params,
// }: {
//   params: Promise<{ categoryId: string }>;
// }) {
//   const { categoryId } = await params;

//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
//     { cache: "no-store" },
//   );

//   if (!res.ok) {
//     notFound();
//   }

//   const jsonRes = await res.json();
//   const data: ProductDetail[] = Array.isArray(jsonRes)
//     ? jsonRes
//     : jsonRes.products || jsonRes.data || [];

//   if (!data || data.length === 0) {
//     notFound();
//   }

//   const firstData = data[0];

//   return (
//     <div className="container mx-auto p-4 max-w-7xl">
//       {/* Category Header Card */}
//       <div className="flex items-center gap-4 bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-6">
//         <span className="p-3 rounded-2xl text-4xl border border-gray-100 bg-base-200/50 flex items-center justify-center">
//           {firstData.categoryIcon || firstData.icon || "📁"}
//         </span>
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">
//             {firstData.categoryNameBn || "ক্যাটাগরি পণ্যসমূহ"}
//           </h1>
//           <span className="text-gray-500 text-sm mt-1 inline-block">
//             {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
//           </span>
//         </div>
//       </div>

//       {/* Sorting Controls & Product Grid Component */}
//       <SortingCategoryData data={data} />
//     </div>
//   );
// }

// // Main Page Wrapper with Suspense Boundary
// const CategoryPage = ({
//   params,
// }: {
//   params: Promise<{ categoryId: string }>;
// }) => {
//   return (
//     <Suspense fallback={<LoadingPage />}>
//       <CategoryContent params={params} />
//     </Suspense>
//   );
// };

// export default CategoryPage;
// import LoadingPage from "@/app/loading";
// import CategoryContent from "@/components/CategoryContent";

// import { Suspense } from "react";

// export const instant = false;

// const CategoryPage = ({ params }) => {
//   return (
//     <Suspense fallback={<LoadingPage />}>
//       <CategoryContent params={params} />
//     </Suspense>
//   );
// };

// export default CategoryPage;
