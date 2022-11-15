import {
  // mdiAccountMultiple,
  // mdiBriefcaseOutline,
  // mdiContentSave,
  // mdiFolderOpenOutline,
  // mdiMonitor,
  mdiAccountMultiplePlus,
  mdiChartBox,
  mdiMonitorDashboard,
  mdiMathLog,
  mdiMenu,
  mdiAccountTie,
  mdiUfoOutline,
  mdiCogOutline,
  mdiCircleSmall,
  mdiCardAccountPhone,
  mdiCubeOutline,
  mdiCloudSync,
  mdiChatProcessing,
  mdiGitlab,
  mdiTextBoxSearchOutline,
  mdiFolderInformationOutline,
  mdiDatabaseCogOutline,
} from '@mdi/js'
import menuItem from '@/user-interface/common/components/menu/menu-item/menu-item.vue'
import CircularLoading from '@/user-interface/common/components/loading/circular-loading/circular-loading.vue'
import { provideUserBloc } from '@/business-logic/user-management/presentation'
import { createNamespacedHelpers } from 'vuex'
import { removeCookie } from '@user-interface/common/services/cookie/index'

const { mapActions } = createNamespacedHelpers('notificationModule')
const userBloc = provideUserBloc()

export default {
  components: {
    menuItem,
    CircularLoading,
  },

  data() {
    return {
      items: [
        { title: 'پایش', tooltip: 'مانیتورینگ', icon: mdiMonitorDashboard, path: '/monitoring' },
        { title: 'رویداد ها', tooltip: 'سرویس لاگ', icon: mdiMathLog, path: '/log-service' },
        { title: 'منابع انسانی', tooltip: '', icon: mdiAccountTie, path: '/human-resources' },
        { title: 'hoppscotch', icon: mdiUfoOutline, path: '/hoppscotch' },
        {
          title: 'سرویس پیکربندی متمرکز',
          tooltip: 'ccs',
          icon: mdiCogOutline,
          children: [
            { title: 'مدیریت پروژه ها', icon: mdiCircleSmall, path: '/centralized-configuration-service/project' },
            { title: 'مدیریت اسکیما ها', icon: mdiCircleSmall, path: '/centralized-configuration-service/schema' },
            { title: 'مدیریت کانفیگ ها', icon: mdiCircleSmall, path: '/centralized-configuration-service/config' },
          ],
        },
        { title: 'مرکز تماس', icon: mdiCardAccountPhone, path: '/call-center' },
        {
          title: 'سامانگر',
          icon: mdiChartBox,
          children: [
            { title: 'گزارش گیری', icon: mdiCircleSmall, path: '/samangar/reporting' },
            { title: 'سرویس سامانگر', icon: mdiGitlab, path: '/samangar/service' },
          ],
        },
        // {
        //   title: 'سرویس سمد',
        //   icon: mdiAccountMultiplePlus,
        //   children: [
        //     { title: 'کاربران سمد', icon: mdiCircleSmall, path: '/samad/user' },
        //     { title: 'نقش های سمد', icon: mdiCircleSmall, path: '/samad/role' },
        //     { title: 'منابع سمد', icon: mdiCircleSmall, path: '/samad/resource' },
        //     { title: 'عملگرهای سمد', icon: mdiCircleSmall, path: '/samad/operation' },
        //   ],
        // },
        { title: 'سایجکت', icon: mdiCubeOutline, path: '/cyject' },
        { title: 'فضای ابری', icon: mdiCloudSync, path: '/part-cloud' },
        { title: 'راکت چت', icon: mdiChatProcessing, path: '/rocket-chat' },
        { title: 'گیت لب', icon: mdiGitlab, path: '/gitlab' },
        { title: 'ویکی', icon: mdiTextBoxSearchOutline, path: '/wiki' },
        { title: 'اطلاعات بسته های شرکت', icon: mdiFolderInformationOutline, path: '/package-info' },
        { title: 'سجا', icon: mdiDatabaseCogOutline, path: '/saja' },

        // { title: 'مدیریت نقش ها', icon: mdiBriefcaseOutline, path: '/role-management' },
        // { title: 'مدیریت فضای ذخیره سازی', icon: mdiContentSave, path: '/storage-management' },
        // { title: 'مدیریت فایل ها', icon: mdiFolderOpenOutline, path: '/file-management' },
        // { title: 'مدیریت دسترسی ها', icon: mdiMonitor, path: '/access-management' },
      ],
      icons: {
        mdiMenu,
      },
    }
  },

  props: {
    value: Boolean,
    temporary: Boolean,
  },

  computed: {
    drawer: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },

  methods: {
    ...mapActions(['showNotification']),

    async logout() {
      try {
        await userBloc.logout()
        removeCookie('token')
        this.$router.push('/login')
      } catch (error) {
        this.showNotification({ message: error.message, type: 'error' })
      }
    },
  },
}
