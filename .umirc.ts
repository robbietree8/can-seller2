import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home/index' },
        { path: '/contact', component: '@/pages/contact/index' },
        { path: '/product', component: '@/pages/productlist/index' },
        { path: '/product-detail', component: '@/pages/productdetail/index' },
      ]
    },
  ],
  fastRefresh: {},
  title: 'Can maker'
});
