import Allproducts from "@/components/homepage/Allproducts";
import Banner from "@/components/homepage/Banner";

import Marque from "@/components/homepage/Marque";

import { Suspense } from "react";
import ProductPriceSections from "@/components/homepage/ProductPriceSections";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading Marque...</div>}>
        <Marque></Marque>
      </Suspense>

      <Banner />
      <Suspense fallback={<div>Loading ProductPrice...</div>}>
        <ProductPriceSections />
      </Suspense>

      <Suspense fallback={<div>Loading products...</div>}>
        <Allproducts />
      </Suspense>
    </>
  );
}
