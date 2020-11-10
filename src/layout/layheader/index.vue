<template>
    <b-container fluid class="p-0">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" to="/artical">文章</b-nav-item>
                    <b-nav-item href="#" to="/user">用户管理</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item >
                            <b-button v-b-modal.my-modal>登录</b-button>
                        </b-dropdown-item>
                        <b-dropdown-item >
                            <b-button @click="logout()">注销</b-button>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
    import * as apis from '../../apis'
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {
            async logout() {
                const resdata = await apis.logout()
                console.log(resdata)
            }
        }
    }
</script>

<style scoped>

</style>