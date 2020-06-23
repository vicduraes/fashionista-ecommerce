export const ADD_PRODUCT = "@actions/add_product";
export const REMOVE_PRODUCT = "@actions/remove_product";
export const UPDATE_PRODUCT = "@actions/update_product";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: { ...product },
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: { ...product },
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: { ...product },
});
