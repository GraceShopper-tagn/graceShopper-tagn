const addToCart = async (orderid, productid) => {
  const response = await fetch(`api/cartitems`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderid,
      productid,
    }),
  });
  const result = await response.json();
  return result;
};

// increaseQty
// PATCH ->

// decreaseQty
// PATCH ->

// removeFromCart
// DELETE ->
