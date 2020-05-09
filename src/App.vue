<template>
  <div id="app">
    <h1 class="text-center">Bookmark by vue</h1>
    <todo />
  </div>
</template>
<script>
import todo from "./components/todo.vue";
export default {
  name: "app",
  components: {
    todo
  }
};
</script>

<style scoped>
h1.text-center {
  display: flex;
  justify-content: center;
}
</style>