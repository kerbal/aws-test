import { RouteConfig } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';

const route: RouteConfig[] = [{
  path: '/',
  component: LandingPage,
  children: [],
}];

export default route;
