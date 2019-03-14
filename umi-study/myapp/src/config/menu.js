// export default {
//   path: '/',
//   component: '../layouts/BasicLayout',
//   routes: [
//     {
//       path: '/basicConfig',
//       name: 'basicConfig',
//       routes: [{
//         path: '/dashboard/server',
//         name: 'server',
//         component: './Dashboard/server',
//       },
//       {
//         path: '/dashboard/manage',
//         name: 'manage',
//         component: './Dashboard/manage',
//       }
//     ]
//     }
//   ]
// }
export default  [
  {
    path: '/basicConfig',
    name: 'basicConfig',
    routes: [{
      path: '/basicConfig/serviceConfig',
      name: 'serviceConfig',
      component: './BasicConfig/serviceConfig',
    },
    {
      path: '/basicConfig/serviceManage',
      name: 'serviceManage',
      component: './BasicConfig/serviceManage',
    }
  ]
  },
  {
    path: '/user',
    name: 'user',
    routes: [{
      path: '/user/userManage',
      name: 'userManage',
      component: './User/userManage',
    },
    {
      path: '/user/userloginInfo',
      name: 'userloginInfo',
      component: './User/userloginInfo',
    }
  ]
  }
]