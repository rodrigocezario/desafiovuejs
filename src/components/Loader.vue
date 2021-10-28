<template>
    <div v-if="isVisible" class="loader-overlay">
        <div class="loader"></div>
        <span class="text" v-html="text"></span>
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        isVisible: { type: Boolean, required: true },
        text: { type: String, required: false, default: "" },
    },
};
</script>

<style>
.loader-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    cursor: pointer;
}
.loader-overlay span.text {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}
.loader-overlay .loader {
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 40px);
}
.loader-overlay .loader:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    position: absolute;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
