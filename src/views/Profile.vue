<template>
    <div class="container form">
        <div class="p-3">
            <h1 class="mb-3">{{ $t("Create your Profile") }}</h1>
            <form @submit.stop.prevent="createProfile">
                <input-custom
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    v-model:value="profile.fullname"
                />

                <input-custom
                    label="Fiscal number"
                    type="text"
                    placeholder="Fiscal number"
                    v-model:value="profile.fiscal_number"
                />

                <input-custom
                    label="Birth Date"
                    type="text"
                    placeholder="Birth Date"
                    v-model:value="profile.date_of_birth"
                />

                <select-custom
                    label="Select an ID Type"
                    :options="document_type_options"
                    v-model:value="profile.document_type"
                />

                <input-custom
                    label="Document number"
                    type="text"
                    placeholder="Document number"
                    v-model:value="profile.document_number"
                />

                <input-custom
                    label="Document issuer"
                    type="text"
                    placeholder="Document issuer"
                    v-model:value="profile.document_issuer"
                />

                <input-custom
                    label="Phone number"
                    type="text"
                    placeholder="Phone number"
                    v-model:value="profile.phone_number"
                />

                <select-custom
                    label="Choose your career"
                    :options="job_options"
                    v-model:value="profile.job"
                />

                <input-custom
                    label="City"
                    type="text"
                    placeholder="City"
                    v-model:value="profile.city"
                />

                <input-custom
                    label="Street"
                    type="text"
                    placeholder="Street"
                    v-model:value="profile.street"
                />

                <input-custom
                    label="Neighborhood"
                    type="text"
                    placeholder="neighborhood"
                    v-model:value="profile.neighborhood"
                />

                <input-custom
                    label="Postal code"
                    type="text"
                    placeholder="Postal code"
                    v-model:value="profile.postal_code"
                />

                <input-custom
                    label="Street number"
                    type="text"
                    placeholder="Street number"
                    v-model:value="profile.street_number"
                />

                <input-custom
                    label="Region"
                    type="text"
                    placeholder="Region"
                    v-model:value="profile.region"
                />

                <input-custom
                    label="Additional information"
                    type="text"
                    placeholder="Additional information"
                    v-model:value="profile.additional_information"
                />

                <button type="submit" class="btn btn-primary w-100 p-3">
                    {{ $t("Create a Profile") }}
                </button>
            </form>
            <error-custom v-model:errors="errors" />
        </div>
    </div>
</template>
<script>
import InputCustom from "@/components/InputCustom.vue";
import ErrorCustom from "@/components/ErrorCustom.vue";
import SelectCustom from "../components/SelectCustom.vue";
import Http from "@/services/http";

export default {
    name: "Profile",
    data() {
        return {
            profile: {
                profile_type_id: "1",
                fullname: "",
                fiscal_number: "",
                date_of_birth: "",
                document_type: "",
                document_number: "",
                document_issuer: "",
                phone_number: "",
                job: "",
                city: "",
                street: "",
                neighborhood: "",
                postal_code: "",
                street_number: "",
                region: "",
                additional_information: null,
                business_vat: null,
                business_state_number: null,
                business_commercial_name: null,
                business_city_number: null,
                admin: null,
                business_name: null,
                public_person: false,
                month_estimate: 0,
            },
            errors: [],
            document_type_options: {
                "": "Select an option",
                PASSPORT: "Passport",
                NATIONAL_ID: "National Id",
                NATIONAL_DRIVE_LICENSE: "National Drive License",
            },
            job_options: {
                "": "Select an option",
                DEV: "Software Developer",
                ARC: "Civil Engineers",
                SAL: "Sales Representatives",
            },
        };
    },
    methods: {
        createProfile() {
             Http.post("profiles/national", this.profile, {
                headers: {
                    Authorization: `Bearer ${this.$store.getters.getAccessToken}`,
                },
            })
            .then((response) => {
                console.log("Profile ", response);
                this.$router.push({ path: "/home" });
            })
            .catch((error) => {
                this.errors.push(error);
            });
        },
    },
    components: {
        InputCustom,
        SelectCustom,
        ErrorCustom,
    },
};
</script>
