<template>
    <div id="avatar" :style="cssStyle"></div>
</template>

<script>
const default_photo = require("@/assets/avatar.png");
export default {
    name: "Avatar",
    props: {
        photo: {
            type: String,
            default: default_photo,
        },
    },
    computed: {
        cssStyle() {
            return {
                "background-image": `url('${
                    this.photo === null || this.photo === ""
                        ? default_photo
                        : this.photo
                }')`,
            };
        },
    },
};
</script>

<style scoped>
#avatar {
    width: var(--photo-size);
    height: var(--photo-size);
    -webkit-border-radius: var(--photo-size);
    -webkit-background-clip: padding-box;
    -moz-border-radius: var(--photo-size);
    -moz-background-clip: padding;
    border-radius: var(--photo-size);
    background-clip: padding-box;
    margin: 7px 0 0 5px;
    background-size: cover;
    background-position: center center;
    box-shadow: 0 0 0 2px #ebebeb;
    border: thick solid #fff;
}
</style>
