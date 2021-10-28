<template>
    <div class="form-floating">
        <select
            class="form-select"
            :id="id"
            :options="options"
            @change="$emit('update:value', $event.target.value)"
        >
            <option
                v-for="(text, value) in options"
                :key="value"
                :value="value"
            >
                {{ text }}
            </option>
        </select>
        <label :for="id">{{ label }}</label>
    </div>
    <hr class="mb-0" style="background-color: transparent;" />
</template>
<script>
export default {
    name: "SelectCustom",
    props: {
        label: String,
        options: {
            type: Array,
            required: true,
        },
        id: Number,
    },
};
</script>
