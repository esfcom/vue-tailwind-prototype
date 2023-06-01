import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Team from '../components/Team.vue'
import Projects from '../components/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/Projects',
      name: 'projects',
      component: Projects
    }
  ]
})

export default router
