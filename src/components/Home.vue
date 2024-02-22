<template>
    <h1>app.vue</h1>
    <br />
    <input type="text" v-model="name" />
    <br />
    <h1>{{ name }}</h1>
    <br />
    <button @click="testing">click me</button>
    <br />
    <button @click="showData">show data</button>
</template>
<script>
export default {
    data() {
        return {
            name: "",
        };
    },
    methods: {
        testing() {
            this.$store.dispatch("changeName", this.name);
            console.log(this.$store.state);
        },
    },
};
</script>
