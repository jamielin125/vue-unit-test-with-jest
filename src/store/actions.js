export default {
  setTodoList({ commit }, list) {
    commit('SET_TODO_LIST', list)
  },
  addTodo({ commit }, newTodo) {
    commit('ADD_A_TODO', newTodo)
  },
  updateTodo({ commit }, payload) {
    commit('UPDATE_A_TODO', payload)
  },
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter)
  },
}
