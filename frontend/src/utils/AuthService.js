import API from "utils/API";

// Using in our API client to pass it as a header to every API call
// Check if a user is logged in by seeing if the JWT variable is set.
// Optionally, we can even decode the JWT on the client to access data in the payload. Let's say we need the user-id or the username on the client, which we can extract from the JWT.

export const authLogin = async (username, password) =>
  await API.post("/auth/login", {
    username,
    password
  });

export const isAuthenticated = jwt_token => {
  return Boolean(jwt_token); // && !this.isTokenExpired(token) check token expiry
};