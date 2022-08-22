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
  const response = await fetch(`/api/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const getProductSize = async (id, sizeId) => {
  const response = await fetch(`/api/products/${id}/${sizeId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  return result;
};
