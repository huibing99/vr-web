export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [{ path: '/admin/sub-page', icon: 'smile', component: './Welcome' }],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', component: './404' },
  {
    name: 'userlist',
    icon: 'table',
    path: '/userlist',
    component: './UserList',
  },
];
