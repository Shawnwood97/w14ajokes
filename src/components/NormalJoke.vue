<template>
  <button @click="makeNormieClick">Back To Normie!</button>
</template>

<script>
export default {
  name: "normal-joke",

  methods: {
    makeNormieClick() {
      let joke = this.$store.state.unmutated;
      this.$store.commit("getJoke", joke);
    },
  },
};
</script>

<style lang="scss" scoped></style>
