const categories = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data = await response.json();
  console.log(data);
};

categories();
