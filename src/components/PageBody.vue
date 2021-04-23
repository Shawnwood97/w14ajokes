<template>
  <main>
    <!-- joke is displayed here using MOOOstache syntax and the computed data from below -->
    <h1 id="theJoke">{{ getJokeFromStore }}</h1>
    <h1 id="theJoke">{{ getJokeFromStoreTwo }}</h1>
    <joke-button @click.native="isHidden = false" />
    <div v-if="!isHidden">
      <loud-joke />
      <snake-joke />
      <normal-joke />
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
  data() {
    return {
      isHidden: true,
    };
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
}

#theJoke {
  overflow-wrap: break-word;
  max-width: 95vw;
  place-self: center;
}
</style>
