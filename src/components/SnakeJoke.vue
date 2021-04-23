<template>
  <button @click="makeSnakeClick">Makey_Snakey</button>
</template>

<script>
export default {
  name: "snake-joke",

  methods: {
    makeSnakeClick() {
      let joke = this.$store.state.joke;
      this.$store.commit("makeSnake", joke);
    },
  },
};
</script>

<style lang="scss" scoped></style>
