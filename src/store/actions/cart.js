export const ADD_TO_CART = "@actions/cart/add_to_cart";
export const REMOVE_FROM_CART = "@actions/cart/remove_from_cart";
export const ADD_QUANTITY = "@actions/cart/add_quantity";
export const REMOVE_QUANTITY = "@actions/cart/remove_quantity";

export function addToCart(name, image, size, price, codeColor, installments) {
  return {
    type: ADD_TO_CART,
    payload: {
      product: {
        name,
        image,
        size,
        price,
        code_color: codeColor,
        installments,
        quantity: 1,
      },
    },
  };
}

export function deleteFromCart(slug) {
  return {
    type: REMOVE_FROM_CART,
    payload: { slug },
  };
}

export function addQuantity(slug, quantity = 1) {
  return {
    type: ADD_QUANTITY,
    payload: { slug, quantity },
  };
}

export function removeQuantity(slug, quantity = 1) {
  return {
    type: REMOVE_QUANTITY,
    payload: { slug, quantity },
  };
}
