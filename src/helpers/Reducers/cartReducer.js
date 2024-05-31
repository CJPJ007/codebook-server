export const cartInitialState = {
  toggleSearch: false,
  toggleUserActions: false,
  cartProducts: []
};

export const cartReducer = (state, action) => {
  console.log("Inside reducer : ", state, action);
  switch (action.type) {
    case "SHOW_SEARCH_BAR":
      return {
        ...state,
        toggleSearch: !state.toggleSearch,
      };
    case "SHOW_USER_ACTIONS":
      return {
        ...state,
        toggleUserActions: !state.toggleUserActions,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);
    case "CLEAR_CART":
      return {
        ...state,
        cartProducts: [],
      };
    default:
      throw new Error("No such action");
  }
};

const removeFromCart = (state, action) => {
  const filteredProducts = state.cartProducts.filter(
    (cartProduct) => cartProduct.id !== action.payload
  );
  return {
    ...state,
    cartProducts: filteredProducts,
  };
};