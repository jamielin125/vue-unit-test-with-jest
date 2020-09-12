<template>
  <el-form
    class="todo-form"
    ref="form"
    :model="form"
    label-width="1rem"
    size="mini"
  >
    <h3 class="todo-form__title">
      <i class="el-icon-edit"></i>
      Task
    </h3>

    <el-form-item>
      <el-input v-model="form.text"></el-input>
    </el-form-item>

    <h3 class="todo-form__title">
      <i class="el-icon-date"></i>
      Deadline
    </h3>
    <el-form-item>
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date"
          style="width: 100%;"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="form.time"
          style="width: 100%;"
        ></el-time-picker>
      </el-col>
    </el-form-item>

    <h3 class="todo-form__title">
      <i class="el-icon-notebook-2"></i>
      Comment
    </h3>
    <el-form-item>
      <el-input type="textarea" v-model="form.comment"></el-input>
    </el-form-item>

    <div class="button_group">
      <el-button data-jest="form-cancel" type="danger" @click="cancel"
        >取消</el-button
      >
      <el-button data-jest="form-confirm" type="primary" @click="finish">{{
        mode === 'create' ? '新增' : '更新'
      }}</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    mode: {
      type: String,
    },
    todo: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.todo) {
      const { text, date, time, comment } = this.todo
      this.form = {
        text,
        date,
        time,
        comment,
      }
    }
  },
  data() {
    return {
      form: {
        text: '',
        date: '',
        time: '',
        comment: '',
      },
    }
  },
  methods: {
    finish() {
      this.$emit('finish', {
        status: 'finish',
        payload: { ...this.todo, ...this.form },
      })
    },
    cancel() {
      this.$emit('finish', { status: 'cancel' })
    },
  },
  watch: {
    todo(payload) {
      const { text, date, time, comment } = payload
      this.form = {
        text,
        date,
        time,
        comment,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-form {
  width: 100%;
  background: #f2f2f2;
  position: relative;
  padding: 1rem 4rem 2rem 4rem;
  &__title {
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
  }
}
</style>
