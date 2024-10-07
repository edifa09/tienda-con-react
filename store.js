import { create } from 'zustand';
import axios from 'axios';


const useCartStore = create((set) => ({
  cart: [],
  products: [],
  newProducts: [], 


  fetchedProducts:  async ()=> {
    try {
    const response = await axios.get("http://localhost:5000/api/products")
    set({ products: response.data });
    } catch (error) {
      console.error("Error al obtener los productos", error);}
  },
    

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
    
    addProduct: async (product) =>{
      try {
        const response = await axios.post("http://localhost:5000/api/products", product);
    set((state) => ({
      newProducts: [...state.newProducts, response.data],
    }));
    } catch (error) {
      console.error("Error al agregar el producto", error);
    }
  },

  removeProduct: async (productId, isNewProduct = false) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      set((state) => {
        if (isNewProduct) {
          return {
            newProducts: state.newProducts.filter((product) => product.id !== productId),
          };
        } else {
          return {
            products: state.products.filter((product) => product.id !== productId),
          };
        }
      });
      console.log("Producto eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  },

}));

export default useCartStore;
