<template>
    <b-container fluid>
        <b-form @submit="onLoginSubmit" @reset="onLoginReset" v-if="mode === 'login'">
            <b-form-group
                    id="input-group-1"
                    label="用户名"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="login.username"
                        required
                        placeholder="请输入用户名"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="密码" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="login.password"
                        type="password"
                        required
                        placeholder="请输入密码"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" :block="true">登录</b-button>
        </b-form>

        <b-form @submit="onRegSubmit" @reset="onRegReset" v-if="mode === 'reg'">
            <b-form-group
                    id="input-group-3"
                    label="用户名"
                    label-for="input-3"
            >
                <b-form-input
                        id="input-3"
                        v-model="reg.username"
                        required
                        placeholder="请输入用户名"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="密码" label-for="input-4">
                <b-form-input
                        id="input-4"
                        v-model="reg.password"
                        type="password"
                        required
                        placeholder="请输入密码"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="确认密码" label-for="input-5">
                <b-form-input
                        id="input-5"
                        v-model="reg.repeatPassword"
                        type="password"
                        required
                        placeholder="请再次输入密码"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="邮箱" label-for="input-6">
                <b-form-input
                        id="input-6"
                        v-model="reg.email"
                        type="email"
                        placeholder="请输入邮箱"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" :block="true">注册</b-button>
        </b-form>


        <div class="mt-3 clearfix">
            <a class="float-left" v-if="mode === 'login'" @click="mode = 'reg'"><small class="text-muted">注册</small></a>
            <a class="float-left" v-if="mode === 'reg'" @click="mode = 'login'"><small class="text-muted">登录</small></a>
            <a class="float-right"><small class="text-muted">忘记密码?</small></a>
        </div>
    </b-container>
</template>

<script>
    import * as apis from "../../apis";
    import { mapActions } from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                mode: 'login',
                login: {
                    username: '',
                    password: ''
                },
                reg: {
                    username: '',
                    password: '',
                    repeatPassword: '',
                    email: ''
                }
            }
        },
        methods: {
            ...mapActions({
                _afterLogin: 'afterLogin'
            }),
            async onLoginSubmit() {
                const user = {
                    username: this.login.username,
                    password: this.login.password
                }
                const resdata = await apis.login(user)
                await this._afterLogin()
                console.log(resdata)
                alert(resdata)
            },
            onLoginReset() {
                this.login.username = ''
                this.login.password = ''
            },
            async onRegSubmit() {
                const user = {
                    username: this.reg.username,
                    password: this.reg.password,
                    email: this.reg.email,
                }
                const resdata = await apis.reg(user)
                console.log(resdata)
                alert(resdata)
            },
            onRegReset() {
                this.reg.username = ''
                this.reg.repeatPassword = ''
                this.reg.password = ''
                this.reg.email = ''
            }
        }
    }
</script>

<style scoped>

</style>