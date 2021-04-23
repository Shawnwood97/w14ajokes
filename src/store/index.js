import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: 'Click the "Get Joke" button to get a Joke!',
    unmutated: "",
  },
  mutations: {
    getJoke(state, data) {
      state.joke = data;
      state.unmutated = data;
    },

    makeLoud(state, data) {
      state.joke = data.toUpperCase();
    },

    makeSnake(state, data) {
      state.joke = data.replaceAll(" ", "_");
    },
    makeNormie(state, data) {
      state.joke = data;
    },
  },
  actions: {},
  getters: {},
});
