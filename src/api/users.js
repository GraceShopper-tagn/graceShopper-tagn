export const editUser = async (
  firstname,
  lastname,
  username,
  email,
  shippingaddress,
  billingaddress,
  paymentinfo
) => {
  const response = await fetch(`/api/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      username,
      email,
      shippingaddress,
      billingaddress,
      paymentinfo,
    }),
  });
  const result = await response.json();
  return result;
};

export const fetchMe = async () => {
  const response = await fetch(`/api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
