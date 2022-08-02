<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
});
</script>

<style lang="stylus"></style>
