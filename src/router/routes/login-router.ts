export default [
  {
    path: '/profile/:id',
    component: () => import('@/layout/BaseLayout.vue'),

    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login-view.vue')
      }
    ]
  }
]
