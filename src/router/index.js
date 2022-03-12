import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/ListPokemon/ListPokemon";
import Detail from "../views/DetailPokemon/DetailPokemon";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
