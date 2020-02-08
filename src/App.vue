<template>
  <div id="app">
    <h1>Vuex Counter</h1>
    <Counter/>
    <!-- <todo/> -->
     <!-- <router-view/> -->
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

// import todo from './components/todo.vue'

export default {
  name: 'app',
  components: {
    Counter,
    // todo,
  }
}
</script>