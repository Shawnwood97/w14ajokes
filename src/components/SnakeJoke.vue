<template>
  <div>
    <h3>S_n_a_k_e_y</h3>
    <div class="btnContainer">
      <button class="changeBtn" @click="makeSnakeClick">
        Add_Makey_Snakey
      </button>
      <!-- method with getter as an argument that runs on click -->
      <button class="changeBtn" @click="onlySnakeyClick(setOnlySnakey)">
        Only_Makey_Snakey
      </button>
    </div>
  </div>
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

    onlySnakeyClick(style) {
      // method to accept argument and run a conditional to make the fact only be underscores, checks for underscores, if there are none, adds them using the unmutatedJoke
      // from the store , unlike above where it adds the effect to any other mutations done. bc state :)
      // Hopefully no facts have underscroes, couldnt think of a solution for if there was 1. I guess I could loop the letters in the string maybe and check for sure, seems kinda good
      // but not at the same time.
      let unmutatedJoke = this.$store.state.unmutated;
      let joke = this.$store.state.joke;
      if (joke !== joke.indexOf("_")) {
        this.$store.commit("setJoke", unmutatedJoke.replaceAll(" ", "_"));
      } else {
        this.$store.commit("setJoke", style);
      }
    },
  },
  computed: {
    // getter for passing as an argument to the click funciton
    setOnlySnakey() {
      return this.$store.getters.onlySnakey;
    },
  },
};
</script>

<style lang="scss" scoped></style>
