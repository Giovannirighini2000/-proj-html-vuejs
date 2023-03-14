<template>
    <div class="back-ground">
        <div class="center-margin">
            <div class="flex content">
                <div class="icon-description">
                    <div class=" text">
                        <font-awesome-icon class="icon" icon="fa-solid fa-link-slash" />


                    </div>
                    <h5 class="title-card">
                        Strenght & Conditioning

                    </h5>
                    <div class="flex center-x">
                        <img src="/images/divider-x-red.png" alt="">
                    </div>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, perferendis?

                    </p>

                </div>
                <div class="icon-description">
                    <div class="text">
                        <font-awesome-icon class="icon" icon="fa-solid fa-bicycle" />


                    </div>
                    <h5 class="title-card">
                        Fitness & Cardio

                    </h5>
                    <div class="flex center-x">
                        <img src="/images/divider-x-red.png" alt="">
                    </div>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, perferendis?

                    </p>

                </div>
                <div class="icon-description">
                    <div class=" text">
                        <font-awesome-icon class="icon" icon="fa-solid fa-cloud" />


                    </div>
                    <h5 class="title-card">
                        Flexibility & Rest

                    </h5>
                    <div class="flex center-x">
                        <img src="/images/divider-x-red.png" alt="">
                    </div>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, perferendis?

                    </p>

                </div>
                <div class="icon-description">
                    <div class="text">
                        <font-awesome-icon class="icon" icon="fa-solid fa-heart-pulse" />


                    </div>
                    <h5 class="title-card">
                        Health & Diet

                    </h5>
                    <div class="flex center-x">
                        <img src="/images/divider-x-red.png" alt="">
                    </div>

                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, perferendis?

                    </p>

                </div>


            </div>

        </div>



    </div>
</template>

<style lang="scss" scoped>
.white {
    color: white;

}

.back-ground {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 525px;
    background-image: url('/images/gym_bkgd_bw-compressor.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}




.icon {
    border: 1px solid currentColor;
    padding: 10px;
    border-radius: 50%;
    font-size: 50px;
    width: 60px;
    height: 60px;
    color: #ee6059;

}


.content {
    justify-content: center;

}

.text {
    text-align: center;
    color: #8e8e8e;
    line-height: 30px;
}

.center-margin {
    max-width: 1200px;
    margin: 0 auto;
}

.center-x {
    justify-content: center;
    margin: 15px 0 15px 0;
}

.title-card {
    color: white;
    text-align: center;
    padding-top: 10px;
    font-size: 16px;

}
</style>