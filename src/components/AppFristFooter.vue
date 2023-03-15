<template>
    <div class="back-ground-img">
        <div class="container">
            <div class="flex content">
                <div class="left-content">
                    <h3 class="title-main">
                        Archieve Your Fitness Goals
                    </h3>
                    <p class="text">Flexible membership packages to suit all levels of athlete and achive your fitness goals
                    </p>

                </div>
                <div>
                    <div class="flex button-position ">
                        <button class="button-join">join us </button>

                    </div>
                </div>

            </div>

        </div>


    </div>
</template>
<style lang="scss" scoped>
.back-ground-img {
    background-image: url('/images/home-parallax.jpg');
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

}

.button-join {
    background-color: transparent;
    color: #c3bab6;
    font-size: 18px;
    border: 1px solid #c3bab6;
    padding: 12px 25px 12px 25px;
    text-transform: uppercase;
}

.button-join:hover {
    color: rgba(255, 255, 255, 0.72);
    border-color: rgba(255, 255, 255, 0.72);
}

.content {
    display: flex;
    align-items: center;
    padding-right: 60px;
}

.left-content {
    flex-grow: 1;
}


.container {
    min-width: 1200px;
    margin: 0 auto;

}

.title-main {
    color: white;
    font-size: 32px;
    margin-bottom: 20px;

}

.text {
    color: white;
}
</style>