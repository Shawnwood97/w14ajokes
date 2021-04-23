<template>
  <!-- run method on click to commit the mutation -->
  <div>
    <button @click="addLoudClick">+ GET LOUD</button>
    <button @click="onlyLoudClick(setOnlyLoud)">ONLY LOUD</button>
  </div>
</template>

<script>
export default {
  name: "loud-joke",

  methods: {
    addLoudClick() {
      // don't love that I declared this variable in multiple functions, I do understand I could have added this inline, created variable for readability.
      let joke = this.$store.state.joke;
      // commit mutation using makeLoud function in Store.
      this.$store.commit("addLoud", joke);
    },

    // set the change being made

    onlyLoudClick(style) {
      // commit mutation using updateStyle function in Store and passing arg in @click.
      let unmutatedJoke = this.$store.state.unmutated;
      let joke = this.$store.state.joke;
      if (joke !== unmutatedJoke.toUpperCase()) {
        this.$store.commit("setJoke", unmutatedJoke.toUpperCase());
      } else {
        this.$store.commit("setJoke", style);
      }
    },
  },

  computed: {
    setOnlyLoud() {
      return this.$store.getters.onlyLoud;
    },
  },
};
</script>

<style lang="scss" scoped></style>
