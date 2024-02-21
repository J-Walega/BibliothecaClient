export default [
  {
    path: '/search',
    component: () => import('@/layout/BaseLayout.vue'),

    children: [
      {
        path: '',
        name: 'search',
        query: '',
        component: () => import('@/views/search-result-view.vue')
      }
    ]
  }
]
