import App from './containers/App';
import My from './containers/My';
import Admin from './containers/Admin';
import Site from './containers/Site';

export default [
  {
    component: App,
    routes: [
      {
        path: '/my',
        component: My,
      },
      {
        path: '/admin',
        component: Admin,
      },
      {
        path: '*',
        component: Site,
      },
    ],
  },
];
