<template>
  <button @click="getJoke">Get Joke</button>
</template>

<script>
import axios from "axios";
export default {
  name: "joke-button",

  methods: {
    getJoke() {
      axios
        .request({
          method: "GET",
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
        })
        .then((res) => {
          this.$store.commit("getJoke", res.data.joke);
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
