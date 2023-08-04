import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '../views/HelloWorld.vue'
import Variable from '../views/Variable.vue'
import Type from '../views/Type.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorldVue
    },
    {
      path: '/variable',
      name: 'variable',
      component: Variable
    },
    {
      path: '/type',
      name: 'type',
      component: Type
    }
  ]
})

export default router
