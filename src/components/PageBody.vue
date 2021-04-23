<template>
  <main>
    <!-- joke is displayed here using MOOOstache syntax and the computed data from below -->
    <h1 id="theJoke">{{ getJokeFromStore }}</h1>
    <joke-button id="jokeBtn" @click.native="animateUp" />
    <div id="hiddenBtnContainer">
      <loud-joke />
      <snake-joke />
      <normal-joke id="normieContainer" />
    </div>
  </main>
</template>

<script>
import JokeButton from "./JokeButton.vue";
import LoudJoke from "./LoudJoke.vue";
import NormalJoke from "./NormalJoke.vue";
import SnakeJoke from "./SnakeJoke.vue";
export default {
  components: { JokeButton, LoudJoke, SnakeJoke, NormalJoke },
  name: "page-body",

  methods: {
    animateUp() {
      document.getElementById("hiddenBtnContainer").style.bottom = "75px";
    },
  },

  computed: {
    // function to return the state from the joke KVP in store.
    getJokeFromStore() {
      return this.$store.state.joke;
    },
    getJokeFromStoreTwo() {
      return this.$store.state.jokeTwo;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background: rgb(113, 153, 136);
  min-height: 92vh;
  display: grid;
  grid-template-rows: 3fr 4fr;
  gap: 50px;
  place-items: center;
  position: relative;
  overflow-y: hidden;
}

#jokeBtn {
  place-self: start center;
}

#theJoke {
  overflow-wrap: break-word;
  max-width: 95vw;
  height: 200px;
  align-self: end;
}

#hiddenBtnContainer {
  position: absolute;
  bottom: -290px;
  left: 50%;
  margin-left: -400px;
  width: 800px;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background: rgb(86, 112, 102);
  padding-bottom: 30px;
  border-radius: 4px;
  transition: all 1s ease-in-out;
  #normieContainer {
    width: 100%;
    grid-column: 1 / -1;
  }
}
</style>
