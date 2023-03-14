<template>
    <div class="back-ground-image">
        <div class="container-pad">
            <div class="flex center">
                <p class="title-text">“ I fear not the man who has practiced 10,000 kicks once, but I fear the man who has
                    practiced
                    one kick 10,000 times ”
                </p>
                <img class="xx" src="/images/divider-xx-red.png" alt="">

                <span class="basis-text">
                    BRUCE LEE • QUOTE OF THE DAY
                </span>
            </div>
        </div>



    </div>
</template>
<style lang="scss" scoped>
.back-ground-image {
    background-image: url('/images/home-testimonial-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}


.title-text {
    font-size: 37px;
    line-height: 50px;



}

.center {
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;

    text-align: center;
    color: white;
    flex-wrap: wrap;
}

.container-pad {
    padding: 170px;
}

.basis-text {
    flex-basis: 100%;
    padding-top: 30px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
}

.xx {
    filter: brightness(0) saturate(100%) invert(100%);
    padding-top: 25px;
}
</style>