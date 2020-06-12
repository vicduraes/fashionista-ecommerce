export const GET_PRODUCT_REQUEST = "@actions/get_product/request";
export const GET_PRODUCT_SUCCESS = "@actions/get_product/success";
export const GET_PRODUCT_FAILURE = "@actions/get_product/failure";

export const getProduct = () => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: { ...product },
});

export const getProductError = (error) => ({
  type: GET_PRODUCT_FAILURE,
  error,
});
