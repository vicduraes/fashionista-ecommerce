/* eslint-disable no-param-reassign */
import produce from "immer";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
} from "../actions/cart";

const INITIAL_STATE = {
  showCart: false,
  products: [],
  cartSize: 0,
  cartTotal: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_CART: {
        if (
          draft.products.find(
            (product) => product.size === action.payload.product.size
          )
        ) {
          draft.products = draft.products.map((product) => {
            if (product.size === action.payload.product.size) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
            return product;
          });

          break;
        }
        draft.products = [...draft.products, action.payload.product];
        break;
      }
      case REMOVE_FROM_CART: {
        draft.products = draft.products.filter(
          (product) => product.size !== action.payload.slug
        );
        break;
      }
      case ADD_QUANTITY: {
        draft.products = draft.products.map((product) => {
          if (product.size === action.payload.slug) {
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          }
          return product;
        });
        break;
      }
      case REMOVE_QUANTITY: {
        draft.products = draft.products.map((product) => {
          if (product.size === action.payload.slug && product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - action.payload.quantity,
            };
          }
          return product;
        });
        break;
      }
      default:
    }
  });
}
