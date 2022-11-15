<template>
  <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
  >
  <v-icon class="ml-2" :color="color" small v-on="$listeners">{{ icon }}</v-icon>
  </v-btn>
</template>

<script src="./operation.js" />
