export function addToCart(name, image, size, price, style, installments) {
  return {
    type: "@cart/ADD_TO_CART",
    payload: {
      product: {
        name,
        image,
        size,
        price,
        style,
        installments,
        quantity: 1,
      },
    },
  };
}

export function deleteFromCart(slug) {
  return {
    type: "@cart/REMOVE_FROM_CART",
    payload: { slug },
  };
}

export function addQuantity(slug, quantity = 1) {
  return {
    type: "@cart/ADD_QUANTITY",
    payload: { slug, quantity },
  };
}

export function removeQuantity(slug, quantity = 1) {
  return {
    type: "@cart/REMOVE_QUANTITY",
    payload: { slug, quantity },
  };
}
