export default [
  {
    path: '/profile',
    component: () => import('@/layout/BaseLayout.vue'),
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import('@/views/profile-view.vue')
      }
    ]
  }
]
