<template>
  <!-- run method on click to commit the mutation -->
  <div>
    <h3>LOUDER!</h3>
    <div class="btnContainer">
      <button class="changeBtn" @click="addLoudClick">ADD MOAR LOUD</button>
      <!-- pass method as an argument to the getter -->
      <button class="changeBtn" @click="onlyLoudClick(setOnlyLoud)">
        ONLY LOUD
      </button>
    </div>
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
      // method to accept argument and run a conditional to make the fact only be capitalized, unlike above where it adds the effect to any other mutations done. bc state :)
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
