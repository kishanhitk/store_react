const { API } = require("../../backend");
//Category calls
export const createCategory = async (userId, token, category) => {
  try {
    const response = await fetch(`${API}/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
//Get all categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${API}/categories`, {
      method: "GET",
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
//Create A Product
export const createProduct = async (userId, token, product) => {
  try {
    const response = await fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

//Get all products
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API}/product`, {
      method: "GET",
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

//Delete a product

export const deleteProduct = async (productId, userId, token) => {
  try {
    const response = await fetch(`${API}/product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

//Get a product
export const getProduct = async (productId) => {
  try {
    const response = await fetch(`${API}/product/${productId}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
//Update a product

export const updateProduct = async (productId, userId, token, product) => {
  try {
    const response = await fetch(`${API}/product/${productId}/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
