<template>
    <b-container fluid class="p-0">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/lay/public">以下犯上</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" to="/lay/artical">文章</b-nav-item>
                    <b-nav-item href="#" to="/lay/user">用户管理</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="请输入关键字"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="语言" right>
                        <b-dropdown-item href="#">English</b-dropdown-item>
                        <b-dropdown-item href="#">简体中文</b-dropdown-item>
                        <b-dropdown-item href="#">繁体中文</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                            用户
                        </template>
                        <b-dropdown-item v-if="_user">
                            {{_user.username}}
                        </b-dropdown-item>
                        <b-dropdown-item @click="logout()">
                            注销
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "index",
        data() {
            return {

            }
        },
        computed: {
          ...mapState({
              _user: 'user'
          })
        },
        methods: {
            ...mapActions({
                _logout: 'logout',
                _getUser: 'getUser'
            }),
            logout() {
                this._logout()
            },
        },
        components: {  },
        mounted() {
            this._getUser()
        }
    }
</script>

<style scoped>

</style>