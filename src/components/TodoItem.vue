<template>
  <div class="todo-item">
    <div class="todo-item__content">
      <div class="todo-item__task">
        <input
          class="todo-item__checkbox"
          type="checkbox"
          :checked="todo.isCompleted"
          @change="updateStatus"
        />
        <div
          :class="[
            'todo-item__text',
            todo.isCompleted ? 'todo-item__text--completed' : '',
          ]"
        >
          {{ todo.text }}
        </div>
      </div>
      <div class="todo-item__btns">
        <el-button
          data-jest="todo-edit-button"
          type="primary"
          icon="el-icon-edit"
          @click="editTask"
        ></el-button>
        <el-button
          data-jest="todo-delete-button"
          type="danger"
          icon="el-icon-close"
          @click="deleteTask"
        ></el-button>
      </div>
    </div>

    <Form
      v-if="todo.isEdit"
      :todo="todo"
      :mode="'update'"
      @finish="updateTodoContent"
    ></Form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Form from '@/components/Form'

export default {
  props: ['todo'],
  name: 'TodoItem',
  components: { Form },
  methods: {
    ...mapActions(['updateTodo', 'setTodoList']),
    updateStatus() {
      this.updateTodo({ ...this.todo, isCompleted: !this.todo.isCompleted })
    },
    editTask() {
      this.updateTodo({ ...this.todo, isEdit: true })
    },
    deleteTask() {
      const todos = this.getTodos.filter(t => t.uuid !== this.todo.uuid)
      this.setTodoList(todos)
    },
    updateTodoContent({ status, payload }) {
      if (status === 'finish') {
        this.updateTodo({ ...payload, isEdit: false })
        return
      }
      this.updateTodo({ ...this.todo, isEdit: false })
    },
  },
  computed: {
    ...mapGetters(['getTodos']),
  },
}
</script>

<style lang="scss" scoped>
.todo-item {
  margin-top: 10px;
  width: 100%;
  background: #f2f2f2;
  box-shadow: 0 4px 4px 0 #c8c8c8;
  border-radius: 5px;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: #f2f2f2;
  }
  &__checkbox {
    margin-right: 0.5rem;
  }
  &__text {
    display: inline-block;
    font-size: 1.2rem;
    &--completed {
      text-decoration: line-through;
    }
  }
}
</style>
