<template>
    <div class="back-ground">
        <div class="container">
            <h3 class="title-main">
                high performance facilities
            </h3>
            <img class="xx" src="/images/divider-xx-red.png" alt="">
            <div class="container-card-img">
                <div class="card-basis">
                    <img src="/images/trainer1.jpg" alt="">
                    <div class="card">
                        <span class="person">
                            Ann baker
                        </span>
                        <div>
                            <span class="job">
                                Personal Trainer
                            </span>
                        </div>

                        <p class="text">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Obcaecati,
                            quibusdam?Lorem, ipsum.
                        </p>
                        <div class="icons flex">
                            <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />


                            <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />


                            <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />

                        </div>

                    </div>

                </div>
                <div class="card-basis">
                    <div class="flex">
                        <img src="/images/trainer3.jpg" alt="">
                    </div>

                    <div class="card">
                        <span class="person">
                            Anne Warren
                        </span>
                        <div>
                            <span class="job">
                                Personal Trainer
                            </span>
                        </div>

                        <p class="text">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Obcaecati,
                            quibusdam?Lorem, ipsum.
                        </p>
                        <div class="icons flex">
                            <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />


                            <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />


                            <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />

                        </div>

                    </div>

                </div>
                <div class="card-basis">
                    <img src="/images/trainer4.jpg" alt="">
                    <div class="card">
                        <span class="person">
                            Peter Rice
                        </span>
                        <div>
                            <span class="job">
                                Personal Trainer
                            </span>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Obcaecati,
                            quibusdam?Lorem, ipsum.
                        </p>
                        <div class="icons flex">

                            <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />


                            <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />


                            <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />



                        </div>

                    </div>

                </div>





            </div>
            <div class="flex button-position ">
                <button class="button-trainers">view all trainers</button>

            </div>
            <div class="center-separed">
                <font-awesome-icon class="separed" icon="fa-solid fa-play" />

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
    padding-top: 100px;
}

.back-ground {
    background-color: #1f2123;
}

.container-card-img {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-top: 30px;
    flex-wrap: wrap;
}

.card-basis {
    flex-basis: calc(33.33% - 40px * 2 / 3);
    background-color: #25292b;
}

.card-basis img {
    width: 100%;
    height: auto;

}

.card {
    padding: 30px;
    text-align: start;
}

span {
    color: white;
    font-weight: bold;
    line-height: 25px;
}

.text {
    line-height: 28px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #a39d9d;
}

.icon {
    width: 18px;
    height: 18px;
    padding: 10px;
    color: white;
    border: 1px solid #1f2123;
    background-color: #1f2123;
}



.icons {
    gap: 10px;
}

.button-position {
    justify-content: center;
    flex-direction: row;
    padding-top: 80px;
    padding-bottom: 150px;
}

.button-trainers {
    background-color: transparent;
    color: #737170;
    font-size: 20px;
    border: 1px solid #737170;
    padding: 6px 12px 6px 12px;
    text-transform: uppercase;
}

.center-separed {
    text-align: center;
}

.separed {
    transform: rotate(211deg);
    font-size: 50px;
    color: #1f2123;
    margin-bottom: -25px;

}
</style>
