<template>
    <b-container fluid class="p-0">
        <b-img :src="require('../../../../public/public.jpg')"
               fluid
               class="w-100 h-auto"
               alt="封面图片"></b-img>
    </b-container>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                pics: []
            }
        }
    }
</script>

<style scoped>

</style>