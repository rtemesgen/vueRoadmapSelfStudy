<template>
  <ion-page>
    <app-header title="Guide" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <section class="hero-card">
          <p class="eyebrow">How To Use Vue Roadmap</p>
          <h1>Start here if you want the app to feel easy and clear.</h1>
          <p>
            This guide shows what each part of the app does, how to move through the 14-day sprint,
            and what to do when you are not sure what comes next.
          </p>
        </section>

        <section class="section-card">
          <h2>First 3 things to do</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Open the Today tab and tap Start Sprint Today</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Read the day's objective, study list, and build tasks</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Use Checklist and Tracker as you work so progress is saved</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>What each tab is for</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>
                <strong>Today</strong>: your current lesson, objective, study plan, build steps,
                success checks, and next actions
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <strong>Roadmap</strong>: the full 14-day study plan with detailed guidance for each day
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <strong>Checklist</strong>: daily routine, checkpoint tracking, and day completion marks
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <strong>Guide</strong>: quick help when you forget how to use the app
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <strong>Tracker</strong>: confidence score and notes for each day
              </ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>Recommended daily flow</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Read Today first so you know the goal before you start coding</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Study the listed topics for about 45 to 60 minutes</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Build the day project work from scratch</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Open Checklist and mark what you completed</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Open Tracker and save your confidence plus a short note</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>When you feel stuck</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Go back to the day's objective and ask what the real task is</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Use the What You Need To Know and What To Study sections before searching randomly</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Read the comfort note so you remember what matters most that day</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Use Tracker notes to record what confused you instead of hiding it</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>What the app saves for you</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Your sprint start date</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Your checklist progress</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Your completed days</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Your confidence scores and notes</ion-label>
            </ion-item>
          </ion-list>
          <p class="meta-copy">Progress is saved locally on the phone unless you reset the sprint.</p>
        </section>

        <section class="section-card">
          <h2>Mini project help</h2>
          <p>
            The app also includes a Mini Karibu project brief. You can open it from the Today screen
            when you want to see what kind of app you are building toward.
          </p>
        </section>

        <section class="section-card">
          <h2>Startup guide</h2>
          <p>Show the welcome guide each time the app opens until you feel comfortable using it.</p>
          <div class="guide-checkbox-row">
            <ion-checkbox
              :checked="progress.showGuideOnLaunch"
              @ionChange="setShowGuideOnLaunch($event.detail.checked)"
            />
            <ion-label>Show the welcome guide when the app starts</ion-label>
          </div>
        </section>

        <section class="section-card">
          <div class="section-title-row">
            <div>
              <h2>Content updates</h2>
              <p class="meta-copy">
                The app can pull newer roadmap text from a hosted JSON file and fall back to the
                built-in content when you are offline.
              </p>
            </div>
            <ion-badge :color="source === 'remote' ? 'success' : 'warning'">
              {{ source === 'remote' ? 'Remote' : 'Built in' }}
            </ion-badge>
          </div>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Last checked: {{ formatDate(lastCheckedAt) }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Last content update: {{ formatDate(lastUpdatedAt) }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Current source: {{ source === 'remote' ? 'Hosted update file' : 'Bundled fallback' }}</ion-label>
            </ion-item>
          </ion-list>
          <p v-if="refreshError" class="meta-copy">Update note: {{ refreshError }}</p>
          <ion-button expand="block" :disabled="isRefreshing" @click="handleRefreshContent">
            {{ isRefreshing ? 'Checking For Updates...' : 'Check For Content Updates' }}
          </ion-button>
        </section>

        <section class="section-card">
          <h2>Sharing advice</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Use the signed release APK when sharing, not the debug APK</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Google Drive, Dropbox, GitHub Releases, or a website usually feel safer than WhatsApp</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Install warnings usually happen because the APK is sideloaded, not because the app asks for risky permissions</ion-label>
            </ion-item>
          </ion-list>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonBadge,
  IonButton,
  IonCheckbox,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage
} from '@ionic/vue'
import AppHeader from '../components/AppHeader.vue'
import { useRoadmapContent } from '../composables/useRoadmapContent'
import { useSprintStorage } from '../composables/useSprintStorage'

const { progress, setShowGuideOnLaunch } = useSprintStorage()
const { source, isRefreshing, lastCheckedAt, lastUpdatedAt, refreshError, refreshContent } =
  useRoadmapContent()

function formatDate(value) {
  if (!value) {
    return 'Not checked yet'
  }

  return new Date(value).toLocaleString()
}

function handleRefreshContent() {
  refreshContent({ force: true })
}
</script>
