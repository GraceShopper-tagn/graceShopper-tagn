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

export const editOrder = async (
  orderid,
  shippingaddress,
  billingaddress,
  paymentinfo,
  fulfilled,
  userid,
  orderdate
) => {
  const response = await fetch(`/api/orders/${orderid}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      shippingaddress,
      billingaddress,
      paymentinfo,
      fulfilled,
      userid,
      orderdate,
    }),
  });
  const result = await response.json();
  return result;
};

export const newOrder = async (user, discountid) => {
  const response = await fetch(`/api/orders/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingaddress: user ? user.billingaddress : undefined,
      shippingaddress: user ? user.shippingaddress : undefined,
      paymentinfo: user ? user.paymentinfo : undefined,
      discountid: discountid ? discountid : undefined,
      userid: user ? user.id : undefined,
    }),
  });
  const result = await response.json();
  return result;
};
