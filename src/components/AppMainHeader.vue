<script>
import Appheader from './Appheader.vue';


export default {
    components: {
        Appheader
    },
    data() {
        return {
            pageNav: [
                {
                    "page": "home"
                },
                {
                    "page": "about us"
                },
                {
                    "page": "facilities"
                },
                {
                    "page": "membership"
                },
                {
                    "page": "testimonials"
                },
                {
                    "page": "blog"
                }


            ]

        }
    },
}
</script>
<template>
    <ul class="flex wrap">
        <Appheader v-for="(nav, i) in pageNav" :key="i" :page="nav.page" />
    </ul>
</template>



<style lang="scss"></style>