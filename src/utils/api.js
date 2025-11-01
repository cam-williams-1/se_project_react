const baseURL = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

export const getItems = () => {
  return fetch(`${baseURL}/items`, { method: "GET", headers }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const addItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const removeItem = (itemID) => {
  return fetch(`${baseURL}/items/${itemID}`, {
    method: "DELETE",
    headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

// This is the command to run the json server locally...
// json-server --watch db.json --id _id --port 3001
