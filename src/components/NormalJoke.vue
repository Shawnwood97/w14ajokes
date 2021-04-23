<template>
  <!-- run method on click to commit the mutation -->
  <div>
    <h3>Normie?</h3>
    <button class="bigBtn" @click="makeNormieClick">Back To Normie!</button>
  </div>
</template>

<script>
export default {
  name: "normal-joke",

  methods: {
    // function to setJoke to the unmutated state that I created for this specific reason, though it was useful other places as well.
    makeNormieClick() {
      let joke = this.$store.state.unmutated;
      this.$store.commit("setJoke", joke);
    },
  },
};
</script>

<style lang="scss" scoped></style>
