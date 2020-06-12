import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "../actions/product";

const initialState = {
  loading: false,
  error: null,
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: { ...state.product, ...action.payload },
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productReducer;
