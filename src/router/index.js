import VueRouter from "vue-router";

import layPage from './mainPages/lay'
import auth from './mainPages/auth'
//
import artical from './pages/artical';
import articallist from './pages/articalPages/articallist'
import articaldetail from './pages/articalPages/articaldetail'
import editor from './pages/editor'

import user from './pages/user'
import publicPage from './pages/public'


const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/lay/public'
    },{
        path: '',
        redirect: '/lay/public'
    },{
        path: '/lay',
        name: 'lay',
        component: layPage,
        children: [{
            path: '',
            redirect: 'public'
        },{
            path: 'public',
            name: 'public',
            component: publicPage
        },{
            path: 'artical',
            name: 'artical',
            component: artical,
            children: [{
                path: 'list/:userid',
                name: 'articallist',
                props: true,
                component: articallist
            }, {
                path: 'detail/:articalid',
                name: 'articaldetail',
                component: articaldetail
            }]
        }, {
            path: 'editor/:articalid',
            name: 'articaleditor',
            props: true,
            component: editor
        }, {
            path: 'user',
            name: 'user',
            component: user
        }, {
            path: 'user/:id',
            name: 'user'
        }]
    },{
        path: '/auth',
        name: 'auth',
        component: auth
    }]
})

export default router