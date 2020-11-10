<template>



    <b-modal id="my-modal">
        <form>
            用户名<input type="text" v-model="username"/>
            密码<input type="text" v-model="password"/>
            <button @click="submit()">登录</button>
        </form>
    </b-modal>

</template>

<script>
    import * as apis from '../../../apis'
    export default {
        name: "index",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            async submit() {
                const user = {
                    username: this.username,
                    password: this.password
                }
                const resdata = await apis.login(user)
                console.log(resdata)
                alert(resdata)
            }
        }
    }
</script>

<style scoped>

</style>