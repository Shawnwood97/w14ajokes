import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: 'Click the "Get Joke" button to get a Joke!',
  },
  mutations: {
    getJoke(state, data) {
      state.joke = data;
    },

    makeLoud(state, data) {
      state.joke = data.toUpperCase();
    },

    makeSnake(state, data) {
      state.joke = data.replaceAll(" ", "_");
    },
  },
  actions: {},
  getters: {},
});
