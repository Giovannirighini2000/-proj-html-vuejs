<template>
    <li>

        <p class="white">
            {{ page }}
        </p>

    </li>
</template>
<script>
export default {
    props: {

        page: String,



    }
}
</script>
<style lang="scss" scoped>
.white {
    color: white;
    font-weight: 200;
    text-transform: uppercase;
}
</style>
