export const getAllProducts = async () => {
  const response = await fetch(`/api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log("result", result);
  return result;
};
