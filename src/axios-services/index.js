import axios from "axios";

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

// export const fetchMe = async () => {
//   const response = await fetch(`api/users/me`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const result = await response.json();
//   return result;
// };

export async function fetchMe() {
  try {
    const { data } = await axios.get("/api/users/me");
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}
