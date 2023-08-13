import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '../views/HelloWorld.vue'
import Variable from '../views/Variable.vue'
import Type from '../views/Type.vue'
import todo from '../views/todo.vue'
import Operator from '../views/Operator.vue'
import MagicClass from '../views/MagicClass.vue'
import NameSpace from '../views/NameSpace.vue'
import TypeCast from '../views/TypeCast.vue'
import ExtensionMethod from '../views/ExtensionMethod.vue'

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
    },
    {
      path: '/operator',
      name: 'operator',
      component: Operator
    },
    {
      path: '/namespace',
      name: 'namespace',
      component: NameSpace
    },
    {
      path: '/magicclass',
      name: 'magicclass',
      component: MagicClass
    },
    {
      path: '/typecast',
      name: 'typecast',
      component: TypeCast
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/extensionmethod',
      name: 'extensionmethod',
      component: ExtensionMethod
    }
  ]
})

export default router
