import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import ItemView from '../views/ItemView';
import MyPageView from '../views/MyPageView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path : '/',
            component : HomeView,
        },
         {
            path : '/item',
            component : ItemView,
        },
         {
            path : '/mypage',
            component : MyPageView,
        },
    ]
});

