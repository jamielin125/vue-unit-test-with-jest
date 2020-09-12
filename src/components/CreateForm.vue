<template>
  <div class="container" style="padding-top: 2rem;">
    <el-button
      data-jest="create-btn"
      v-if="!isShowForm"
      type="primary"
      @click="showForm"
      >新增工作</el-button
    >

    <Form
      data-jest="create-form"
      v-if="isShowForm"
      :mode="'create'"
      @finish="finish"
    ></Form>
  </div>
</template>

<script>
import Form from '@/components/Form'
import { mapActions } from 'vuex'

export default {
  name: 'CreateForm',
  components: {
    Form,
  },
  data() {
    return {
      isShowForm: false,
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    showForm() {
      this.isShowForm = true
    },
    finish({ status, payload }) {
      // finish() {
      if (status === 'finish') {
        this.addTodo(payload)
      }
      this.isShowForm = false
    },
  },
}
</script>

<style scoped></style>
