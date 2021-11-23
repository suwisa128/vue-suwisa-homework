import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Profile from './pages/Profile.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', name: 'profile', component: Profile },
  { path: '/contact', name: 'contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
