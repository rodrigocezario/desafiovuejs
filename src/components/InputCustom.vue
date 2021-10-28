<template>
    <div class="form-floating mb-3">
        <input
            :type="type"
            class="form-control"
            :id="id"
            :placeholder="placeholder"
            :value="value"
            :required="required"
            @input="$emit('update:value', $event.target.value)"
        />
        <label :for="id"> {{ $t(`${label}`) }} </label>
    </div>
</template>
<script>
export default {
    name: "InputCustom",
    props: {
        label: String,
        value: String,
        id: Number,
        placeholder: String,
        type: String,
        required: String,
    },
};
</script>
