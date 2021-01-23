import Vue from 'vue';
import VueRouter from 'vue-router';
// import A from '@/modules/A/router/index';
import LandingPage from '@/modules/LandingPage/router/index';
import DashboardPage from '@/modules/DashboardPage/router/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
});

// router.addRoutes(A);
router.addRoutes(LandingPage);
router.addRoutes(DashboardPage);

export default router;
