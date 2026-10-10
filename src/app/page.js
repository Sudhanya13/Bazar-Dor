// "use client";

// import { useEffect } from "react";
// import toast from "react-hot-toast";
// import Allproducts from "@/components/homepage/Allproducts";
// import Banner from "@/components/homepage/Banner";

// import Marque from "@/components/homepage/Marque";

// import { Suspense } from "react";
// import ProductPriceSections from "@/components/homepage/ProductPriceSections";

// export default function Home() {
//   useEffect(() => {
//     // sessionStorage থেকে ফ্ল্যাগটি রিড করা হচ্ছে
//     const shouldShowToast = sessionStorage.getItem("show_login_toast");

//     if (shouldShowToast === "true") {
//       toast.success("সফলভাবে সাইন ইন হয়েছে!");
//       // একবার দেখানোর পর ফ্ল্যাগটি মুছে ফেলা হচ্ছে যাতে বারবার টোস্ট না দেখায়
//       sessionStorage.removeItem("show_login_toast");
//     }
//   }, []);

//   return (
//     <main className="p-8">
//       <h1 className="text-2xl font-bold">হোমপেজ</h1>
//     </main>
//   );

//   return (
//     <>
//       <Banner />
//       <Suspense
//         fallback={
//           <h2 className="text-xl font-bold text-[#000000]">
//             {" "}
//             Loading ProductPrice...
//           </h2>
//         }
//       >
//         <ProductPriceSections />
//       </Suspense>

//       <Suspense
//         fallback={
//           <h2 className="text-xl font-bold text-[#000000]">
//             Loading products...
//           </h2>
//         }
//       >
//         <Allproducts />
//       </Suspense>
//     </>
//   );
// }
// "use client";

// import { useEffect } from "react";
// import toast from "react-hot-toast";
import Allproducts from "@/components/homepage/Allproducts";
import Banner from "@/components/homepage/Banner";
import Marque from "@/components/homepage/Marque";
import { Suspense } from "react";
import ProductPriceSections from "@/components/homepage/ProductPriceSections";

export default function Home() {
  // useEffect(() => {
  //   // sessionStorage থেকে ফ্ল্যাগটি রিড করা হচ্ছে
  //   const shouldShowToast = sessionStorage.getItem("show_login_toast");

  //   if (shouldShowToast === "true") {
  //     toast.success("সফলভাবে সাইন ইন হয়েছে!");
  //     // একবার দেখানোর পর ফ্ল্যাগটি মুছে ফেলা হচ্ছে যাতে বারবার টোস্ট না দেখায়
  //     sessionStorage.removeItem("show_login_toast");
  //   }
  // }, []);

  return (
    <>
      <Banner />

      {/* চাইলে মারকিউ কম্পোনেন্ট রাখতে পারেন */}
      {/* <Marque /> */}

      <Suspense
        fallback={
          <h2 className="text-xl font-bold text-[#000000]">
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
