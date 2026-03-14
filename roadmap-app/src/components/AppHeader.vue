<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup>
import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
