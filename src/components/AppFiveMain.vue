<template>
    <div class="back-ground">
        <div class="container">
            <h3 class="title-main">
                high performance facilities
            </h3>
            <img class="xx" src="/images/divider-xx-red.png" alt="">
            <div class="container-card-img flex">
                <div class="card">
                    <img class="img" src="/images/home-image1.jpg" alt="">

                </div>
                <div class="card">
                    <img class="img" src="/images/home-image2.jpg" alt="">

                </div>
                <div class="card">
                    <img class="img" src="/images/home-image3.jpg" alt="">

                </div>
                <div class="card">
                    <img class="img" src="/images/home-image4.jpg" alt="">

                </div>
                <div class="card">
                    <img class="img" src="/images/home-image54.jpg" alt="">

                </div>
                <div class="card">
                    <img class="img" src="/images/home-image6.jpg" alt="">

                </div>



            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 150px;
}

.title-main {
    color: white;

    font-size: 28px;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.back-ground {
    background-color: #25292b;
}

.container-card-img {
    flex-wrap: wrap;
    gap: 45px;
}

.img {
    object-fit: cover;
    aspect-ratio: 1;
    object-position: center;

}
</style>