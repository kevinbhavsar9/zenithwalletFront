import { NativeModules, Platform } from "react-native";

export var Aes = NativeModules.Aes;

export const generateKey = (password, salt, cost, length) =>
  Aes.pbkdf2(password, salt, cost, length);

export const encryptData = (text, key) => {
  return Aes.randomKey(16).then((iv) => {
    return Aes.encrypt(text, key, iv).then((cipher) => ({
      cipher,
      iv,
    }));
  });
};

export const decryptData = (encryptedData, key) =>
  Aes.decrypt(encryptedData.cipher, key, encryptedData.iv);
