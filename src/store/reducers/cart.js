import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "../actions/cart";

const initialState = {
  // items: [],
  // items: [],
  item: {},
  // cartProducts: getProductsFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        // items: [...state.items, ...action.payload],
        // cartProducts: [...state.cartProducts],
        // ...state,
        // error: null,
        item: { ...state.item, ...action.payload },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        // error: null,
        // product: { ...action.payload },
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        error: null,
        // product: { ...action.payload },
      };
    default:
      return state;
  }
};

export default cartReducer;
