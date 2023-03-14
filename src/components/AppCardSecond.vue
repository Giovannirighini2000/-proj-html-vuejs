<template>
    <div class="back-ground">
        <div class="container">
            <h3 class="title-main">
                high performance facilities
            </h3>
            <img class="xx" src="/images/divider-xx-red.png" alt="">
            <div class="flex gap-card">
                <div class="container-card-img">
                    <div class="card-basis">
                        <img src="/images/blog1.jpg" alt="">
                        <div class="card">
                            <span class="person">
                                Train with free weights or your body weight?
                            </span>


                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>
                    <div class="card-basis ">
                        <img src="/images/blog4.jpg" alt="">
                        <div class="card">
                            <span class="person">
                                To be number one, train like you’re number two
                            </span>

                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>



                </div>
                <div class="container-card-img">
                    <div class="card-basis">
                        <div class="flex">
                            <img src="/images/blog6.jpg" alt="">
                        </div>

                        <div class="card">
                            <span class="person">
                                Nutritional advice that will keep you training
                            </span>


                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>
                    <div class="card-basis">
                        <img src="/images/trainer3.jpg" alt="">
                        <div class="card">
                            <span class="person">
                                Top 5 mistakes every gym member makes
                            </span>

                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>



                </div>
                <div class="container-card-img">
                    <div class="card-basis">
                        <img src="/images/trainer4.jpg" alt="">
                        <div class="card">
                            <span class="person">
                                Simple principles for your next workout
                            </span>

                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>
                    <div class="card-basis ">
                        <img src="/images/trainer1.jpg" alt="">
                        <div class="card ">
                            <span class="person">
                                The myths of shedding body fat explored
                            </span>

                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>


                </div>
            </div>
            <div class="flex button-position ">
                <button class="button-trainers">read all articles</button>

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
    height: 1700px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-card-img {

    padding-top: 30px;
}

.card-basis {

    background-color: #1f2123;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 25px;
}

.card {
    padding: 30px;
    text-align: start;
    flex-grow: 1;
}



.card-basis img {
    width: 100%;
    height: auto;

}



span {
    color: white;
    font-weight: bold;
    line-height: 25px;
    font-size: 22px;
}

.text {
    line-height: 28px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #a39d9d;
}



.button-position {
    justify-content: center;
    flex-direction: row;
    padding-top: 80px;

}

.button-trainers {
    background-color: transparent;
    color: #737170;
    font-size: 20px;
    border: 1px solid #737170;
    padding: 8px 20px 8px 20px;
    text-transform: uppercase;
}

.gap-card {
    gap: 25px;
}
</style>