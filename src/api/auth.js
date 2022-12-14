// register
export const registerUser = async (
  username,
  password,
  firstname,
  lastname,
  email,
  shippingaddress,
  billingaddress,
  paymentinfo
) => {
  const response = await fetch(`/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      firstname,
      lastname,
      email,
      shippingaddress,
      billingaddress,
      paymentinfo,
    }),
  });
  const result = await response.json();
  return result;
};

// login
export const loginUser = async (username, email, password) => {
  const response = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const result = await response.json();
  return result;
};

// logout
export const logoutUser = async () => {
  const response = await fetch(`/api/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const result = await response.json();
  return result;
};

export const deleteUser = async (email) => {
  const response = await fetch(`/api/auth/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });
  const result = await response.json();
  return result;
};
