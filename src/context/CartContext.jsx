import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity = 1 } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingItemIndex >= 0) {
        // Sản phẩm đã tồn tại, cập nhật số lượng
        updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
      } else {
        // Thêm sản phẩm mới
        updatedCart = [...state.cartItems, { ...product, quantity }];
      }

      const totalItems = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalAmount = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Lưu vào localStorage
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: updatedCart,
          totalItems,
          totalAmount,
        })
      );

      return {
        cartItems: updatedCart,
        totalItems,
        totalAmount,
      };
    }

    case "REMOVE_FROM_CART": {
      const { productId } = action.payload;
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== productId
      );

      const totalItems = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalAmount = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: updatedCart,
          totalItems,
          totalAmount,
        })
      );

      return {
        cartItems: updatedCart,
        totalItems,
        totalAmount,
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === productId
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: quantity,
        };

        const totalItems = updatedCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalAmount = updatedCart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        localStorage.setItem(
          "cart",
          JSON.stringify({
            cartItems: updatedCart,
            totalItems,
            totalAmount,
          })
        );

        return {
          cartItems: updatedCart,
          totalItems,
          totalAmount,
        };
      }
      return state;
    }

    case "CLEAR_CART": {
      localStorage.removeItem("cart");
      return initialState;
    }

    case "LOAD_CART_FROM_STORAGE": {
      return action.payload;
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const loadCartFromStorage = () => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        dispatch({
          type: "LOAD_CART_FROM_STORAGE",
          payload: JSON.parse(savedCart),
        });
      }
    };

    loadCartFromStorage();
  }, []);

  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { productId },
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart phải được sử dụng trong CartProvider");
  }
  return context;
};

export default CartContext;
