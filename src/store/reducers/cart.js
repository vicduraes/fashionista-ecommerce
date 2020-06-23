import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "../actions/cart";

const getProductsFromLocalStorage = () => {
  const amoraCart = localStorage.getItem("amoraCart");

  if (amoraCart) {
    const objAmoraCart = JSON.parse(amoraCart);
    const objProducts = objAmoraCart.products;
    return objProducts;
  }

  return [];
};

const initialState = {
  product: {},
  cartProducts: getProductsFromLocalStorage(),
};

const cartProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        error: null,
        product: { ...action.payload },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        error: null,
        product: { ...action.payload },
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        error: null,
        product: { ...action.payload },
      };
    default:
      return state;
  }
};

export default cartProductReducer;
