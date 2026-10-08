import Link from "next/link";
import React from "react";

export default function Productscard({ allproducts }) {
  return (
    <>
      {allproducts.map((item) => {
        // Check if price change is positive or negative for styling badge
        const isPositive = item.change?.pct >= 0;

        return (
          <Link
            key={item.id || item.nameBn}
            href={`/product/${item.slug}`}
            className="block"
          >
            <div
              key={item.id || item.nameBn}
              className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group"
            >
              {/* Image Container */}
              <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </span>

              {/* Card Body */}
              <div className="card-body p-5">
                {/* Header: Name & Unit */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="card-title text-xl font-bold text-base-content">
                      {item.nameBn}
                    </h2>
                    <span className="text-xs font-medium text-base-content/60 bg-base-200 px-2 py-0.5 rounded-md mt-1 inline-block">
                      প্রতি কেজি
                    </span>
                  </div>
                </div>

                {/* Price & Change Section */}
                <div className="mt-4 pt-3 border-t border-base-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-base-content/70">আজকের দাম</p>
                    <p className="text-2xl font-extrabold text-primary">
                      ৳ {item.today}
                    </p>
                  </div>

                  {/* Price Change Badge */}
                  {/* Price Change Badge */}
                  {item.change?.pct !== undefined && (
                    <div
                      className={`badge gap-1 font-semibold px-3 py-3 ${
                        item.change.pct > 0
                          ? "bg-red-100 text-red-600 border border-red-200"
                          : item.change.pct < 0
                            ? "bg-green-100 text-green-600 border border-green-200"
                            : "bg-gray-100 text-gray-500 border border-gray-200"
                      }`}
                    >
                      <span>
                        {item.change.pct > 0
                          ? "▲"
                          : item.change.pct < 0
                            ? "▼"
                            : "—"}
                      </span>

                      <span>{Math.abs(item.change.pct)}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
