<template>
  <main>
    <h1 id="theJoke">{{ getJokeFromStore }}</h1>
    <div>
      <joke-button />
      <loud-joke />
      <snake-joke />
      <normal-joke />
      <!-- <button @click="getQuote">Get Quote</button> -->
      <!-- <p>{{ theQuote }}</p> -->
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
}

#theJoke {
  overflow-wrap: break-word;
  max-width: 95vw;
  place-self: center;
}
</style>
