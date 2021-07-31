import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Settings from "@/views/Settings.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Main,
  }, {
    path: "/login",
    component: Login,
  }, {
    path: "/settings",
    component: Settings,
  },
];

export default new VueRouter({
  routes,
});
