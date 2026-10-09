import Link from "next/link";
import React from "react";

// Fetch products and filter by category slug
const getCategoryDetails = async (categorySlug) => {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/products",
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    const products = Array.isArray(data)
      ? data
      : data.products || data.data || [];

    // Filter products belonging to this category
    const filteredProducts = products.filter((item) => {
      const category =
        typeof item.category === "object" ? item.category?.slug : item.category;

      const categorySlugValue =
        item.categorySlug ||
        item.category?.slug ||
        item.category_slug ||
        item.categoryId ||
        category;

      return String(categorySlugValue ?? "") === String(categorySlug);
    });

    return filteredProducts;
  } catch (error) {
    console.error("Failed to fetch category products:", error);
    return [];
  }
};

// Convert English digits to Bengali digits
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
      <div className="p-8 text-center text-gray-500">
        {" "}
        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  const allproducts = await getCategoryDetails(categorySlug);

  if (allproducts.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allproducts.map((item) => {
          const pct = Number(item.change?.pct ?? 0);
          const isIncrease = pct > 0;
          const isDecrease = pct < 0;

          return (
            <Link
              key={item.id || item.slug || item.nameBn}
              href={`/product/${item.slug}`}
              className="group block rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="card flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                {/* Product Image */}
                <div className="flex items-center justify-center bg-base-200/50 py-6">
                  <span
                    className="select-none text-7xl transition-transform duration-300 group-hover:scale-110"
                    role="img"
                    aria-label={item.nameBn || "পণ্য"}
                  >
                    {item.image || item.icon || "🍚"}
                  </span>
                </div>

                {/* Product Details */}
                <div className="card-body flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h2 className="card-title text-xl font-bold text-base-content transition-colors group-hover:text-primary">
                      {item.nameBn}
                    </h2>

                    <span className="mt-1.5 inline-block rounded-md bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/70">
                      {item.unitBn || "প্রতি কেজি"}
                    </span>
                  </div>

                  {/* Price and Change */}
                  <div className="mt-4 flex items-center justify-between border-t border-base-200 pt-3">
                    <div>
                      <p className="text-xs text-base-content/70">আজকের দাম</p>

                      <p className="text-2xl font-extrabold text-primary">
                        ৳ {toBengaliNumerals(item.today)}
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
                      aria-label={`দাম পরিবর্তন ${toBengaliNumerals(
                        Math.abs(pct),
                      )} শতাংশ`}
                    >
                      <span className="text-xs">
                        {isIncrease ? "▲" : isDecrease ? "▼" : "—"}
                      </span>

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
