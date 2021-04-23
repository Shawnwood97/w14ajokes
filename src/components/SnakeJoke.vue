<template>
  <button @click="makeSnakeClick">+ Makey_Snakey</button>
</template>

<script>
export default {
  name: "snake-joke",

  methods: {
    makeSnakeClick() {
      // don't love that I declared this variable in multiple functions, I do understand I could have added this inline, created variable for readability.
      let joke = this.$store.state.joke;
      // commit mutation using makeSnake function in Store.
      this.$store.commit("makeSnake", joke);
    },
  },
};
</script>

<style lang="scss" scoped></style>
