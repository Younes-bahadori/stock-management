<template>
  <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="70%"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        height="400"
        src="@/assets/image/1.jpg"
    ></v-img>

    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle> Stocks : {{ product.stock }}</v-card-subtitle>


    <v-card-text>

      <div class="my-4 text-subtitle-1">


      </div>

      <div class="mt-4">
        Availability:
        In stock
      </div>
      <div class="mt-4">
        Delivery time:
        approx. 14 working days
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group>
        <div class="text-center">
          <div class="mt-3 mr-3"> Reserved Stocks :</div>
          <v-chip v-for="(item,i) in product.reservations" :key="i">{{ item.amount }}</v-chip>
        </div>


      </v-chip-group>

    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="2">
          <v-subheader>Amount</v-subheader>
        </v-col>
        <v-col cols="10">
          <v-text-field
              v-model="amount"
              value="10"
              type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="flex justify-center">
      <v-btn
          elevation="2"
          color="purple lighten-2"
          text
          @click="activity('reserve')"
      >
        Reserve
      </v-btn>
      <v-btn
          elevation="2"
          color="success lighten-2"
          text
          @click="activity('refill')"
      >
        Refill
      </v-btn>
      <v-btn
          elevation="2"
          color="error lighten-2"
          text
          @click="activity('buy')"
      >
        Decrease
      </v-btn>


    </v-card-actions>
  </v-card>
</template>

<script src="./details.view.js">

</script>

<style scoped lang="scss" src="./details.view.scss">

</style>