import { defineStore } from 'pinia';

export const useProductStore = defineStore(
  'product',
  () => {
    const search = ref('');

    const cart = ref<IProduct[]>([]);

    const addToCart = (product: IProduct) => {
      const existingProduct = cart.value.find((item) => item.id === product.id);
      if (existingProduct?.qty) {
        existingProduct.qty += 1;
      } else {
        cart.value.push({ ...product, qty: 1 });
      }
    };

    const removeFromCart = (product: IProduct) => {
      const existingProduct = cart.value.find((item) => item.id === product.id);
      if (existingProduct?.qty) {
        if (existingProduct.qty > 1) {
          existingProduct.qty -= 1;
        } else {
          cart.value = cart.value.filter((item) => item.id !== product.id);
        }
      }
    };

    return {
      search,
      cart,
      addToCart,
      removeFromCart,
    };
  },
  { persist: true },
);
