import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { text: 'Beber agua', completed: true },
      { text: 'Contratar a Paula', completed: false },
      { text: 'Comprar el pan', completed: false },
      { text: 'Bajar al perro', completed: false },
    ],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    deleteTask(state, index) {
      state.todos.splice(index, 1)
    },
    setFilter(state, filter) {
      state.filter = filter
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      console.log('???')
      commit('addTodo', todo)
    },
    deleteTask({ commit }, index) {
      commit('deleteTask', index)
    }
  },

})