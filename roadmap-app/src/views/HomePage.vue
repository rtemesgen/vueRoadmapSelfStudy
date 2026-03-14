<template>
  <ion-page>
    <app-header title="Vue Sprint" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <section class="hero-card">
          <p class="eyebrow">2-Week Sprint</p>
          <h1>{{ sprintSummary.title }}</h1>
          <p>{{ sprintSummary.goal }}</p>
        </section>

        <section class="section-card">
          <h2>Progress so far</h2>
          <div class="tracker-grid">
            <div class="tracker-box">
              <span class="tracker-label">Completed Days</span>
              <span class="tracker-value">{{ completedDaysCount }}/14</span>
            </div>
            <div class="tracker-box">
              <span class="tracker-label">Current Target</span>
              <span class="tracker-value">Day {{ nextOpenDay }}</span>
            </div>
          </div>
        </section>

        <section class="section-card">
          <h2>What you will achieve</h2>
          <ion-list lines="none">
            <ion-item v-for="item in sprintSummary.outcome" :key="item">
              <ion-label>{{ item }}</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>Checkpoint targets</h2>
          <ion-list lines="none">
            <ion-item v-for="goal in checkpointGoals" :key="goal">
              <ion-label>{{ goal }}</ion-label>
            </ion-item>
          </ion-list>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/vue'
import { computed } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import { checkpointGoals, sprintSummary } from '../data/roadmap'
import { useSprintStorage } from '../composables/useSprintStorage'

const { completedDaysCount, progress } = useSprintStorage()

const nextOpenDay = computed(() => {
  const nextDay = Object.entries(progress.value.dayCompletion).find(([, done]) => !done)
  return nextDay ? nextDay[0] : 14
})
</script>
