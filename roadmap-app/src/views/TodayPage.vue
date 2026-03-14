<template>
  <ion-page>
    <app-header title="Today" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <template v-if="!hasStartedSprint">
          <section class="hero-card">
            <img class="brand-logo" src="/refactory-ready-set-code-logo.png" alt="Vue Roadmap logo" />
            <p class="eyebrow">Start Your Sprint</p>
            <h1>Ready to begin the 14-day Vue roadmap?</h1>
            <p>
              Start the sprint today and the app will track your active day, progress, notes, and
              confidence across the full two weeks.
            </p>
          </section>

          <section class="section-card">
            <h2>What happens when you start</h2>
            <ion-list lines="none">
              <ion-item>
                <ion-label>The app sets Day 1 to today</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Today screen becomes your guided lesson page</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Checklist and Tracker save your progress locally</ion-label>
              </ion-item>
            </ion-list>
            <ion-button expand="block" size="large" @click="handleStartSprint">
              Start Sprint Today
            </ion-button>
          </section>

          <section class="section-card">
            <h2>Day 1 preview</h2>
            <p class="output-label">Objective</p>
            <p>{{ roadmapDays[0]?.objective }}</p>
            <p class="output-label">What you will study</p>
            <ion-list lines="none">
              <ion-item v-for="item in roadmapDays[0]?.studyTopics || []" :key="item">
                <ion-label>{{ item }}</ion-label>
              </ion-item>
            </ion-list>
          </section>
        </template>

        <template v-else-if="isSprintComplete">
          <section class="hero-card">
            <img class="brand-logo" src="/refactory-ready-set-code-logo.png" alt="Vue Roadmap logo" />
            <p class="eyebrow">Sprint Complete</p>
            <h1>You reached the end of the 14-day sprint.</h1>
            <p>
              Review your notes, confidence, and completed days, then restart when you want another
              run through the roadmap.
            </p>
          </section>

          <section class="section-card">
            <h2>Final summary</h2>
            <div class="tracker-grid">
              <div class="tracker-box">
                <span class="tracker-label">Completed Days</span>
                <span class="tracker-value">{{ completedDaysCount }}/14</span>
              </div>
              <div class="tracker-box">
                <span class="tracker-label">Start Date</span>
                <span class="tracker-value">{{ sprintStartLabel }}</span>
              </div>
            </div>
            <div class="primary-actions">
              <ion-button expand="block" @click="handleRestartSprint">Restart Sprint From Today</ion-button>
              <ion-button expand="block" fill="outline" @click="goTo('/tracker')">
                Review Notes And Confidence
              </ion-button>
            </div>
          </section>
        </template>

        <template v-else>
          <section class="hero-card">
            <img class="brand-logo" src="/refactory-ready-set-code-logo.png" alt="Vue Roadmap logo" />
            <p class="eyebrow">Current Focus</p>
            <h1>Day {{ activeDay.day }}: {{ activeDay.title }}</h1>
            <p>{{ activeDayDateLabel }}</p>
            <p class="meta-copy">{{ dayModeLabel }}</p>
          </section>

          <section class="section-card">
            <h2>Progress so far</h2>
            <div class="tracker-grid">
              <div class="tracker-box">
                <span class="tracker-label">Completed Days</span>
                <span class="tracker-value">{{ completedDaysCount }}/14</span>
              </div>
              <div class="tracker-box">
                <span class="tracker-label">Scheduled Day</span>
                <span class="tracker-value">Day {{ scheduledDayNumber }}</span>
              </div>
            </div>
            <p class="meta-copy">Sprint started {{ sprintStartLabel }}</p>
          </section>

          <section class="section-card">
            <div class="day-row">
              <div>
                <h2>Today's objective</h2>
                <p>{{ activeDay.objective }}</p>
              </div>
              <ion-badge :color="progress.dayCompletion[activeDay.day] ? 'success' : 'primary'">
                {{ progress.dayCompletion[activeDay.day] ? 'Completed' : 'In Progress' }}
              </ion-badge>
            </div>
          </section>

          <section class="section-card">
            <h2>What you need to know</h2>
            <ion-list lines="none">
              <ion-item v-for="item in activeDay.needToKnow" :key="item">
                <ion-label>{{ item }}</ion-label>
              </ion-item>
            </ion-list>
          </section>

          <section class="section-card">
            <h2>What to study</h2>
            <ion-list lines="none">
              <ion-item v-for="item in activeDay.studyTopics" :key="item">
                <ion-label>{{ item }}</ion-label>
              </ion-item>
            </ion-list>

            <p class="output-label">What to research</p>
            <ion-list lines="none">
              <ion-item v-for="item in activeDay.researchPrompts" :key="item">
                <ion-label>{{ item }}</ion-label>
              </ion-item>
            </ion-list>
          </section>

          <section class="section-card">
            <p class="output-label">Main output</p>
            <p>{{ activeDay.output }}</p>

            <p class="output-label">Build steps</p>
            <ion-list lines="none">
              <ion-item v-for="item in activeDay.buildTasks" :key="item">
                <ion-label>{{ item }}</ion-label>
              </ion-item>
            </ion-list>
          </section>

          <section class="section-card">
            <h2>How to know you are on track</h2>
            <ion-list lines="none">
              <ion-item v-for="item in activeDay.successChecks" :key="item">
                <ion-label>{{ item }}</ion-label>
              </ion-item>
            </ion-list>
            <p class="output-label">Comfort note</p>
            <p>{{ activeDay.comfortNote }}</p>
          </section>

          <section class="section-card">
            <h2>Quick actions</h2>
            <ion-list lines="none">
              <ion-item button @click="toggleTodayCompletion">
                <ion-label>
                  {{ progress.dayCompletion[activeDay.day] ? 'Mark as not done' : 'Mark today complete' }}
                </ion-label>
              </ion-item>
              <ion-item button @click="goTo('/checklist')">
                <ion-label>Open checklist</ion-label>
              </ion-item>
              <ion-item button @click="goTo('/tracker')">
                <ion-label>Open tracker and notes</ion-label>
              </ion-item>
              <ion-item button @click="goTo('/roadmap')">
                <ion-label>Open full roadmap</ion-label>
              </ion-item>
              <ion-item button @click="goTo('/project')">
                <ion-label>Open mini project brief</ion-label>
              </ion-item>
            </ion-list>
          </section>
        </template>

        <ion-toast
          :is-open="isToastOpen"
          :message="toastMessage"
          duration="1800"
          position="bottom"
          @didDismiss="isToastOpen = false"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonBadge,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToast
} from '@ionic/vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import { useRoadmapContent } from '../composables/useRoadmapContent'
import { useSprintStorage } from '../composables/useSprintStorage'

