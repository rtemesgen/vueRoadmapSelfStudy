<template>
  <ion-page>
    <app-header title="Tracker" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <section class="section-card">
          <h2>Confidence tracker</h2>
          <p>Track how each day felt, save quick notes, and come back later to review weak spots.</p>
          <p class="meta-copy">Notes save automatically while you type.</p>
          <ion-list lines="none">
            <ion-item v-for="prompt in trackerPrompts" :key="prompt">
              <ion-label>{{ prompt }}</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <div class="section-title-row">
            <div>
              <h2>Daily confidence</h2>
              <p class="meta-copy">Tap a day to open its confidence and note fields.</p>
            </div>
            <ion-button fill="outline" color="danger" size="small" @click="isResetAlertOpen = true">
              Reset sprint
            </ion-button>
          </div>

          <ion-accordion-group class="tracker-accordion-group">
            <ion-accordion v-for="entry in roadmapDays" :key="entry.day" :value="String(entry.day)">
              <ion-item slot="header" button>
                <ion-label>
                  <p class="eyebrow">Day {{ entry.day }}</p>
                  <h2>{{ entry.title }}</h2>
                  <p>
                    Confidence: {{ progress.confidenceByDay[entry.day] || 0 }}/5
                    | Done: {{ progress.dayCompletion[entry.day] ? 'Yes' : 'No' }}
                  </p>
                </ion-label>
              </ion-item>

              <div slot="content" class="accordion-content">
                <ion-range
                  :value="progress.confidenceByDay[entry.day]"
                  :min="0"
                  :max="5"
                  :step="1"
                  :snaps="true"
                  :ticks="true"
                  @ionInput="setConfidence(entry.day, $event.detail.value)"
                >
                  <div slot="start">0</div>
                  <div slot="end">5</div>
                </ion-range>

                <p class="confidence-copy">
                  Confidence: {{ progress.confidenceByDay[entry.day] || 0 }}/5
                </p>

                <ion-textarea
                  label="Notes"
                  label-placement="stacked"
                  fill="outline"
                  :value="progress.notesByDay[entry.day]"
                  @ionInput="setNote(entry.day, $event.detail.value ?? '')"
                />
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </section>

        <ion-alert
          :is-open="isResetAlertOpen"
          header="Reset sprint?"
          message="This clears your saved checklist, confidence, notes, and sprint start date."
          :buttons="alertButtons"
          @didDismiss="isResetAlertOpen = false"
        />

        <ion-toast
          :is-open="isToastOpen"
          :message="toastMessage"
          duration="1600"
          position="bottom"
          @didDismiss="isToastOpen = false"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonAccordion,
  IonAccordionGroup,
  IonAlert,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRange,
  IonTextarea,
  IonToast
} from '@ionic/vue'
import { computed, ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import { useRoadmapContent } from '../composables/useRoadmapContent'
import { useSprintStorage } from '../composables/useSprintStorage'

const { progress, resetProgress, setConfidence, setNote } = useSprintStorage()
const { content } = useRoadmapContent()
const isResetAlertOpen = ref(false)
const isToastOpen = ref(false)
const toastMessage = ref('')
const roadmapDays = computed(() => content.value.roadmapDays || [])
const trackerPrompts = computed(() => content.value.trackerPrompts || [])

function showToast(message) {
  toastMessage.value = message
  isToastOpen.value = true
}

const alertButtons = [
  {
    text: 'Cancel',
    role: 'cancel'
  },
  {
    text: 'Reset',
    role: 'destructive',
    handler: () => {
      resetProgress()
      showToast('Sprint reset complete.')
    }
  }
]
</script>
