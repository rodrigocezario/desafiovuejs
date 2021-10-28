import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store/index";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // redireciona para página de login em acessos restritos
    const publicPages = ["/login", "/user"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.getters.isLoggedIn;
    if (authRequired && !loggedIn) {
        return next("/login");
    }
    next();
});

export default router;
