<template>
  <div>
    <v-text-field
      v-if="!searchDisabled"
      v-model="searchData"
      :append-icon="icons.mdiMagnify"
      label="Search ..."
      single-line
      hide-details
    ></v-text-field>

    <v-data-table
      :search="searchData"
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
      :loading="items.length ? false : true"
      loading-text="Loading ..."
      class="elevation-1 mt-5"
    >
      <template v-slot:item.actions="{ item }">
        <operation
          :item="item"
          v-for="(operation, index) in operationTypes"
          :key="index"
          :color="operation.color"
          :icon="operation.icon"
          @click="setEvent({ event: operation.event, item })"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script src="./data-table.js" />
