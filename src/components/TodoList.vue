<template>
  <div class="container">
    <template v-for="todo in getTodos">
      <TodoItem :todo="todo" :key="todo.uuid"></TodoItem>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  methods: {},
  computed: {
    ...mapGetters(['getTodos']),
  },
}
</script>

<style scoped></style>
