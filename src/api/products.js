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

export const getProduct = async (id) => {
  console.log("product id: ", id);
  const response = await fetch(`/api/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log("get product result", result);
  return result;
};

export const getInventoryBySize = async (id, size) => {
  // console.log("product id: ", id);
  const response = await fetch(`/api/products/${id}/${size}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log("GET INVENTORY BY SIZE RESULT: ", result);
  return result;
};
