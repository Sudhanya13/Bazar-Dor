import Allproducts from "@/components/homepage/Allproducts";
import Banner from "@/components/homepage/Banner";
import Marque from "@/components/homepage/Marque";

import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Marque></Marque>

      <Banner />

      <Suspense fallback={<div>Loading products...</div>}>
        <Allproducts />
      </Suspense>
    </>
  );
}
