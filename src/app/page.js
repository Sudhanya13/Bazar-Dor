import Allproducts from "@/components/homepage/Allproducts";
import Banner from "@/components/homepage/Banner";

import Marque from "@/components/homepage/Marque";

import { Suspense } from "react";
import ProductPriceSections from "@/components/homepage/ProductPriceSections";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense
        fallback={
          <h2 className="text-xl font-bold text-[#000000]">
            {" "}
            Loading ProductPrice...
          </h2>
        }
      >
        <ProductPriceSections />
      </Suspense>

      <Suspense
        fallback={
          <h2 className="text-xl font-bold text-[#000000]">
            Loading products...
          </h2>
        }
      >
        <Allproducts />
      </Suspense>
    </>
  );
}
