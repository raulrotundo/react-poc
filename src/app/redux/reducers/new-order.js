import * as types from 'constants/actionTypes';

const initialState = {
  form: {
    orderStep: 1,
    step1: {
      inputTypeahead: {
        allowNew: false,
        multiple: false,
        autoFocus: true,
        options: [],
        selected: []
      },
      isBillingAddressInputsVisible: false
    },
    step2: {
      products: [],
      isProductListLoading: false,
      cart: {
        items: {},
        total: 0
      }
    }
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_NEW_ORDER_STEP:
      return {
        ...state,
        form: {
          ...state.form,
          orderStep: action.orderStep
        }
      };
    case types.SET_TYPEAHEAD_CUSTOMERS:
      return {
        ...state,
        form: {
          ...state.form,
          step1: {
            ...state.form.step1,
            inputTypeahead: {
              ...state.form.step1.inputTypeahead,
              options: action.customers
            }
          }
        }
      }
    case types.SET_TYPEAHEAD_CUSTOMERS_INPUT_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          step1: {
            ...state.form.step1,
            inputTypeahead: {
              ...state.form.step1.inputTypeahead,
              selected: [action.value]
            }
          }
        }
      }
    case types.SET_BILLING_ADDRESS_INPUTS_VISIBILITY:
      return {
        ...state,
        form: {
          ...state.form,
          step1: {
            ...state.form.step1,
            isBillingAddressInputsVisible: action.isVisible
          }
        }
      }
    case types.SET_PRODUCTS_LIST:
      return {
        ...state,
        form: {
          ...state.form,
          step2: {
            ...state.form.step2,
            products: action.products
          }
        }
      }
    case types.IS_PRODUCT_LIST_LOADING:
      return {
        ...state,
        form: {
          ...state.form,
          step2: {
            ...state.form.step2,
            isProductListLoading: action.isProductListLoading
          }
        }
      }
    case types.ADD_TO_CART:
      const productDetail = state.form.step2.products.find(product => { return product._id === action.productId; });
      const qty = (typeof (state.form.step2.cart.items[action.productId]) !== 'undefined' ? state.form.step2.cart.items[action.productId]['qty'] + 1 : 1);
      const subTotal = qty * Number(productDetail.price);
      const total = state.form.step2.cart.total + Number(productDetail.price);

      return {
        ...state,
        form: {
          ...state.form,
          step2: {
            ...state.form.step2,
            cart: {
              ...state.form.step2.cart,
              items: {
                ...state.form.step2.cart.items,
                [action.productId]: {
                  ...state.form.step2.cart[action.productId],
                  qty: qty,
                  subTotal: subTotal,
                  productDetail: productDetail
                }
              },
              total: total
            }
          }
        }
      }
    case types.REMOVE_TO_CART:
      const item = state.form.step2.cart.items[action.productId];
      return {
        ...state,
        form: {
          ...state.form,
          step2: {
            ...state.form.step2,
            cart: {
              ...state.form.step2.cart,
              items: Object.keys(state.form.step2.cart.items).reduce((result, key) => {
                if (key !== action.productId) {
                  result[key] = state.form.step2.cart.items[key];
                }
                return result;
              }, {}),
              total: state.form.step2.cart.total - item.subTotal
            }
          }
        }
      }
    default: return state;
  }
}
