<template>
  <section id="s-select-image" class="uk-section uk-padding-small">
    <h2 class="uk-h2">画像選択</h2>
    <div class="uk-form-custom">
      <input type="file" accept="image/png, image/jpeg" @change="fileSelected" />
      <button class="uk-button uk-button-default" type="button" tabindex="-1">
        <span uk-icon="icon: upload"></span>
        使用する画像を選択
      </button>
    </div>
    <p class="uk-text-small">選択中の画像: {{ file === null ? "選択されていません" : file }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainComponent",
  computed: {
    file() {
      return this.$store.state.file;
    },
  },
  methods: {
    fileSelected(e: Event) {
      e.preventDefault();
      console.log(e);
      this.$store.state.file
    },
  },
  components: {},
});
</script>

<style lang="stylus"></style>
