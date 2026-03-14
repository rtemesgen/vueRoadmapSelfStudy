<template>
  <ion-page>
    <app-header title="Checklist" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <section class="section-card">
          <h2>Daily routine</h2>
          <ion-list lines="none">
            <ion-item v-for="item in dailyChecklist" :key="item">
              <ion-checkbox
                slot="start"
                :checked="Boolean(progress.dailyRoutine[item])"
                @ionChange="handleRoutineToggle(item, $event.detail.checked)"
              />
              <ion-label>{{ item }}</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>Checkpoint review</h2>
          <ion-list lines="none">
            <ion-item v-for="goal in checkpointGoals" :key="goal">
              <ion-checkbox
                slot="start"
                :checked="Boolean(progress.checkpointGoals[goal])"
                @ionChange="handleCheckpointToggle(goal, $event.detail.checked)"
              />
              <ion-label>{{ goal }}</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>Mark each day complete</h2>
          <ion-list lines="none">
            <ion-item v-for="entry in roadmapDays" :key="entry.day">
              <ion-checkbox
                slot="start"
                :checked="Boolean(progress.dayCompletion[entry.day])"
                @ionChange="handleDayToggle(entry.day, $event.detail.checked)"
              />
              <ion-label>Day {{ entry.day }}: {{ entry.title }}</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <ion-toast
          :is-open="isToastOpen"
          :message="toastMessage"
          duration="1500"
          position="bottom"
          @didDismiss="isToastOpen = false"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonCheckbox,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToast
} from '@ionic/vue'
import { computed, ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import { useRoadmapContent } from '../composables/useRoadmapContent'
import { useSprintStorage } from '../composables/useSprintStorage'

const { progress, toggleCheckpointItem, toggleDayCompletion, toggleRoutineItem } =
  useSprintStorage()
const { content } = useRoadmapContent()
const isToastOpen = ref(false)
const toastMessage = ref('')
const checkpointGoals = computed(() => content.value.checkpointGoals || [])
const dailyChecklist = computed(() => content.value.dailyChecklist || [])
const roadmapDays = computed(() => content.value.roadmapDays || [])

function showToast(message) {
  toastMessage.value = message
  isToastOpen.value = true
}

function handleRoutineToggle(item, checked) {
  toggleRoutineItem(item, checked)
  showToast('Routine progress saved.')
}

function handleCheckpointToggle(goal, checked) {
  toggleCheckpointItem(goal, checked)
  showToast('Checkpoint progress saved.')
}

function handleDayToggle(day, checked) {
  toggleDayCompletion(day, checked)
  showToast(checked ? `Day ${day} marked complete.` : `Day ${day} marked in progress.`)
}
</script>
