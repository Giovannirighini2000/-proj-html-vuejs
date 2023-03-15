<template>
    <div class="back-ground">
        <div class="container">
            <div class="flex gap-footer">
                <ul class="basis-info">
                    <li class="mini-title">COME FIND US</li>
                    <li class="andress">12345 North Main Street New York,
                        NY 555555
                    </li>
                    <li>Phone: <a href="" class="hover-click">1.800.555.6789</a> </li>
                    <li>Email: <a href="" class="hover-click">info@your-domain.com</a> </li>
                </ul>
                <ul class="basis-posts">
                    <li class="mini-title">RECENT POSTS</li>
                    <li class="border-bottom"><a href="" class="hover-click">> Train with free weights or your body
                            weight?</a> </li>
                    <li class="border-bottom"><a href="" class="hover-click">> Nutritional advice that will keep you
                            training</a> </li>
                </ul>
                <ul class="basis-opening">
                    <li class="mini-title">OPENING TIMES</li>
                    <li>Weekdays Monday - Friday</li>
                    <li class="ours">09:00 - 19:00</li>
                    <li>Weekends Saturday - Sunday</li>
                    <li class="ours">09:00 - 21:00

                    </li>
                </ul>
                <div>
                    <img class="hover-img" src="/images/gym_ad-compressor.jpg" alt="">
                </div>


            </div>

        </div>

    </div>
</template>
<style lang="scss" scoped>
.back-ground {
    background-color: #1f2123;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;

}

.gap-footer {
    justify-content: space-between;
}

.basis-info {
    flex-basis: 20%;
}

.basis-posts {
    flex-basis: 23%;
}

.basis-opening {
    flex-basis: 25%;
}

li {
    color: #989898;
}

ul {
    line-height: 35px;
}

.mini-title {
    color: #5b6568;
    padding-bottom: 20px;
}

.ours {
    color: #454b4e;
}

.border-bottom::after {
    content: "";
    display: block;
    height: 20px;
    border-bottom: 1px solid #454b4e;
}

.andress {
    padding-right: 20px;
}

.hover-click:hover {
    color: #ed6059;
}

.hover-img:hover {
    transform: scale(1.1);
}
</style>