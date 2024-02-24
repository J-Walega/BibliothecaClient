export default [
  {
    path: '/employee',
    component: () => import('@/layout/BaseLayout.vue'),
    children: [
      {
        path: '',
        name: 'employeePanel',
        component: () => import('@/views/employee-panel-view.vue')
      }
    ]
  }
]
