import { createRouter, createWebHistory } from 'vue-router';
import HelloWorldVue from '../views/HelloWorld.vue';
import Variable from '../views/Variable.vue';
import Type from '../views/Type.vue';
import todo from '../views/todo.vue';
import Operator from '../views/Operator.vue';
import MagicClass from '../views/MagicClass.vue';
import NameSpace from '../views/NameSpace.vue';
import TypeCast from '../views/TypeCast.vue';
import MemberFunctionExtensionMethod from '../views/MemberFunctionExtensionMethod.vue';
import Closure from '../views/Closure.vue';
import Exception from '../views/Exception.vue';
import Autounwinded from '../views/Autounwinded.vue';
import Scope from '../views/Scope.vue';
import ContorlFlow from '../views/ContorlFlow.vue';
import GetterSetter from '../views/GetterSetter.vue';
import Template from '../views/Template.vue';

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
      path: '/memberfunctionextensionmethod',
      name: 'memberfunctionextensionmethod',
      component: MemberFunctionExtensionMethod
    },
    {
      path: '/closure',
      name: 'closure',
      component: Closure
    },
    {
      path: '/exception',
      name: 'exception',
      component: Exception
    },
    {
      path: '/autounwinded',
      name: 'autounwinded',
      component: Autounwinded
    },
    {
      path: '/scope',
      name: 'scope',
      component: Scope
    },
    {
      path: '/contorlflow',
      name: 'contorlflow',
      component: ContorlFlow
    },
    {
      path: '/gettersetter',
      name: 'gettersetter',
      component: GetterSetter
    },
    {
      path: '/template',
      name: 'template',
      component: Template
    }
  ]
})

export default router
