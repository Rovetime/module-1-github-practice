import AsyncStorage from '@react-native-async-storage/async-storage';

export const CART_STORAGE_KEY = 'northstar-shopping-cart';

export async function saveCart(items) {
  await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export async function loadCart() {
  const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);

  if (!storedCart) {
    return [];
  }

  return JSON.parse(storedCart);
}

export async function clearSavedCart() {
  await AsyncStorage.removeItem(CART_STORAGE_KEY);
}