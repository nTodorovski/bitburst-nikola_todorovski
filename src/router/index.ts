import ToDoView from '@/views/ToDoView.vue';
import BacklogView from '@/views/BacklogView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: ToDoView
    },
    {
      path: '/backlog',
      name: 'backlog',
      component: () => import('../views/BacklogView.vue')
    }
  ]
})

export default router
