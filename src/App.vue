<script >
import MainHeader from './components/AppMainHeader.vue'
import AppFristMain from './components/AppFristMain.vue'
import AppSecondMain from './components/AppSecondMain.vue'
import AppThreeMain from './components/AppThreeMain.vue'
import AppFourMain from './components/AppFourMain.vue'
import AppFiveMain from './components/AppFiveMain.vue'
import AppMidle from './components/AppMidleJumbo.vue'



export default {
  components: {
    AppFristMain,
    MainHeader,
    AppSecondMain,
    AppThreeMain,
    AppFourMain,
    AppFiveMain,
    AppMidle,
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
</template>

<style lang="scss">
@use './scss/general.scss'
</style>
