import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: 'Click the "Get Joke" button to get a Joke!',
    unmutated: "",
  },
  mutations: {
    setJoke(state, data) {
      state.joke = data;
    },
    // unmutated state that is set each time the axios call is made
    setUnmutated(state, data) {
      state.unmutated = data;
    },
    // updates joke state to also be uppercase
    addLoud(state, data) {
      state.joke = data.toUpperCase();
    },
    // updates joke state to have all spaces replaced with undersores
    makeSnake(state, data) {
      state.joke = data.replaceAll(" ", "_");
    },
  },
  actions: {},
  getters: {
    // getter for passing as an argument in LoudJoke
    onlyLoud(state) {
      return state.joke.toUpperCase();
    },
    // getter for passing as an argument in SnakeJoke
    onlySnakey(state) {
      return state.joke.replaceAll(" ", "_");
    },
  },
});
