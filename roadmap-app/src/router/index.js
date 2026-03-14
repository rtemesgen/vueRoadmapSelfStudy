import { createRouter, createWebHistory } from '@ionic/vue-router'
import TodayPage from '../views/TodayPage.vue'
import GuidePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import RoadmapPage from '../views/RoadmapPage.vue'
import ChecklistPage from '../views/ChecklistPage.vue'
import ProjectPage from '../views/ProjectPage.vue'
import TrackerPage from '../views/TrackerPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/today'
  },
  {
    path: '/today',
    component: TodayPage
  },
  {
    path: '/roadmap',
    component: RoadmapPage
  },
  {
    path: '/guide',
    component: GuidePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/checklist',
    component: ChecklistPage
  },
  {
    path: '/project',
    component: ProjectPage
  },
  {
    path: '/tracker',
    component: TrackerPage
  }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
