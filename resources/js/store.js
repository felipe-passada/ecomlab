import { getLocalUser } from "./helpers/auth";

const user = getLocalUser();

export default {
    state:{
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: []
    },
    getters:{
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        auth_error(state) {
            return state.auth_error;
        },
        customers(state) {
            return state.customers;
        }
    },
    mutations:{
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.loading = false;
            state.auth_error = null;
            state.isLoggedIn = true;
            state.currentUser = Object.assign({}, payload.user, { toke: payload.access_token });

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginError(state, payload) {
            state.loading = false;
            state.auth_error = null;
            state.isLoggedIn = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoading = false;
            state.currentUser = null;
        }
    },
    actions:{
        login(context) {
            context.commit("login");
        }
    }
}