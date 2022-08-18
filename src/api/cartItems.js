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

// still need to work on patch requests

// increaseQty
// PATCH ->
// const increaseQty = async (orderid, productid) => {
//   const response = await fetch(`api/cartitems/increment`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       orderid,
//       productid,
//     }),
//   });
//   const result = await response.json();
//   return result;
// };
// decreaseQty
// PATCH ->

// removeFromCart
// DELETE ->
