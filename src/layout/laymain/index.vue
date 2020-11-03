<template>
    <b-container fluid class="p-0">
        <lay-header
            class="fixed-top"
            v-show="headerShow"></lay-header>
        <div style="padding-top: 56px; height: 100vh;">
            <router-view></router-view>
        </div>

    </b-container>
</template>

<script>
    import layHeader from '../layheader'

    export default {
        name: "index",
        data() {
            return {
                headerShow: true
            }
        },
        components: {
            layHeader
        },
        mounted() {
            window.onscroll = (ev) => {
                const scrollTop = ev.target.scrollingElement.scrollTop
                if(scrollTop >= 50) {
                    this.headerShow = false;
                } else {
                    this.headerShow = true
                }
            }
        }
    }
</script>

<style scoped>

</style>