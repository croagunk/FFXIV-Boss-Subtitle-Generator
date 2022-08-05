<template>
  <main>
    <SelectImage />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SelectImage from "./MainComponent/SelectImage.vue";

export default defineComponent({
  name: "MainComponent",
  components: {
    SelectImage,
  },
});
</script>

<style lang="stylus"></style>
