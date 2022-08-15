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
