import axios from "axios";

const api = axios.create();

export const hustApi = {
    getFacts(number, type) {
        return api.get(`http://numbersapi.com/${number}/${type}`);
    },
};