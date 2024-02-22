import "./assets/main.css";

import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
    state: {
        count: 1,
        // todos: [
        //     {
        //         id: 1,
        //         text: "blablabla",
        //         done: true,
        //     },
        //     {
        //         id: 2,
        //         text: "bulubulu",
        //         done: false,
        //     },
        // ],
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.amount;
        },
    },
    actions: {
        increment({ commit }, payload) {
            commit("increment", payload);
        },
        incrementAsync({ commit }, payload) {
            setTimeout(() => {
                commit("increment", payload);
            }, 1000);
        },
    },
    // getters: {
    //     doneTodos(state) {
    //         console.log(state.todos.filter((todo) => todo.done));
    //         return state.todos.filter((todo) => todo.done);
    //     },
    //     doneTodosCount(state, getters) {
    //         return getters.doneTodos.length;
    //     },
    //     getTodoById: (state) => (id) => {
    //         return state.todos.find((todo) => todo.id === id);
    //     },
    // },
    // mutations: {
    //     // increment(state, payload) {
    //     //     state.count += payload.amount;
    //     // },
    //     incrementNew(state) {
    //         state.count++;
    //     },
    //     //     changeName(state, newName) {
    //     //         state.name = newName;
    //     //     },
    // },
    // actions: {
    //     increment({ context }) {
    //         context.commit("incrementNew");
    //     },
    // },
});

const app = createApp(App);

app.use(router).use(store).mount("#app");
