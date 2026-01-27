const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.vanguardbit.jumpingcrab.com"
    : "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

// Protected API calls check for token in headers
const getHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return headers;
};

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(checkResponse);
};

export const addItem = ({ name, imageUrl, weather }) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: getHeaders(token),
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
};

export const removeItem = (itemID) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${itemID}`, {
    method: "DELETE",
    headers: getHeaders(token),
  }).then(checkResponse);
};

// Add a like to a clothing item
export const addCardLike = (itemId, token) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: getHeaders(token),
  }).then(checkResponse);
};

// Remove a like from a clothing item
export const removeCardLike = (itemId, token) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: getHeaders(token),
  }).then(checkResponse);
};

// Using mongoDB with back-end integration...
// This is the command to run the json server locally...
// json-server --watch db.json --id _id --port 3001
