const { createApp } = Vue;

createApp({
  data() {
    return {
      // page title
      pageTitle: "To Do!",
      //   to-do list
      todoList: [
        {
          text: "Fare la spesa",
          done: false,
        },
        {
          text: "Prendere appuntamento dal dentista",
          done: true,
        },
        {
          text: "Chiamare agenzia immobiliare",
          done: false,
        },
      ],
      //   new task object
      newTask: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    addTask() {
      this.todoList.push(this.newTask);
      this.newTask = {};
      console.log(this.todoList);
    },
    dismissTask(index) {
      this.todoList.splice(index, 1);
    },
  },
}).mount("#app");
