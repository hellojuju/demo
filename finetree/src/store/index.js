import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex); // vuex는 플러그인형태로 제공되기 때문에 use로 선언해야함

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    // state 접근
    fetchedItem(state) {
      return state.item;
    },
    fetchedUser(state) {
      return state.user;
    },
  },
  mutations, // state 값 변경, $store.commit으로 동작
  actions, // 비동기 처리 로직 선언, $store.dispatch()로 동작,api 호출(비동기로직), context.commit()으로 mutations 호출
});
