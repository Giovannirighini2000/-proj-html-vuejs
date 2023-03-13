<template>
    <div class="back-ground">
        <div class="flex content">
            <div>
                <img src="/images/home_img-compressor-400x222.jpg" alt="">

            </div>
            <div>
                <div class="signup-form">
                    <h3 class="title">Sign Up For A free Training Session!</h3>
                    <p class="grey">Name..*</p>
                    <input type="text" class="box white">
                    <p class="grey">Email</p>
                    <input type="email" class="box white">
                    <div>
                        <button class="button-start">START NOW</button>
                    </div>

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
    width: 395px;
    height: 30px;
    margin-bottom: 25px;
}

.title {
    color: white;
    margin-bottom: 25px;



}

.grey {
    color: #737374;
    margin-bottom: 8px;
}

.content {
    justify-content: center;
    gap: 40px;
    padding: 100px;
}

.button-start {
    padding: 12px 158px 12px 158px;
    color: white;
    background-color: #ee6059;
    font-weight: 200;
}
</style>