<template>
  <ion-page>
    <app-header title="Roadmap" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <section class="hero-card">
          <p class="eyebrow">Full Study Guide</p>
          <h1>See where each day is heading before you start it.</h1>
          <p>
            Each day includes the objective, what to study, what to research, what to build, and
            how to know you are on track.
          </p>
        </section>

        <ion-accordion-group class="tracker-accordion-group">
          <ion-accordion v-for="entry in roadmapDays" :key="entry.day" :value="String(entry.day)">
            <ion-item slot="header" button>
              <ion-label>
                <p class="eyebrow">Day {{ entry.day }}</p>
                <h2>{{ entry.title }}</h2>
                <p>{{ getDayDateLabel(entry.day) }}</p>
              </ion-label>
            </ion-item>

            <div slot="content" class="accordion-content">
              <p class="output-label">Objective</p>
              <p>{{ entry.objective }}</p>

              <p class="output-label">Main output</p>
              <p>{{ entry.output }}</p>

              <p class="output-label">What you need to know</p>
              <ion-list lines="none">
                <ion-item v-for="item in entry.needToKnow" :key="item">
                  <ion-label>{{ item }}</ion-label>
                </ion-item>
              </ion-list>

              <p class="output-label">What to study</p>
              <ion-list lines="none">
                <ion-item v-for="item in entry.studyTopics" :key="item">
                  <ion-label>{{ item }}</ion-label>
                </ion-item>
              </ion-list>

              <p class="output-label">What to research</p>
              <ion-list lines="none">
                <ion-item v-for="item in entry.researchPrompts" :key="item">
                  <ion-label>{{ item }}</ion-label>
                </ion-item>
              </ion-list>

              <p class="output-label">Build steps</p>
              <ion-list lines="none">
                <ion-item v-for="item in entry.buildTasks" :key="item">
                  <ion-label>{{ item }}</ion-label>
                </ion-item>
              </ion-list>

              <p class="output-label">Success checks</p>
              <ion-list lines="none">
                <ion-item v-for="item in entry.successChecks" :key="item">
                  <ion-label>{{ item }}</ion-label>
                </ion-item>
              </ion-list>

              <p class="output-label">Comfort note</p>
              <p>{{ entry.comfortNote }}</p>
            </div>
          </ion-accordion>
        </ion-accordion-group>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage
} from '@ionic/vue'
import { computed } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import { useRoadmapContent } from '../composables/useRoadmapContent'
import { useSprintStorage } from '../composables/useSprintStorage'

const { progress, hasStartedSprint } = useSprintStorage()
const { content } = useRoadmapContent()
const roadmapDays = computed(() => content.value.roadmapDays || [])

function getDayDateLabel(dayNumber) {
  if (!hasStartedSprint.value || !progress.value.sprintStartDate) {
    return `Planned day ${dayNumber}`
  }

  const dayDate = new Date(`${progress.value.sprintStartDate}T00:00:00`)
  dayDate.setDate(dayDate.getDate() + dayNumber - 1)

  return dayDate.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>
