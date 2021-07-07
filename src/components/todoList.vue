<template>
  <div>
    <h2>My todolist</h2>
    <ul>
      <li v-bind:key="todo.id" v-for="todo in todos">
        <p>{{ todo.title }}</p>
        <!-- <Todo v-bind:todo="todo" /> -->
      </li>
    </ul>
  </div>
</template>
<script>
// import Todo from './todo';
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false
        },
        {
          id: 4,
          title: 'Clean up room',
          completed: false
        },
        {
          i: 5,
          title: 'Finish work',
          completed: false
        }
      ],
    }
  },
  // components: {
  //   Todo
  // },
  // props: [
  //   "todos"
  // ]
}
</script>
<style scoped>
</style>