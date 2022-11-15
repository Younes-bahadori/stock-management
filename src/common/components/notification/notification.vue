<template>
  <v-alert
    class="alert"
    border="left"
    :color="notification.color"
    :type="notification.type"
    transition="slide-x-transition"
    :value="notification.show"
  >
    {{ notification.message }}
  </v-alert>
</template>

<script src="./notification.js" />
<style src="./notification.scss" lang="scss" scoped />
