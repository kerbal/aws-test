import { RouteConfig } from 'vue-router';
import DashboardWrapper from '../components/DashboardWrapper.vue';

import ProjectDetailWrapper from '../components/ProjectDetail/ProjectDetailWrapper.vue';

import OverviewWrapper from '../components/ProjectDetail/OverviewWrapper.vue';

import SettingWrapper from '../components/ProjectDetail/SettingWrapper.vue';
import SettingCollaborator from '../components/ProjectDetail/SettingCollaborator.vue';
import SettingConfiguration from '../components/ProjectDetail/SettingConfiguration.vue';
import SettingNotification from '../components/ProjectDetail/SettingNotification.vue';
import SettingPayment from '../components/ProjectDetail/SettingPayment.vue';

const route: RouteConfig[] = [{
  path: '/dashboard',
  component: DashboardWrapper,
  children: [
    {
      path: ':projectid',
      component: ProjectDetailWrapper,
      children: [
        {
          path: 'overview',
          component: OverviewWrapper,
        },
        {
          path: 'setting',
          component: SettingWrapper,
          children: [
            {
              path: 'collaborator',
              component: SettingCollaborator,
            },
            {
              path: 'configuration',
              component: SettingConfiguration,
            },
            {
              path: 'notification',
              component: SettingNotification,
            },
            {
              path: 'payment',
              component: SettingPayment,
            },
          ],
        },
      ],
    },
  ],
}];

export default route;
