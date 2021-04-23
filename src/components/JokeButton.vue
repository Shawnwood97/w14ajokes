<template>
  <!-- make axios request on button click -->
  <div>
    <button class="bigBtn" @click="getJoke">Get Joke</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "joke-button",

  methods: {
    // axios request
    getJoke() {
      axios
        .request({
          method: "GET",
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
        })
        .then((res) => {
          // mutate the joke KVP in the store to the response given by the API.
          this.$store.commit("setJoke", res.data.joke);

          // Set a variable to the default styling each time the axios call is made for easy revert to "normal", dunno if good or bad, but I thought clever.
          this.$store.commit("setUnmutated", res.data.joke);
        })
        // error catch
        .catch((err) => {
          console.log(`${err}`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: grid;
  place-items: center;
}
</style>
