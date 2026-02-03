import { EnvironmentTypes, SiteConfig, footerApp, headerApp, shellApp } from '@openedx/frontend-base';
import { authnApp } from '@openedx/frontend-app-authn';
import { learnerDashboardApp } from '@openedx/frontend-app-learner-dashboard';
import { Main } from '@openedx/frontend-app-learner-dashboard/src/Main';

import './src/site.scss';

const siteConfig: SiteConfig = {
  siteId: 'frontend-template-site',
  siteName: 'Frontend Template Site',
  baseUrl: 'http://apps.local.openedx.io:8080',
  lmsBaseUrl: 'http://local.openedx.io:8000',
  loginUrl: 'http://local.openedx.io:8000/login',
  logoutUrl: 'http://local.openedx.io:8000/logout',

  environment: EnvironmentTypes.PRODUCTION,
  apps: [
    shellApp,
    headerApp,
    footerApp,
    authnApp,
    {
      ...learnerDashboardApp,
      routes: [{
        id: 'org.openedx.frontend.route.learnerDashboard.main',
        path: '/learner-dashboard',
        handle: {
          role: 'org.openedx.frontend.role.dashboard'
        },
        Component: Main
      }]
    },
  ],
  externalRoutes: [
    {
      role: 'org.openedx.frontend.role.profile',
      url: 'http://apps.local.openedx.io/profile/'
    },
    {
      role: 'org.openedx.frontend.role.account',
      url: 'http://apps.local.openedx.io/account/'
    },
    {
      role: 'org.openedx.frontend.role.logout',
      url: 'http://local.openedx.io/logout'
    },
  ],

  accessTokenCookieName: 'edx-jwt-cookie-header-payload',
};

export default siteConfig;
