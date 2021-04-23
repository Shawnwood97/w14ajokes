import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: 'Click the "Get Joke" button to get a Joke!',
    unmutated: "",
    jokeTwo: 'Click the "Get Joke" button to get a Joke!',
  },
  mutations: {
    setJoke(state, data) {
      state.joke = data;
    },
    // This will be the same joke as the first
    setSecondJoke(state, data) {
      state.jokeTwo = data;
    },

    setUnmutated(state, data) {
      state.unmutated = data;
    },

    // Set the style KVP
    updateStyle(state, data) {
      state.style = data;
    },

    addLoud(state, data) {
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
  getters: {
    onlyLoud(state) {
      return state.joke.toUpperCase();
    },
  },
});
