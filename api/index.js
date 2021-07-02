import axios from "axios";

const url = "http://192.168.43.9:5000/seedphrase/";
export const generateMnemonic = () => axios.get(`${url}/generate`);
export const createWallet = (phrase) => axios.post(`${url}/create`, phrase);
