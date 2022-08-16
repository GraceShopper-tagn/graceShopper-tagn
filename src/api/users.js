export const editUser = async (
  firstname,
  lastname,
  password,
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
      password,
      username,
      email,
      shippingaddress,
      billingaddress,
      paymentinfo,
    }),
  });
  const result = await response.json();
  console.log("edited user", result);
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
  console.log("me user", result);
  return result;
};
