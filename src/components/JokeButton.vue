<template>
  <!-- make axios request on button click -->
  <button @click="getJoke">Get Joke</button>
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

          // trying another way, so committing to another state variable
          this.$store.commit("setSecondJoke", res.data.joke);
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

<style lang="scss" scoped></style>
