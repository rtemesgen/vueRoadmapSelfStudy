<template>
  <ion-app>
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
        <ion-tab-button tab="project" href="/project">
          <ion-icon :icon="briefcaseOutline" />
          <ion-label>Project</ion-label>
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
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue'
import {
  briefcaseOutline,
  checkmarkDoneOutline,
  mapOutline,
  statsChartOutline,
  todayOutline
} from 'ionicons/icons'
</script>
