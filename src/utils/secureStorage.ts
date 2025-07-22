import * as SecureStore from 'expo-secure-store';

type StorageKeys = 'AUTH';
export const setStorageItem = async (key: StorageKeys, value: string) =>
	SecureStore.setItemAsync(key, value);

export const getStorageItem = async (key: StorageKeys) => SecureStore.getItemAsync(key);
