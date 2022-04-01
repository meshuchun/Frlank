export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
          {
            name: '注册结果页',
            icon: 'smile',
            path: '/userregisterresult',
            component: './UserRegisterResult',
          },
          {
            name: '注册页',
            icon: 'smile',
            path: '/userregister',
            component: './UserRegister',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '卡片列表',
    icon: 'smile',
    path: '/listcardlist',
    component: './ListCardList',
  },
  {
    name: '搜索列表（文章）',
    icon: 'smile',
    path: '/listsearcharticles',
    component: './ListSearchArticles',
  },
  {
    name: '搜索列表（项目）',
    icon: 'smile',
    path: '/listsearchprojects',
    component: './ListSearchProjects',
  },
  {
    name: '搜索列表（应用）',
    icon: 'smile',
    path: '/listsearchapplications',
    component: './ListSearchApplications',
  },
  {
    name: '搜索列表',
    icon: 'smile',
    path: '/listsearch',
    component: './ListSearch',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '个人中心',
    icon: 'smile',
    path: '/accountcenter',
    component: './AccountCenter',
  },
  {
    name: '个人设置',
    icon: 'smile',
    path: '/accountsettings',
    component: './AccountSettings',
  },
  {
    component: './404',
  },
];
