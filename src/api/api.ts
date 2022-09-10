import axios from "axios";

const api = axios.create();

export const chatApi = {
    Login(phoneNumber: string, password: string | number) {
        return api.get(`https://api.fxopen.b2et.com/api/AccountApi/Collection`);
    },
};