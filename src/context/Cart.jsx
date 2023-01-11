import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? 
      { ...cartItem, quantity: cartItem.quantity + 1 } 
      : cartItem);
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

  if (!existingCartItem) {
    return [...cartItems];
  }

  if (productToRemove.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  }
  else {
    return cartItems.map(cartItem => cartItem.id === productToRemove.id ? 
      { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem);
  }
}

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN" 
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0); 
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

    dispatch({ 
      type: CART_ACTION_TYPES.SET_CART_ITEMS, 
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount
      }
    });
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartReducer(newCartItems);
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartReducer(newCartItems);
  }

  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    updateCartReducer(newCartItems);
  }

  const setIsCartOpen = (newIsCartOpen) => {
    dispatch({ 
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN, 
      payload: newIsCartOpen
    });
  }

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart, 
    cartItems, 
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}