import AsyncStorage from '@react-native-async-storage/async-storage';

/** Armazenamento local do aparelho (os recordes ficam aqui). Nunca lança erro. */
export const storage = {
  async get(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    AsyncStorage.setItem(key, value).catch(() => {});
  },
};
