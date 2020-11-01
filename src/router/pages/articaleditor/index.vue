<template>
    <div>
        <mavon-editor v-model="articalValue"/>
    </div>

</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                articalValue: ''
            }
        },
        props: {

        }
    }
</script>

<style scoped>

</style>