<script setup>
import { RouterView } from "vue-router";
import { mapState } from "vuex";
</script>

<template>
    <h1>test</h1>
    <br />
    <button @click="increment">increment</button>
    <button @click="getTodo">getter</button>
    <h1>{{ count }}</h1>
    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>

<script>
export default {
    data() {
        return {
            localCount: 0,
        };
    },
    methods: {
        increment() {
            this.$store.commit("increment", {
                amount: 10,
            });
            console.log(this.$store.state.count);
        },
        getTodo() {
            console.log(this.$store.getters.getTodoById(2));
        },
    },
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
};
</script>
