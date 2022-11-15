import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('notificationModule')

export default {
  name: 'notificationComponent',

  data() {
    return {}
  },

  computed: {
    ...mapGetters({ notification: 'getNotification' }),
  },
}
