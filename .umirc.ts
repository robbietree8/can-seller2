import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/contact', component: '@/pages/contact/index' },
    { path: '/product', component: '@/pages/product/index' },
  ],
  fastRefresh: {},
});
