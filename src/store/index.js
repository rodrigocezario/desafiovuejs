import { createStore } from "vuex";

export default createStore({
    state: {
        user_id: null,
        is_admin: false,
        access_token: null,
        refresh_token: null,
        country_code: null,
        expires_in: null,
    },
    mutations: {
        setInfoToken(state, res) {
            state.user_id = res.data.user_id;
            state.is_admin = res.data.is_admin;
            state.access_token = res.data.access_token;
            state.country_code = res.data.country_code;
            state.refresh_token = res.data.refresh_token;
            state.expires_in = res.data.expires_in;
        },
        logout: (state) => {
            state.user_id = null;
            state.is_admin = false;
            state.token = null;
        },
        updateAccessToken: (state, accessToken) => {
            state.access_token = accessToken;
        },
    },
    actions: {},
    getters: {
        getRefreshToken: (state) => state.refresh_token,
        getAccessToken: (state) => state.access_token,
        getUserId: (state) => state.user_id,
        isLoggedIn: (state) => state.user_id,
    },
    modules: {},
});
