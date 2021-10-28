<template>
    <loader :is-visible="isLoading"></loader>
    <div id="nav">
        <div class="d-flex justify-content-end">
            <div v-if="isAuthenticated">
                <router-link to="/">Home</router-link> |
                <router-link to="/profile">{{ $t("Profile") }}</router-link> |
                <a href="javascript:void(0);" @click.stop.prevent="logoutUser()">{{ $t("Exit") }}</a>
            </div>
            <div v-else>
                <router-link to="/login">{{ $t("Login") }}</router-link> |
                <router-link to="/user">{{ $t("User") }}</router-link>
            </div>
            <div class="d-flex">
                <div class="mx-2">
                    |
                    <a
                        href="javascript:void(0);"
                        @click.stop.prevent="changelocale('br')"
                        ><img
                            src="https://wedev.software/wp-content/plugins/gtranslate/flags/24/pt-br.png"
                            alt=""
                    /></a>
                </div>
                <div>
                    <a
                        href="javascript:void(0);"
                        @click.stop.prevent="changelocale('en')"
                        ><img
                            src="https://wedev.software/wp-content/plugins/gtranslate/flags/24/en-us.png"
                            alt=""
                    /></a>
                </div>
            </div>
        </div>
    </div>
    <router-view />
</template>
<script>
import Http from "@/services/http";
import Loader from "./components/Loader.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
    data() {
        return {
            isLoading: false,
            isAuthenticated: false,
        };
    },
    created() {
        Http.interceptors.request.use(
            (config) => {
                this.isLoading = true;
                return config;
            },
            (error) => {
                this.isLoading = false;
                return Promise.reject(error);
            }
        );

        Http.interceptors.response.use(
            (response) => {
                this.isLoading = false;
                return response;
            },
            (error) => {
                this.isLoading = false;
                return Promise.reject(error);
            }
        );
    },
    methods: {
        ...mapGetters(["isLoggedIn"]),
        ...mapMutations(["logout"]),
        authenticated() {
            let authenticated = this.isLoggedIn();
            this.isAuthenticated = authenticated !== null ? true : false;
        },
        changelocale(locale) {
            this.$i18n.locale = locale;
        },
        logoutUser() {
            if(confirm(`${ this.$t("confirm") }`)) {
                this.logout();
                this.$router.push({path: '/login'});
            }
            return;
        },
    },
    watch: {
        $route: function() {
            this.authenticated();
        },
    },
    components: {
        Loader,
    },
};
</script>

<style>
:root {
    --photo-size: 90px;
}

body {
    background-color: #f1eeed;
}

.form {
    background-color: #ffffff;
    border-radius: 10px;
    border: thin solid #ebebeb;
    padding-bottom: 20px;
}

.form h1 {
    padding-bottom: 12px;
    border-bottom: 1px solid #ebebeb;
}

#app {
    min-height: 88vh;
    width: 85%;
    margin: 0 auto;
    padding: 15px;
    border-radius: 10px;
    border: 8px solid #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
}
#nav {
    padding: 20px 10px;
    text-align: end;
}

#nav a {
    color: #999;
}

#nav a.router-link-exact-active {
    color: #000000;
}
</style>