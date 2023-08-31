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
      alert: {
        text: "",
        type: "",
        display: false,
      },
    };
  },

  methods: {
    addTask() {
      // empty input control
      if (!this.newTask.text) {
        this.alert.text = "Inserisci qualcosa!";
        this.alert.type = "danger";
        this.alert.display = true;

        return;
      }

      this.todoList.push(this.newTask);
      this.newTask = {};
      this.alert.display = false;
    },
    dismissTask(index) {
      this.todoList.splice(index, 1);
    },
    isTaskDone(index) {
      if (this.todoList[index].done == false) {
        this.todoList[index].done = true;
      } else {
        this.todoList[index].done = false;
      }
    },
  },
}).mount("#app");
