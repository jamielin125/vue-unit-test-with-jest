function _getTodos(todos, isCompleted) {
  return todos.filter(todo => todo.isCompleted === isCompleted)
}

export default {
  getTodos(state) {
    if (state.filter === 'ALL') {
      return state.todos
    } else if (state.filter === 'COMPLETED') {
      return _getTodos(state.todos, true)
    }
    return _getTodos(state.todos, false)
  },
  getAllCount(state) {
    return state.todos.length
  },
  getCompletedCount(state) {
    return _getTodos(state.todos, true).length
  },
  getIncompleteCount(state) {
    return _getTodos(state.todos, false).length
  },
  getFilter(state) {
    return state.filter
  },
}
