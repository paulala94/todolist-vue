<template>
  <h1>{{ title }}</h1>
  <TodoList />
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: { TodoList },
  data() {
    return {
      title: "LISTA DE TAREAS",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400&display=swap");
* {
  font-family: "Barlow", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  margin-top: 50px;
  font-size: 60px;
  color: #303054;
}
</style>
