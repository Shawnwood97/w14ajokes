<template>
  <!-- run method on click to commit the mutation -->
  <button @click="makeNormieClick">Back To Normie!</button>
</template>

<script>
export default {
  name: "normal-joke",

  methods: {
    makeNormieClick() {
      let joke = this.$store.state.unmutated;
      this.$store.commit("setJoke", joke);
    },
  },
};
</script>

<style lang="scss" scoped></style>
