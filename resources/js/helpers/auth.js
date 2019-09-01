import axios from "axios";

export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("email or password incorrect");
            })
    })
}

export function getLocalUser() {
    const userString = localStorage.getItem("user");

    if(!userString) {
        return null;
    }

    return JSON.parse(userString);
}