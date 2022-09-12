import axios from "axios";

const api = axios.create({
    baseURL: "http://178.124.147.66",
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

export const chatApi = {
    Login(data) {
        return api.post(`/UserAPi/Login`, data);
    },
    Users(data) {
        return api.get(`/UserAPi/Users`, data);
    },
    Roles(data) {
        return api.post(`/RoleAPi/Roles`, data);
    },
    Events(data) {
        return api.get (`/EventAPi/Events`, data);
    }
};