import { getUser, changeUser } from "./users.js";
import { getProduct } from "./products.js";

const addInCart = async (userId, productId) => {
  //   try {
  //     const user = await getUser(userId);
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  const user = await getUser(userId);
  if (!user) return;

  const product = await getProduct(productId);
  if (!product) return;

  user.cart.push(product);
  const changedUser = await changeUser(userId, user);
  console.log(changedUser);
};

// addInCart("1", "d147");

const removeFromCart = async (userId, productId) => {
  const user = await getUser(userId);
  if (!user) return;

  user.cart = user.cart.filter((product) => product.id !== productId);

  const changedUser = await changeUser(userId, user);
  console.log(changedUser);
};

removeFromCart("1", "d147");
