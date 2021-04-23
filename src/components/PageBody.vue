<template>
  <main>
    <div>
      <h1 id="jokePlace">{{ getJokeFromStore }}</h1>
      <joke-button />
      <loud-joke />
      <snake-joke />
      <!-- <button @click="getQuote">Get Quote</button> -->
      <!-- <p>{{ theQuote }}</p> -->
    </div>
  </main>
</template>

<script>
import JokeButton from "./JokeButton.vue";
import LoudJoke from "./LoudJoke.vue";
import SnakeJoke from "./SnakeJoke.vue";
export default {
  components: { JokeButton, LoudJoke, SnakeJoke },
  name: "page-body",

  computed: {
    getJokeFromStore() {
      return this.$store.state.joke;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background: rgb(113, 153, 136);
  min-height: 92vh;
  display: grid;
  grid-auto-flow: column;
}
</style>
