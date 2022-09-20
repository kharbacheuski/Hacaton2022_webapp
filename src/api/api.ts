import axios from "axios";

const api = axios.create({
    baseURL: "http://178.124.147.66"
});

export const chatApi = {
    Login(data) {
        return api.post(`/UserApi/LoginByPhone`, data);
    },
    Users(data) {
        return api.get(`/UserApi/Users`, data);
    },
    Roles(data) {
        return api.post(`/RoleApi/Roles`, data);
    },
    Events(data) {
        return api.get(`/EventApi/Events`, data);
    },
    ConfirmEvent(data) {
        return api.post(`/EventApi/Confirm`, data);
    },
    Report(formData, params) {
        return api.post(
            `/ReportApi/Create?telegramId=${params.telegramId}&text=${params.text}&longitude=${params.longitude}&latitude=${params.latitude}`, 
            formData,
            {headers: {
                "content-type": "multipart/form-data"
            }}
        );
    }
};
