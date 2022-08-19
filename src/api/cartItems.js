export const addToCart = async (orderid, productsizeid) => {
  const response = await fetch(`api/cartitems`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderid,
      productsizeid,
    }),
  });
  const result = await response.json();
  return result;
};

// increaseQty
// PATCH ->
export const increaseQty = async (id) => {
  const response = await fetch(`api/cartitems/increment`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
    }),
  });
  const result = await response.json();
  return result;
};
// decreaseQty
// PATCH ->
export const decreaseQty = async (id) => {
  const response = await fetch(`api/cartitems/decrement`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
    }),
  });
  const result = await response.json();
  return result;
};

// removeFromCart
// DELETE ->
export const removeFromCart = async (id) => {
  const response = await fetch(`api/cartitems/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
    }),
  });
  const result = await response.json();
  return result;
};
