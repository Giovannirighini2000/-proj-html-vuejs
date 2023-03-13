<script >
import MainHeader from './components/AppMainHeader.vue'
import AppFristMain from './components/AppFristMain.vue'
import AppSecondMain from './components/AppSecondMain.vue'


export default {
  components: {
    AppFristMain,
    MainHeader,
    AppSecondMain,
  },


}
</script>

<template>
  <MainHeader />
  <AppFristMain />
  <AppSecondMain />
</template>

<style lang="scss">
@use './scss/general.scss'
</style>
