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
                        <a href="">
                            <div class="img-hover-1">
                                <div class="hover-icons ">
                                    <font-awesome-icon class="icon" icon="fa-solid fa-link-slash" />
                                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />


                                </div>

                            </div>
                        </a>


                        <div class="card">
                            <a href=""><span class="person">
                                    Train with free weights or your body weight?
                                </span>
                            </a>



                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>
                    <div class="card-basis ">
                        <a href="">
                            <div class="img-hover-2">
                                <div class="hover-icons ">
                                    <font-awesome-icon class="icon" icon="fa-solid fa-link-slash" />
                                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />


                                </div>

                            </div>
                        </a>

                        <div class="card">
                            <a href=""><span class="person">
                                    To be number one, train like you’re number two
                                </span>
                            </a>


                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>



                </div>
                <div class="container-card-img">
                    <div class="card-basis">
                        <a href="">
                            <div class="img-hover-3">
                                <div class="hover-icons ">
                                    <font-awesome-icon class="icon" icon="fa-solid fa-link-slash" />
                                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />


                                </div>

                            </div>
                        </a>


                        <div class="card">
                            <a href=""><span class="person">
                                    Nutritional advice that will keep you training
                                </span>
                            </a>



                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>
                    <div class="card-basis">
                        <a href="">
                            <div class="img-hover-4">
                                <div class="hover-icons ">
                                    <font-awesome-icon class="icon" icon="fa-solid fa-link-slash" />
                                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />


                                </div>

                            </div>
                        </a>

                        <div class="card">
                            <a href=""><span class="person">
                                    Top 5 mistakes every gym member makes
                                </span>
                            </a>


                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>



                </div>
                <div class="container-card-img">
                    <div class="card-basis">
                        <a href="">
                            <div class="img-hover-5">
                                <div class="hover-icons ">
                                    <font-awesome-icon class="icon" icon="fa-solid fa-link-slash" />
                                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />


                                </div>

                            </div>
                        </a>

                        <div class="card">
                            <a href=""><span class="person">
                                    Simple principles for your next workout
                                </span>
                            </a>


                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor
                                vitae
                                porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]
                            </p>


                        </div>

                    </div>
                    <div class="card-basis ">
                        <a href="">
                            <div class="img-hover-6">
                                <div class="hover-icons ">
                                    <font-awesome-icon class="icon" icon="fa-solid fa-link-slash" />
                                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />


                                </div>

                            </div>
                        </a>

                        <div class="card ">
                            <a href=""><span class="person">
                                    The myths of shedding body fat explored
                                </span>
                            </a>


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

.button-trainers:hover {
    color: rgba(255, 255, 255, 0.722);
    border-color: rgba(255, 255, 255, 0.721);

}

.gap-card {
    gap: 25px;
}

.img-hover-1 {
    background-image: url('/images/blog1.jpg');
    height: auto;
    background-size: cover;
    height: 200px;

}

.img-hover-2 {
    background-image: url('/images/blog4.jpg');
    height: auto;
    background-size: cover;
    height: 276px;

}

.img-hover-3 {
    background-image: url('/images/blog6.jpg');
    height: auto;
    background-size: cover;
    height: 383px;

}

.img-hover-4 {
    background-image: url('/images/trainer3.jpg');
    height: auto;
    background-size: cover;
    height: 284px;

}

.img-hover-5 {
    background-image: url('/images/trainer4.jpg');
    height: auto;
    background-size: cover;
    height: 284px;

}

.img-hover-6 {
    background-image: url('/images/trainer1.jpg');
    height: auto;
    background-size: cover;
    height: 284px;

}

.card-basis:hover .hover-icons {
    opacity: 0.95;
    transform: scaleX(1);

    transform-origin: left;
}

.card-basis:hover .person {
    color: #ed6059;
}


.hover-icons {
    opacity: 0;
    background-color: #e35c55;

    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.icon {
    color: white;
    font-size: 25px;
}
</style>