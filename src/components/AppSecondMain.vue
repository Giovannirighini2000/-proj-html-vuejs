<template>
    <div class="back-ground">
        <div class="flex content">
            <div class="basis-img">
                <img src="/images/home_img-compressor.jpg" alt="">

            </div>

            <div class="signup-form">
                <h3 class="title">Sign Up For A free Training Session!</h3>
                <p class="grey">Name..*</p>
                <input type="text" class="box white">
                <p class="grey">Email</p>
                <input type="email" class="box white">
                <div>
                    <button class="button-start">START NOW!</button>
                </div>

            </div>



        </div>

    </div>
</template>

<style lang="scss" scoped>
.back-ground {
    background-color: #1f2123;
}

.box {
    background-color: #202325;
    border: 1px solid #282b2e;
    width: 100%;
    height: 30px;
    margin-bottom: 40px;
}

.title {
    color: white;
    margin-bottom: 35px;
    letter-spacing: 1.5px;




}

.grey {
    color: #737374;
    margin-bottom: 10px;
}

.content {
    justify-content: center;
    gap: 40px;
    width: 100%;
    padding: 100px 0 100px;
}

.button-start {
    width: 100%;
    color: white;
    background-color: #ee6059;
    font-weight: 200;
    padding: 12px 0 12px 0;
    margin-top: 20px;
}


.basis-img {
    margin-left: 10px;
}

.signup-form {
    flex-basis: 22%;

}
</style>