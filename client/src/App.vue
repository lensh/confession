<template>
  <div id="app">
    <confession />
  </div>
</template>

<script>
import confession from "./components/confession.vue";

export default {
  name: "App",
  components: {
    confession,
  },
};
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
