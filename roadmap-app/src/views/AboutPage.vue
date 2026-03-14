<template>
  <ion-page>
    <app-header title="About" />
    <ion-content :fullscreen="true">
      <div class="screen">
        <section class="hero-card">
          <p class="eyebrow">Trust And Info</p>
          <h1>{{ appMeta.name }}</h1>
          <p>
            This app is a learning companion for the 14-day Vue sprint. It keeps progress on the
            device and only uses internet access to check for optional content updates.
          </p>
        </section>

        <section class="section-card">
          <h2>App details</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Developer: {{ appMeta.developer }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Version: {{ appMeta.version }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Package: {{ appMeta.packageName }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Permissions: {{ appMeta.permissions.join(', ') }}</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>What stays on your phone</h2>
          <ion-list lines="none">
            <ion-item v-for="item in appMeta.dataStorage" :key="item">
              <ion-label>{{ item }}</ion-label>
            </ion-item>
          </ion-list>
          <p class="meta-copy">There is no account system and no cloud sync in this version.</p>
        </section>

        <section class="section-card">
          <h2>Why install warnings happen</h2>
          <p>
            Android warnings usually appear because the APK is being installed from outside an app
            store. That is called sideloading. This app keeps permissions minimal, but the warning
            can still appear when it is downloaded from chat apps or browsers.
          </p>
        </section>

        <section class="section-card">
          <h2>Safer ways to share</h2>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Share the release APK, not the debug APK</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Use Drive, Dropbox, GitHub Releases, or your own download page instead of chat attachment forwarding</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Tell users the app uses local storage and internet for content refresh only</ion-label>
            </ion-item>
          </ion-list>
        </section>

        <section class="section-card">
          <h2>Support</h2>
          <p>
            If someone has trouble installing the APK, ask them to check their Android version,
            storage space, and whether installs from that download source are allowed on the phone.
          </p>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/vue'
import AppHeader from '../components/AppHeader.vue'
import { appMeta } from '../data/appMeta'
</script>
