<template>
    <div class="container form">
        <div class="p-3">
            <h1 class="mb-3 display-6">{{ $t("Welcome") }}</h1>

            <div class="d-flex">
                <div class="mx-2">
                    <avatar v-model:photo="user.avatar" />
                </div>
                <div class="align-self-center px-2" v-if="isProfile">
                    <span class="fs-5 d-block lh-1">{{
                        user.profile.fullname
                    }}</span>
                    <span>{{ user.profile.job }}</span>
                    <div class="d-flex mt-2">
                        <div>
                            <i class="far fa-envelope"></i
                            ><span class="px-2">{{ user.email }}</span>
                        </div>
                        <div class="px-2">
                            <i class="fas fa-phone-alt"></i
                            ><span class="px-2">{{
                                user.profile.phone_number
                            }}</span>
                        </div>
                    </div>
                </div>
                <div class="align-self-center px-2" v-else>
                    <div>
                        <i class="far fa-envelope"></i
                        ><span class="px-2">{{ user.email }}</span>
                    </div>
                    <router-link
                        to="/profile"
                        class="btn btn-primary p-3 my-3"
                        >{{ $t("Create a Profile") }}</router-link
                    >
                </div>
            </div>

            <div class="mt-3" v-if="isProfile">
                <div class="d-flex mb-3">
                    <div class="flex-fill">
                        <span class="text-muted d-block">{{ $t("Name") }}</span>
                        <span>{{ user.profile.fullname }}</span>
                    </div>
                    <div>
                        <span class="text-muted d-block">{{
                            $t("Birth Date")
                        }}</span>
                        <span>{{ user.profile.date_of_birth }}</span>
                    </div>
                </div>

                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <span class="text-muted d-block">{{
                            $t("Fiscal number")
                        }}</span>
                        <span>{{ user.profile.fiscal_number }}</span>
                    </div>
                    <div class="px-2">
                        <span class="text-muted d-block">{{
                            $t("Document number")
                        }}</span>
                        <span>{{ user.profile.document_number }}</span>
                    </div>
                    <div class="px-2">
                        <span class="text-muted d-block">{{
                            $t("Document type")
                        }}</span>
                        <span>{{ user.profile.document_type }}</span>
                    </div>
                    <div>
                        <span class="text-muted d-block">{{
                            $t("Document issuer")
                        }}</span>
                        <span>{{ user.profile.document_issuer }}</span>
                    </div>
                </div>

                <div class="d-flex justify-content-between mb-3">
                    <div class="flex-fill">
                        <span class="text-muted d-block">{{
                            $t("Street")
                        }}</span>
                        <span>{{ user.profile.street }}</span>
                    </div>
                    <div class="px-2">
                        <span class="text-muted d-block">{{
                            $t("Neighborhood")
                        }}</span>
                        <span>{{ user.profile.neighborhood }}</span>
                    </div>
                    <div>
                        <span class="text-muted d-block">{{
                            $t("Street number")
                        }}</span>
                        <span>{{ user.profile.street_number }}</span>
                    </div>
                </div>

                <div class="d-flex justify-content-between mb-3">
                    <div class="flex-fill">
                        <span class="text-muted d-block">{{ $t("City") }}</span>
                        <span>{{ user.profile.city }}</span>
                    </div>
                    <div class="px-2">
                        <span class="text-muted d-block">{{
                            $t("Postal code")
                        }}</span>
                        <span>{{ user.profile.postal_code }}</span>
                    </div>
                    <div>
                        <span class="text-muted d-block">{{
                            $t("Region")
                        }}</span>
                        <span>{{ user.profile.region }}</span>
                    </div>
                </div>

                <div>
                    <span class="text-muted d-block">{{
                        $t("Additional information")
                    }}</span>
                    <span>{{ user.profile.additional_information }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Http from "@/services/http";
import Avatar from "@/components/Avatar.vue";

export default {
    name: "Home",
    data() {
        return {
            user: {
                id: "",
                username: "",
                email: "",
                user_type_id: "",
                percent: "",
                reffer: null,
                moving_limit: "",
                country_code: "",
                avatar: "",
                profile: {
                    id: 77,
                    profile_type_id: "",
                    fullname: "",
                    fiscal_number: "",
                    date_of_birth: "",
                    document_type: "",
                    document_number: "",
                    document_issuer: "",
                    job: "",
                    phone_number: "",
                    city: "",
                    street: "",
                    neighborhood: "",
                    postal_code: "",
                    street_number: "",
                    region: "",
                    additional_information: "",
                    public_person: false,
                    month_estimate: 0,
                    business_vat: null,
                    business_state_number: null,
                    business_commercial_name: null,
                    business_city_number: null,
                    admin: null,
                    business_name: null,
                },
            },
            errors: [],
            isProfile: true,
        };
    },
    methods: {
        getUserData() {
            this.id = this.$store.getters.getUserId;
            Http.get(`users/${this.id}`, {
                headers: {
                    Authorization: `Bearer ${this.$store.getters.getAccessToken}`,
                },
            })
            .then((response) => {
                this.user = response.data;
                if (response.data.profile === null) {
                    this.isProfile = false;
                }
            })
            .catch((error) => {
                this.errors.push(error);
            });
        },
    },
    components: {
        Avatar,
    },
    mounted() {
        this.getUserData();
    },
};
</script>
