<script >
import MainHeader from './components/AppMainHeader.vue'
import AppFristMain from './components/AppFristMain.vue'
import AppSecondMain from './components/AppSecondMain.vue'
import AppThreeMain from './components/AppThreeMain.vue'
import AppFourMain from './components/AppFourMain.vue'
import AppFiveMain from './components/AppFiveMain.vue'
import AppMidle from './components/AppMidleJumbo.vue'
import AppCardFrist from './components/AppCardFrist.vue'
import AppCardSecond from './components/AppCardSecond.vue'
import AppFristFooter from './components/AppFristFooter.vue'
import AppSecondFooter from './components/AppSecondFooter.vue'
import AppLastFooter from './components/AppLastFooter.vue'



export default {
  components: {
    AppFristMain,
    MainHeader,
    AppSecondMain,
    AppThreeMain,
    AppFourMain,
    AppFiveMain,
    AppMidle,
    AppCardFrist,
    AppCardSecond,
    AppFristFooter,
    AppSecondFooter,
    AppLastFooter,
  },


}
</script>

<template>
  <MainHeader />
  <AppFristMain />
  <AppSecondMain />
  <AppThreeMain />
  <AppFourMain />
  <AppFiveMain />
  <AppMidle />
  <AppCardFrist />
  <AppCardSecond />
  <AppFristFooter />
  <AppSecondFooter />
  <AppLastFooter />
</template>

<style lang="scss">
@use './scss/general.scss'
</style>
