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
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cfcfcf;
  max-width: 100vw;
}

h3 {
  padding: 20px 0;
}

button {
  border: 1px solid rgb(51, 51, 51);
  border-radius: 4px;
  font-weight: bold;
  color: #cfcfcf;
  background: rgb(53, 88, 74);

  &:hover {
    filter: brightness(1.2);
  }
}

.changeBtn {
  padding: 5px 20px;
  &:hover {
    cursor: pointer;
  }
}

.bigBtn {
  height: 50px;
  width: 140px;

  &:hover {
    cursor: pointer;
  }
}

.btnContainer {
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
}
</style>
