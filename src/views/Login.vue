<template>
    <div class="container form">
        <div class="p-3">
            <h1 class="mb-3 display-6">{{ $t("Please sign in") }}</h1>
            <form @submit.stop.prevent="login">
                <input-custom
                    label="Email address"
                    type="email"
                    placeholder="name@example.com"
                    required="required"
                    v-model:value="user.email"
                />
                <input-custom
                    label="Password"
                    type="password"
                    placeholder="Password"
                    v-model:value="user.password"
                />

                <button type="submit" class="btn btn-primary w-100 p-3">
                    {{ $t("Sign in") }}
                </button>

                <div class="py-3">
                    <span>{{ $t("New here") }}?</span>
                    <router-link to="/user" class="px-2 mt-3">{{
                        $t("Create an account")
                    }}</router-link>
                </div>
            </form>
            <error-custom v-model:errors="errors" />
        </div>
    </div>
</template>
<script>
import InputCustom from "@/components/InputCustom.vue";
import ErrorCustom from "@/components/ErrorCustom.vue";
import Http from "@/services/http";
import { mapMutations } from "vuex";
import router from "@/router";

export default {
    name: "Login",
    data() {
        return {
            user: {
                email: "",
                password: "",
                grant_type: "password",
            },
            errors: [],
        };
    },
    methods: {
        ...mapMutations(["setInfoToken"]),
        login() {
            Http.post("auth", this.user)
                .then((response) => {
                    this.setInfoToken(response);
                    router.push("/");
                })
                .catch((error) => {
                    this.errors.push(error);
                });
        },
    },
    components: {
        InputCustom,
        ErrorCustom,
    },
};
</script>
