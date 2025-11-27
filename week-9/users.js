const API_URL = "http://localhost:3000/users";

const createUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 201) {
      throw new Error("User was not added");
    }

    const addedUser = await response.json();
    return addedUser;
  } catch (error) {
    console.log(error.message);
  }
};

// createUser({
//   firstName: "Luka",
//   lastName: "Maisuradze",
//   email: "lukamaisuradze@gmail.com",
//   cart: [],
// });

const getUser = async (id = "") => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.status === 404) {
      throw new Error("User was not found");
    }
    if (response.status !== 200) {
      throw new Error("User was not fetched");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error.message);
    // throw new Error(error.message);
  }
};

// getUser("06c3");

const changeUser = async (id, changedProperties) => {
  try {
    if (changedProperties.email && !changedProperties.email.includes("@")) {
      throw new Error("email was not valid");
    }

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "appliction-json",
      },
      body: JSON.stringify(changedProperties),
    });

    if (response.status !== 200) {
      throw new Error("User was not changed");
    }

    const changedUser = await response.json();
    return changedUser;
  } catch (error) {
    console.log(error.message);
  }
};

// changeUser("1", {
//   email: "temo@gmail.com",
// });

const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("User was not deleted");
    }
    const deletedUser = await response.json();
    return deletedUser;
  } catch (error) {
    console.log(error.message);
  }
};

// deleteUser("1");

export { getUser, changeUser };
