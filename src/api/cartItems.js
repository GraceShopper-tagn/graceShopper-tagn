export const addToCart = async (orderid, productsizeid, productprice) => {
  const response = await fetch(`api/cartitems`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderid,
      productsizeid,
      productprice,
    }),
  });
  const result = await response.json();
  return result;
};

// increaseQty
// PATCH ->
export const increaseQty = async (id, productprice) => {
  const response = await fetch(`api/cartitems/increment`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      productprice,
    }),
  });
  const result = await response.json();
  return result;
};
// decreaseQty
// PATCH ->
export const decreaseQty = async (id, productprice) => {
  const response = await fetch(`api/cartitems/decrement`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      productprice,
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

export const getCartitemById = async (id) => {
  const response = await fetch(`api/cartitems/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  return result;
};
