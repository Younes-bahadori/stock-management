<template>
  <div >
    <v-navigation-drawer
        :mini-variant.sync="mini"
        permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
            icon
            @click.stop="mini = !mini"
        >
          <v-icon aria-label="My Account" role="img" aria-hidden="false">

            {{ icons.mdiChevronLeft }}

          </v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>


          <v-list-group
              :value="true"
              no-action
                v-if="item.children"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Stocks</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="(subMenu, i) in item.children"
                :key="i"
                link
                :to="item.path"
            >
              <v-list-item-icon>
                <v-icon v-text="subMenu.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="subMenu.title"></v-list-item-title>


            </v-list-item>
          </v-list-group>
          <v-list-item-content v-else>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mdiStorefrontCheck, mdiHome,mdiFormatListCheckbox,mdiBookPlusOutline,mdiBookMinusOutline,mdiChevronLeft     } from '@mdi/js'

export default {
  data() {
    return {
      drawer: true,
      items: [
        {title: 'Home', icon: mdiHome, tooltip: 'Home', path: '/'},
        {
          title: 'Stocks', icon: mdiStorefrontCheck, tooltip: 'Stocks Management', children: [
            {title: 'List', icon: mdiFormatListCheckbox ,path: '/Stocks/list',},
            {title: 'Add', icon: mdiBookPlusOutline, path: '/Stocks/add'},
            {title: 'Decrease', icon: mdiBookMinusOutline , path: '/Stocks/decrease'},
          ],
        },
      ],
      icons: {
        mdiChevronLeft
      },
      mini: true,
    }
  },
}
</script>

