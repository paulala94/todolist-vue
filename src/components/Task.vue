<template>
  <ul class="todo-list">
    <li :key="index" class="todo-item">
      <div class="left">
        <input
          type="checkbox"
          v-model="todo.completed"
          class="custom-checkbox"
        />
        <span :class="{ 'completed-todo': todo.completed }">{{
          todo.text
        }}</span>
      </div>
      <div class="right">
        <i class="fas fa-trash-alt" @click="handleDelete(index)"></i>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Task",
  props: {
    todo: Object,
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapActions(["deleteTask"]),
    handleDelete(index) {
      this.deleteTask(index);
    },
  },
};
</script>

<style>
.todo-list {
  list-style-type: none;
  padding: 0;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.left {
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
}
.completed-todo {
  text-decoration: line-through;
}
.custom-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid #303054;
}
.custom-checkbox:checked {
  background-color: #303054;
}
.fa-trash-alt {
  color: rgb(165, 4, 4);
  cursor: pointer;
  margin-right: 15px;
}
</style>