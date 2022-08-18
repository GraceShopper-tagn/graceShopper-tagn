export const fetchAllOrders = async () => {
  const response = await fetch(`/api/orders/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchFulfilledOrders = async () => {
  const response = await fetch(`/api/orders/fulfilled`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchCart = async () => {
  const response = await fetch(`/api/orders/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
