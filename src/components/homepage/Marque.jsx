import React from "react";

const fetchproducts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  console.log(data);

  return data;
};

export default function Marque() {
  const resdata = fetchproducts();
  console.log(resdata);
  return <></>;
}
