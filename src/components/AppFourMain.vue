<template>
    <div class="back-ground">
        <div class="container">
            <h3 class="title-main">
                real world results
            </h3>
            <img class="xx" src="/images/divider-xx-red.png" alt="">
            <div class="container-card flex">
                <div class="flex card">
                    <img src="/images/review_1-compressor.jpg" alt="">
                    <div class="text">
                        <p class="person">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quibusdam neque
                            saepe ex.
                            Dolores
                            fuga veniam modi. Debitis, necessitatibus fugiat!</p>
                        <p class="person">- Tara Smith</p>
                    </div>
                </div>
                <div class="flex card">
                    <img src="/images/review_2-compressor.jpg" alt="">
                    <div class="text">
                        <p class="person">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quibusdam neque
                            saepe ex.
                            Dolores
                            fuga veniam modi. Debitis, necessitatibus fugiat!</p>
                        <p class="person">- Tara Smith</p>
                    </div>
                </div>
                <div class="flex card">
                    <img src="/images/review_3-compressor-2.jpg" alt="">
                    <div class="text">
                        <p class="person">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quibusdam neque
                            saepe ex.
                            Dolores
                            fuga veniam modi. Debitis, necessitatibus fugiat!</p>
                        <p class="person">- Tara Smith</p>
                    </div>
                </div>
                <div class="flex card">
                    <img src="/images/review_4-compressor-2.jpg" alt="">
                    <div class="text">
                        <p class="person">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quibusdam neque
                            saepe ex.
                            Dolores
                            fuga veniam modi. Debitis, necessitatibus fugiat!</p>
                        <p class="person">- Tara Smith</p>
                    </div>

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

.card {
    flex-basis: 47%;
    background-color: #1f2123;
    padding: 20px;
}

.container-card {
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
}

.person {
    text-align: start;
}

.text {
    color: white;
    padding: 20px;
}
</style>