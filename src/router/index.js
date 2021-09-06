import Vue from 'vue';
import VueRouter from 'vue-router';
import { MainPage, LoginPage, RegisterPage } from '../components';

Vue.use(VueRouter);

const routes = [
  // 이곳에 router 를 등록
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
];

// router 객체생성
const router = new VueRouter({
  routes,
});

export default router;
