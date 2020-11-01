<template>
    <div id="app">
        <lay-main></lay-main>
    </div>
</template>

<script>
    import layMain from './layout/laymain'

    export default {
        name: 'App',
        components: {
            layMain
        }
    }
</script>

<style>
    /** @import "assets/css/index.css"; */
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /** text-align: center; */
    }
</style>
