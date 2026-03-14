<template>
  <ion-app>
    <ion-modal :is-open="isGuideModalOpen" @didDismiss="closeGuideModal">
      <ion-content :fullscreen="true">
        <div class="screen onboarding-screen">
          <section class="hero-card">
            <img class="brand-logo" src="/refactory-ready-set-code-logo.png" alt="Vue Roadmap logo" />
            <p class="eyebrow">Welcome Back</p>
            <h1>Use this app like a study coach, not just a checklist.</h1>
            <p>
              Open Today first, follow the lesson guidance, then save your progress in Checklist
              and Tracker before you stop for the day.
            </p>
          </section>

          <section class="section-card">
            <h2>Best way to use it</h2>
            <ion-list lines="none">
              <ion-item>
                <ion-label>Start with Today so you know the objective and output</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Use Roadmap when you want the full 14-day view</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Mark progress and write notes before you close the app</ion-label>
              </ion-item>
            </ion-list>
          </section>

          <section class="section-card">
            <div class="guide-checkbox-row">
              <ion-checkbox
                :checked="!progress.showGuideOnLaunch"
                @ionChange="setDontShowAgain($event.detail.checked)"
              />
              <ion-label>Don't show this guide on startup</ion-label>
            </div>
            <div class="primary-actions">
              <ion-button expand="block" @click="openFullGuide">Open Full Guide</ion-button>
              <ion-button expand="block" fill="outline" @click="closeGuideModal">Continue</ion-button>
            </div>
          </section>
        </div>
      </ion-content>
    </ion-modal>

    <ion-tabs>
      <ion-router-outlet />

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="today" href="/today">
          <ion-icon :icon="todayOutline" />
          <ion-label>Today</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="roadmap" href="/roadmap">
          <ion-icon :icon="mapOutline" />
          <ion-label>Roadmap</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="checklist" href="/checklist">
          <ion-icon :icon="checkmarkDoneOutline" />
          <ion-label>Checklist</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="guide" href="/guide">
          <ion-icon :icon="informationCircleOutline" />
          <ion-label>Guide</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="about" href="/about">
          <ion-icon :icon="shieldCheckmarkOutline" />
          <ion-label>About</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tracker" href="/tracker">
          <ion-icon :icon="statsChartOutline" />
          <ion-label>Tracker</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonButton,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue'
import {
  checkmarkDoneOutline,
  informationCircleOutline,
  mapOutline,
  shieldCheckmarkOutline,
  statsChartOutline,
  todayOutline
} from 'ionicons/icons'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoadmapContent } from './composables/useRoadmapContent'
import { useSprintStorage } from './composables/useSprintStorage'

const router = useRouter()
const isGuideModalOpen = ref(false)
const { refreshContent } = useRoadmapContent()
const { progress, setShowGuideOnLaunch } = useSprintStorage()

onMounted(() => {
  isGuideModalOpen.value = progress.value.showGuideOnLaunch
  refreshContent()
})

function closeGuideModal() {
  isGuideModalOpen.value = false
}

function openFullGuide() {
  closeGuideModal()
  router.push('/guide')
}

function setDontShowAgain(checked) {
  setShowGuideOnLaunch(!checked)
}
</script>
