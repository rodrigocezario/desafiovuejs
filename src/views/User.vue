<template>
    <div class="container form">
        <div class="p-3">
            <h1 class="mb-3 display-6">{{ $t("Create your User") }}</h1>
            <form @submit.stop.prevent="createUser">
                <input-custom
                    label="User Name"
                    type="text"
                    placeholder="User Name"
                    v-model:value="user.user"
                />
                <input-custom
                    label="Email address"
                    type="email"
                    placeholder="name@example.com"
                    v-model:value="user.email"
                />
                <input-custom
                    label="Password"
                    type="password"
                    placeholder="Password"
                    v-model:value="user.password"
                />

                <input-custom
                    label="Confirmation Password"
                    type="password"
                    placeholder="Confirmation Password"
                    v-model:value="user.password_confirmation"
                />

                <button type="submit" class="btn btn-primary w-100 p-3">
                    {{ $t("Create a User") }}
                </button>
            </form>
            <error-custom v-model:errors="errors" />
        </div>
    </div>
</template>

<script>
import InputCustom from "@/components/InputCustom.vue";
import ErrorCustom from "@/components/ErrorCustom.vue";

import Http from "@/services/http";
import router from "@/router";
import { mapMutations } from "vuex";

export default {
    name: "User",
    data() {
        return {
            user: {
                user: "",
                email: "",
                password: "",
                password_confirmation: "",
                country_code: "BR",
                reffer: "demouser",
            },
            errors: [],
        };
    },
    methods: {
        ...mapMutations(["setInfoToken"]),
        createUser() {
            Http.post("users", this.user)
                .then((response) => {
                    this.setInfoToken(response);
                    router.push("/profile");
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
