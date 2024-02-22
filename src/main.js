import "./assets/main.css";

import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const moduleA = {
    state: () => ({
        name: "lumi",
        surname: "jashari",
        age: 23,
        height: 182,
    }),
    mutations: {
        changeName(state, payload) {
            state.name = payload.name;
        },
    },
};
const moduleB = {
    state: () => ({
        name: "lira",
        surname: "jashari",
        age: 17,
        height: 169,
    }),
    mutations: {
        changeName(state, payload) {
            state.name = payload.name;
        },
    },
    actions: {
        changeName({ state, commit, rootState }) {
            commit("changeName");
        },
    },
};

const store = createStore({
    modules: {
        lumi: moduleA,
        lira: moduleB,
    },
});

const app = createApp(App);

app.use(router).use(store).mount("#app");
