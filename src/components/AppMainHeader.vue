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
    <div class="back-ground ">
        <div class="flex center">
            <a href=""><img class="logo-gym" src="/images/gym_logo_2x.png" alt=""></a>

            <ul class="flex gap">

                <Appheader v-for="(nav, i) in pageNav" :key="i" :page="nav.page"
                    v-bind:class="{ 'first-child': i === 0 }" />
            </ul>
        </div>
        <div class="flex position">
            <div class="flex title ">
                <h1 class="up-size title-hero">
                    no pain no gain
                </h1>
            </div>
            <div class="flex title">
                <p class="white">
                    motivation is what gets you started. Habit is what keeps you going.
                </p>

            </div>
            <div class="flex title margin-button">
                <button class="button-join up-size"><a href="">join us today</a> </button>

            </div>

        </div>

    </div>
</template>



<style lang="scss" scoped>
.logo-gym {
    max-height: 131px;
    max-width: 250px;
}

.back-ground {
    position: relative;
    background-image: url('/images/home-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
}

.position {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}


.center {
    align-items: center;
    justify-content: space-between;
    padding: 32px 80px 0px 80px;
}

.gap {
    gap: 20px;
}

.up-size {
    text-transform: uppercase;
}

.title {
    justify-content: center;
    flex-direction: row;
}



.title-hero {
    font-weight: 900;
    font-size: 110px;
    color: white;
}

.white {
    color: white;
    font-weight: 100;
    font-size: 16px;
    letter-spacing: 3px;
}

.button-join {
    background-color: transparent;
    color: #737170;
    font-size: 20px;
    border: 1px solid #737170;
    padding: 10px 25px 10px 25px;
}

.button-join:hover {
    color: rgba(255, 255, 255, 0.722);
    border-color: rgba(255, 255, 255, 0.721);

}

.margin-button {
    margin-top: 20px;
}

.gap .first-child {
    color: #ed6059;
}

.gap li:hover {
    color: #ed6059;
}

.gap li {
    color: white;
    font-weight: 200;
    text-transform: uppercase;
}
</style>