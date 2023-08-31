const { createApp } = Vue;

createApp({
  data() {
    return {
      pageTitle: "To Do!",
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
    };
  },
}).mount("#app");
