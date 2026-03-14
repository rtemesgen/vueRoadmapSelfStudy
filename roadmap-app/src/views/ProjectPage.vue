<template>
  <ion-page>
    <app-header title="Mini Project" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <section class="hero-card">
          <p class="eyebrow">Practice App</p>
          <h1>Mini Karibu Frontend</h1>
          <p>{{ projectBrief.purpose }}</p>
        </section>

        <section class="section-card">
          <h2>Main screens</h2>
          <div class="chip-grid">
            <ion-chip v-for="screen in projectBrief.screens" :key="screen" color="primary">
              <ion-label>{{ screen }}</ion-label>
            </ion-chip>
          </div>
        </section>

        <section class="section-card">
          <h2>Stack</h2>
          <div class="chip-grid">
            <ion-chip v-for="item in projectBrief.stack" :key="item" color="success">
              <ion-label>{{ item }}</ion-label>
            </ion-chip>
          </div>
        </section>

        <section class="section-card">
          <h2>Build order</h2>
          <ion-list lines="none">
            <ion-item v-for="step in projectBrief.buildOrder" :key="step">
              <ion-label>{{ step }}</ion-label>
            </ion-item>
          </ion-list>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonChip,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage
} from '@ionic/vue'
import AppHeader from '../components/AppHeader.vue'
import { projectBrief } from '../data/roadmap'
</script>
