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

export const editInventory = async (productsizeId, numPurchased) => {
  const response = await fetch(`/api/products/sizes/${productsizeId}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      numPurchased,
    }),
  });
};

export const getProductsByTags = async (brand, color, activity, gender) => {
  const response = await fetch(
    `/api/products/${brand}/${color}/${activity}/${gender}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();

  return result;
};
