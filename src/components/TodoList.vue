<template>
  <div class="container">
    <div class="todo-creator">
      <input type="text" v-model="newTodo" placeholder="Añade tu tarea" />
      <a @click="handleClick" :disabled="newTodo === ''">Añadir</a>
    </div>
    <div class="btns">
      <div @click="setFilter(null)" class="state-btn">Todas</div>
      <div @click="setFilter(true)" class="state-btn">Completadas</div>
      <div @click="setFilter(false)" class="state-btn">Pendientes</div>
    </div>

    <div class="task-list" v-for="todo in filteredTodos" :key="todo.id">
      <Task :todo="todo" />
      <hr />
    </div>
    <p class="completed-info">Tareas completadas: {{ completedTasks }}</p>
    <p class="completed-info">Tareas pendientes: {{ pendingTasks }}</p>
  </div>
</template>

<script>
import Task from "./Task.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoList",
  components: {
    Task,
  },
  computed: {
    ...mapState(["todos"]),
    completedTasks() {
      return this.todos.filter((todo) => todo.completed).length;
    },
    pendingTasks() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    filteredTodos() {
      if (this.showCompletedTasks === null) {
        return this.todos;
      } else {
        return this.todos.filter(
          (todo) => todo.completed === this.showCompletedTasks
        );
      }
    },
  },
  methods: {
    ...mapActions(["addTodo"]),
    handleClick() {
      this.addTodo({ text: this.newTodo, completed: false });
      this.newTodo = "";
    },
    setFilter(completed) {
      this.showCompletedTasks = completed;
    },
  },
  data() {
    return {
      newTodo: "",
      showCompletedTasks: null,
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-bottom: 30px;
}
hr {
  background-color: #7b7b7b;
}
.container {
  width: 50%;
  margin: auto;
}
.todo-creator {
  display: flex;
  transition: 250ms ease;
  margin-bottom: 20px;
}
.todo-creator input {
  width: 100%;
  padding: 8px 6px;
  border: 1px solid #303054;
  border-radius: 5px;
}
.todo-creator a {
  color: white;
  background-color: #303054;
  text-decoration: none;
  padding: 10px 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.task-list {
  display: flex;
  flex-direction: column;
}
.btns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.state-btn {
  border: 1px solid #303054;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
}
.state-btn:hover {
  background-color: #303054;
  color: white;
  cursor: pointer;
}
.completed-info {
  margin-top: 20px;
}
</style>