import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import ItemView from '../views/ItemView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path : '/',
            redirect : '/news',
        },
        {
            path : '/news',
            name : 'news',
            component : NewsView, // news
        },
         {
            path : '/ask',
            name : 'ask',
            component : AskView,
        },
         {
            path : '/jobs',
            name : 'jobs',
            component : JobsView,
        },
        {
            path : '/user/:id',
            name : 'user',
            component : UserView,
        },
        {
            path: '/item/:id',
            name : 'item',
            component: ItemView,
        },
    ]
});

