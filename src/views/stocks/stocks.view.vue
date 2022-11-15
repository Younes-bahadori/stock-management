<template>
  <div>
    <data-table
        :search="search"
        :headers="headers"
        :items="products"
        :items-per-page="itemsPerPage"
        :operationTypes="operationTypes"
        @showDetails="showDetails"
    />
  </div>
</template>

<script src="./stocks.view.js">
</script>

<style scoped lang="scss" src="./stocks.view.scss">
</style>