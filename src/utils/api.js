const baseUrl = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export const getItems = () => {
  return fetch(`${baseUrl}/items`, { method: "GET", headers }).then(
    checkResponse
  );
};

export const addItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
};

export const removeItem = (itemID) => {
  return fetch(`${baseUrl}/items/${itemID}`, {
    method: "DELETE",
    headers,
  }).then(checkResponse);
};

// This is the command to run the json server locally...
// json-server --watch db.json --id _id --port 3001
