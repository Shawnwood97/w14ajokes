<template>
  <button @click="makeLoudClick">GET LOUD</button>
</template>

<script>
export default {
  name: "loud-joke",

  methods: {
    makeLoudClick() {
      let joke = this.$store.state.joke;
      this.$store.commit("makeLoud", joke);
    },
  },
};
</script>

<style lang="scss" scoped></style>
