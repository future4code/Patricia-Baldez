import axios from "axios";

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  "api-token": "77374f2ed9dc434389f9dc8d60b0ad89"
};

export const getAllUsers = () => {
  return axios(`${baseURL}/users/getAllUsers`, { headers });
};

export const createUserRequest = (name, email) => {
  const body = { name, email };
  return axios.post(`${baseURL}/users/createUser`, body, {
    headers,
    method: "POST"
  });
};

export const deleteUser = userId => {
  return axios.delete(`${baseURL}/users/deleteUser?id=${userId}`, {
    headers
  });
};

