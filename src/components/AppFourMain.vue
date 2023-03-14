<template>
    <div class="back-ground">
        <div class="container">
            <h3 class="title-main">
                real world results
            </h3>
            <img class="xx" src="/images/divider-xx-red.png" alt="">
            <div class="container-card flex">
                <div class="flex card">
                    <img class="img-author" src="/images/review_1-compressor.jpg" alt="">
                    <div class="text">
                        <em class="person description flex">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                            quibusdam neque

                            fuga veniam modi. Debitis, necessitatibus fugiat!"</em>
                        <p class="person author">- Tara Smith</p>
                    </div>
                </div>
                <div class="flex card">
                    <img class="img-author" src="/images/review_3-compressor-2.jpg" alt="">
                    <div class="text">
                        <em class="person description flex">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                            quibusdam neque

                            fuga veniam modi. Debitis, necessitatibus fugiat!"</em>
                        <p class="person author">- Tara Smith</p>
                    </div>
                </div>
                <div class="flex card">
                    <img class="img-author" src="/images/review_2-compressor.jpg" alt="">
                    <div class="text">
                        <em class="person description flex">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                            quibusdam neque

                            fuga veniam modi. Debitis, necessitatibus fugiat!"</em>
                        <p class="person author">- Tara Smith</p>
                    </div>
                </div>
                <div class="flex card">
                    <img class="img-author" src="/images/review_4-compressor-2.jpg" alt="">
                    <div class="text">
                        <em class="person description flex">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                            quibusdam neque

                            fuga veniam modi. Debitis, necessitatibus fugiat!"</em>
                        <p class="person author">- Tara Smith</p>
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
    padding-bottom: 300px;
}

.title-main {
    color: white;
    font-size: 28px;
    margin-bottom: 20px;
    text-transform: uppercase;
    padding-top: 100px;
}

.back-ground {
    background-color: #25292b;
}

.card {
    flex-basis: 48%;
    background-color: #1f2123;
    padding: 25px;
}

.container-card {
    flex-wrap: wrap;
    gap: 48px;
    justify-content: center;
    padding-top: 30px;
}

.person {
    text-align: start;
    color: #a9a8a8;
}

.text {
    color: white;
    padding: 0px 15px 15px 15px;
}

.description {
    color: #a39d9d;
    line-height: 30px;

}

.author {
    padding-top: 10px;
}

.img-author {

    object-fit: cover;
    object-position: center;
    aspect-ratio: 1;
}
</style>