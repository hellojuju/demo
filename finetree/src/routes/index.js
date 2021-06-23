import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";
import createListView from "../views/CreateListView.js";
import EventBus from "../utils/bus";
import { store } from "../store";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"), // news
      beforeEnter: (to, from, next) => {
        EventBus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            // EventBus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      beforeEnter: (to, from, next) => {
        EventBus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            // EventBus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      beforeEnter: (to, from, next) => {
        EventBus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            // EventBus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserView,
    },
    {
      path: "/item/:id",
      name: "item",
      component: ItemView,
    },
  ],
});
