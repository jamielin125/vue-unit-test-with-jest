// mutations

function _uuid() {
  var d = Date.now()
  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    d += performance.now() //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export default {
  SET_TODO_LIST(state, todoList) {
    state.todos = todoList
  },
  ADD_A_TODO(state, todo) {
    state.todos = [
      ...state.todos,
      { ...todo, uuid: _uuid(), isCompleted: false, isEdit: false },
    ]
  },
  UPDATE_A_TODO(state, payload) {
    const index = state.todos.findIndex(todo => todo.uuid === payload.uuid)
    if (index > -1) {
      state.todos[index] = payload
      state.todos = [...state.todos]
      return
    }
    state.todos = [...state.todos, { ...payload, uuid: _uuid() }]
  },
  SET_FILTER(state, filter) {
    state.filter = filter
  },
}
