import Vue from "vue";
import Vuex from "vuex";

//import stores function
import { localFunc } from "./local.store.js";
import { FireBaseStore } from "./firebase.store.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    localFunc: localFunc,
    FireBaseStore: FireBaseStore
  }
});