const router = useRouter()
const { content } = useRoadmapContent()
const {
  progress,
  hasStartedSprint,
  completedDaysCount,
  nextOpenDay,
  toggleDayCompletion,
  startSprint,
  resetProgress
} = useSprintStorage()

const isToastOpen = ref(false)
const toastMessage = ref('')
const roadmapDays = computed(() => content.value.roadmapDays || [])

const sprintStartDate = computed(() => {
  return progress.value.sprintStartDate ? new Date(`${progress.value.sprintStartDate}T00:00:00`) : null
})

const sprintStartLabel = computed(() => {
  if (!sprintStartDate.value) {
    return 'Not started'
  }

  return sprintStartDate.value.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
})

const currentSprintDay = computed(() => {
  if (!sprintStartDate.value) {
    return 1
  }

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const start = new Date(
    sprintStartDate.value.getFullYear(),
    sprintStartDate.value.getMonth(),
    sprintStartDate.value.getDate()
  )
  const diffInDays = Math.floor((today - start) / (1000 * 60 * 60 * 24))
  return diffInDays + 1
})

const scheduledDayNumber = computed(() => {
  const totalDays = roadmapDays.value.length || 1
  return Math.min(Math.max(currentSprintDay.value, 1), totalDays)
})

const actionableDayNumber = computed(() => {
  const totalDays = roadmapDays.value.length || 1
  return Math.min(Math.max(nextOpenDay.value, 1), totalDays)
})

const isSprintComplete = computed(() => completedDaysCount.value >= roadmapDays.value.length)

const activeDay = computed(() => {
  const dayNumber = isSprintComplete.value ? scheduledDayNumber.value : actionableDayNumber.value
  return roadmapDays.value.find((entry) => entry.day === dayNumber) || roadmapDays.value[0] || {}
})

const activeDayDateLabel = computed(() => {
  if (!sprintStartDate.value) {
    return 'Start the sprint to assign real dates'
  }

  const dayDate = new Date(sprintStartDate.value)
  dayDate.setDate(dayDate.getDate() + activeDay.value.day - 1)

  return dayDate.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
})

const dayModeLabel = computed(() => {
  if (isSprintComplete.value) {
    return 'You completed every day in this sprint.'
  }

  if (actionableDayNumber.value === scheduledDayNumber.value) {
    return 'You are on the current scheduled lesson.'
  }

  if (actionableDayNumber.value < scheduledDayNumber.value) {
    return `You are catching up on Day ${actionableDayNumber.value} while the calendar is at Day ${scheduledDayNumber.value}.`
  }

  return `You are ahead. The next unfinished lesson is Day ${actionableDayNumber.value}.`
})

function showToast(message) {
  toastMessage.value = message
  isToastOpen.value = true
}

function handleStartSprint() {
  startSprint()
  showToast('Sprint started. Day 1 is ready.')
}

function handleRestartSprint() {
  resetProgress()
  startSprint()
  showToast('Sprint restarted from today.')
}

function toggleTodayCompletion() {
  const nextValue = !progress.value.dayCompletion[activeDay.value.day]
  toggleDayCompletion(activeDay.value.day, nextValue)
  if (!nextValue) {
    showToast('Day marked as in progress.')
    return
  }

  const nextDay = Math.min(activeDay.value.day + 1, roadmapDays.value.length)
  showToast(
    activeDay.value.day === roadmapDays.value.length
      ? 'Final day completed. Sprint finished.'
      : `Day ${activeDay.value.day} complete. Next up: Day ${nextDay}.`
  )
}

function goTo(path) {
  router.push(path)
}
</script>
