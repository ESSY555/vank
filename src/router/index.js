import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; 

import NewHome from '@/components/new-home.vue';
import Test from '@/components/test.vue';
import Post_propert from '@/post_propert.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: Test },
  { path: '/new-home', name: 'new-home', component: NewHome },
  { path: '/post-property', name: 'new-home', component: Post_propert },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
