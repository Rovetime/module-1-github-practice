import AsyncStorage from '@react-native-async-storage/async-storage';

export const SAVED_HOTELS_KEY = 'stayfinder-saved-hotels';
export const SELECTED_CITY_KEY = 'stayfinder-selected-city';

export async function saveHotels(hotels) {
  await AsyncStorage.setItem(
    SAVED_HOTELS_KEY,
    JSON.stringify(hotels)
  );
}

export async function loadHotels() {
  const storedValue = await AsyncStorage.getItem(SAVED_HOTELS_KEY);

  if (storedValue === null) {
    return [];
  }

  return JSON.parse(storedValue);
}

export async function clearSavedHotels() {
  await AsyncStorage.removeItem(SAVED_HOTELS_KEY);
}

export async function saveSelectedCity(cityId) {
  await AsyncStorage.setItem(SELECTED_CITY_KEY, cityId);
}

export async function loadSelectedCity() {
  const storedCity = await AsyncStorage.getItem(SELECTED_CITY_KEY);

  if (storedCity === null) {
    return 'houston';
  }

  return storedCity;
}
