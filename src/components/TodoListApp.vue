<template>
  <div class="todo-list">
    <Header></Header>
    <CreateForm></CreateForm>
    <TodoList></TodoList>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TodoList from '@/components/TodoList'
import CreateForm from '@/components/CreateForm'

export default {
  name: 'TodoListApp',
  components: {
    CreateForm,
    Header,
    TodoList,
  },
  props: {
    msg: String,
  },
}
</script>

<style scoped lang="scss"></style>
