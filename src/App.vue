<template>
  <div id="app">
    <page-header />
    <page-body />
    <page-footer />
  </div>
</template>

<script>
import PageBody from "./components/PageBody.vue";
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";
export default {
  components: { PageFooter, PageHeader, PageBody },
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cfcfcf;
  max-width: 100vw;
}
</style>
