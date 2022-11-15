<template>
  <v-app>
    <v-main>
      <div class="base-layout__content">
        <v-container class="base-layout__main">
          <router-view></router-view>
        </v-container>
      </div>
    </v-main>
    <notifications/>
  </v-app>
</template>

<script>
// import BaseLayout from "@/layouts/base-layout";

export default {
  components: {
    // BaseLayout
  },
  data: () => ({drawer: null}),

}
</script>
<style scoped lang="scss">
.base-layout {
  &__container {
    display: flex;
    min-height: 100vh;
    padding: 0;
  }

  &__content {
    width: 100%;
    background-color: #eceff1;
  }

  &__main {
    position: relative;
    min-height: calc(100vh - 72px);
    padding: 25px 3%;
  }
}

</style>
