import Operation from '@/common/components/operation/operation.vue'

import { mdiMagnify } from '@mdi/js'

export default {
  name: 'TableComponent',

  data() {
    return {
      icons: {
        mdiMagnify,
      },
      searchData: this.search,
    }
  },

  components: {
    Operation,
  },

  props:  {
    headers: {
      type: Array,
      required: true,
    },

    items: {
      type: Array,
      required: true,
    },

    itemsPerPage: {
      type: Number,
      required: true,
    },

    searchDisabled: {
      type: Boolean,
    },

    search: String,

    operationTypes: Array,
  },

  methods: {
    setEvent(data) {
      const { event, item } = data
      this.$emit(event, item)
    },

  },
}
