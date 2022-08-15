// register
export const registerUser = async (
  username,
  password,
  firstname,
  lastname,
  email
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
    }),
  });
  const result = await response.json();
  console.log("REGISTERED USER", result);
  return result;
};

// login
export const loginUser = async (username, password) => {
  const response = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const result = await response.json();
  return result;
};

// Alternative Login
export const altLoginUser = async (email, password) => {
  const response = await fetch(`/api/auth/login/alt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await response.json();
  console.log("this is the result", result);
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
