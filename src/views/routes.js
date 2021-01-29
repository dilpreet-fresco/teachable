const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: () => import('./landing/Landing'),
  },
  {
    path: '/features',
    exact: true,
    component: () => import('./features/Features'),
  },
  {
    path: '/pricing',
    exact: true,
    component: () => import('./pricing/Pricing'),
  },
  {
    path: '/about',
    exact: true,
    component: () => import('./about/About'),
  },
  {
    path: '/examples',
    exact: true,
    component: () => import('./examples/Examples'),
  },
  {
    path: '/admin/login',
    exact: true,
    component: () => import('./admin/login/Login'),
  },
  {
    path: '/sign_in',
    exact: true,
    component: () => import('./auth/Login'),
  },
  {
    path: '/sign_up',
    exact: true,
    component: () => import('./auth/Register'),
  },
];

const adminRoutes = [
  {
    path: '/admin/dashboard',
    exact: true,
    component: () => import('./admin/dashboard/Dashboard'),
  },
  {
    path: '/admin/pages/:id',
    exact: true,
    component: () => import('./admin/page-editor/PageEditor'),
  },
];

const emailUnverifiedRoutes = [
  // {
  //   path: '/auth/email-unverified',
  //   loader: () => import('./auth/EmailUnverifiedPage'),
  // },
];

const errorRoutes = [
  // {
  //   path: '/403',
  //   loader: () => import('./shared/errors/Error403Page'),
  // },
  // {
  //   path: '/500',
  //   loader: () => import('./shared/errors/Error500Page'),
  // },
  // {
  //   path: '**',
  //   loader: () => import('./shared/errors/Error404Page'),
  // },
];

export default {
  publicRoutes,
  adminRoutes,
};
