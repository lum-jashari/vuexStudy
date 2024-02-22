import "./assets/main.css";

import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
    state: {
        count: 1,
        todos: [
            {
                id: 1,
                text: "blablabla",
                done: true,
            },
            {
                id: 2,
                text: "bulubulu",
                done: false,
            },
        ],
    },
    getters: {
        doneTodos(state) {
            console.log(state.todos.filter((todo) => todo.done));
            return state.todos.filter((todo) => todo.done);
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length;
        },
        getTodoById: (state) => (id) => {
            return state.todos.find((todo) => todo.id === id);
        },
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.amount;
        },
        changeName(state, newName) {
            state.name = newName;
        },
    },
});

const app = createApp(App);

app.use(router).use(store).mount("#app");
