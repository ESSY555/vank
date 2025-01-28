import { createRouter, createWebHistory } from 'vue-router';
import Test from '@/components/test.vue';
import Post_propert from '@/post_property.vue';
import PropertyDetails from '@/components/property-details.vue';
import SummissionReview from '@/components/summission-review.vue';

const routes = [
  { path: '/', name: 'PostProperty', component: Post_propert },
  { path: '/about', name: 'About', component: Test },
  { path: '/property-details', name: 'property-details', component: PropertyDetails },
  { path: '/summission-review', name: 'summissionreview', component: SummissionReview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
