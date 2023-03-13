<script >
import MainHeader from './components/AppMainHeader.vue'
import AppFristMain from './components/AppFristMain.vue'


export default {
  components: {
    AppFristMain,
    MainHeader,
  },


}
</script>

<template>
  <MainHeader />
  <AppFristMain />
</template>

<style lang="scss">
@use './scss/general.scss'
</style>
