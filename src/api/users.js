export const editUser = async (
  username,
  password,
  firstname,
  lastname,
  email,
  billingInfo,
  shippingInfo
) => {
  const response = await fetch(`/api/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username,
      password,
      firstname,
      lastname,
      email,
      billingInfo,
      shippingInfo,
    }),
  });
  const result = await response.json();
  console.log("edited user", result);
  return result;
};
