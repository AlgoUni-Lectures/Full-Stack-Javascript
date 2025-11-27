const API_URL = "http://localhost:3000/products";

const createProduct = async (product) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.status !== 201) {
      throw new Error("Product was not added");
    }
    const addedProduct = await response.json();
    return addedProduct;
  } catch (error) {
    console.log(error.message);
  }
};

// createProduct({
//   name: "PS5",
//   price: 2500,
// });

const getProduct = async (id = "") => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.status !== 200) {
      throw new Error("Product was not fethed");
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error.message);
  }
};

const getFilteredProducts = async (queryObj) => {
  const queryStr = new URLSearchParams(queryObj);
  console.log(queryStr);
  try {
    const response = await fetch(`${API_URL}?${queryStr}`);
    if (response.status !== 200) {
      throw new Error("Product was not fethed");
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error.message);
  }
};

// getProduct("1");
// getFilteredProducts({
//   category: "phone",
// });

const changeProduct = async (id, changedProperties) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changedProperties),
    });

    if (response.status !== 200) {
      throw new Error("Product was not changed");
    }
    const changedProduct = await response.json();
    return changedProduct;
  } catch (error) {
    console.log(error.message);
  }
};

// changeProduct("1", {
//   price: 4000,
// });

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Product was not deleted");
    }
    const deletedProduct = await response.json();
    console.log(deletedProduct);
  } catch (error) {
    console.log(error.message);
  }
};

// deleteProduct("1");

export { getProduct };
