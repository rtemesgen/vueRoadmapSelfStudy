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
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/vue'
import AppHeader from '../components/AppHeader.vue'
</script>
