import VueRouter from "vue-router";

import artical from './pages/artical';
import articallist from './pages/articallist'
import articaldetail from './pages/articaldetail'
import editor from './pages/editor'

import user from './pages/user'

const router = new VueRouter({
    routes: [{
        path: '/artical',
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
        path: '/editor/:articalid',
        name: 'articaleditor',
        props: true,
        component: editor
    }, {
        path: '/user',
        name: 'user',
        component: user
    }, {
        path: '/user/:id',
        name: 'user'
    }]
})

export default router