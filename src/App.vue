<template>
  <div id="app">
    <TodoListApp />
  </div>
</template>

<script>
import TodoListApp from './components/TodoListApp.vue'

export default {
  name: 'App',
  components: {
    TodoListApp,
  },
}
</script>

<style lang="scss">
@import './style/main.scss';
</style>
