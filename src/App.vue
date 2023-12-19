
<template>
  <div id="app">
    <HeaderView />
    <router-view></router-view>

    <FooterView />
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";
export default {
  name: "App",
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
