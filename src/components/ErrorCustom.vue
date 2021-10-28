<template>
    <div
        class="alert alert-danger my-2"
        role="alert"
        v-show="errors && errors.length"
    >
        <div v-for="error of errors" v-bind:key="error">
            <h4 class="alert-heading">
                {{ $t(`${error.response.statusText}`) }}
            </h4>
            <ul v-if="error.response.data">
                <li v-for="field of error.response.data" v-bind:key="field">
                    {{ $t(`${field}`) }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "ErrorCustom",
    props: {
        errors: Array,
    },
};
</script>
