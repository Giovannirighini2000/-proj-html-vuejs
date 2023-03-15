<template>
    <div class="back-ground">
        <div class="container">
            <div class="flex content">
                <ul class="left-content flex">
                    <li><a href="" class="hover-info">© Copyright 2015</a></li>
                    <li>|</li>
                    <li> <a href="" class="hover-info">Avada Theme by ThemeFusion</a> </li>
                    <li>|</li>
                    <li><a href="" class="hover-info">All Rights Reserved</a> </li>
                    <li>|</li>
                    <li><a href="" class="hover-info">Powered by WordPress</a> </li>

                </ul>


                <ul class="icons flex">
                    <li>
                        <a href="#" class="icon-link">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" />
                            <span class="icon-label">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="" class="icon-link">
                            <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
                            <span class="icon-label">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="" class="icon-link">
                            <font-awesome-icon icon="fa-brands fa-instagram" class="icon" />
                            <span class="icon-label">Instagram</span>
                        </a>
                    </li>
                </ul>




            </div>
            <div class="return">
                <a href="" class="return-icon">^</a>

            </div>

        </div>


    </div>
</template>
<style lang="scss" scoped>
.back-ground {

    height: 150px;
    background-color: #1a1c1e;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

}

.content {
    display: flex;
    align-items: center;

}

.left-content {
    flex-grow: 1;
    color: #8c8c8c;
    gap: 5px;
}

.container {
    min-width: 1200px;
    margin: 0 auto;


}

.icons {
    gap: 20px;
    padding-right: 10px;
}

.icon {
    padding: 5px;
    color: #ffffff;
    background-color: #ee6059;
    width: 20px;
    height: 20px;
    padding: 10px;
    border: 1px solid #ee6059;
    border-radius: 8%;

}

.icon-label {
    display: none;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: bold;
    color: white;

}

.icon-link:hover .icon-label {
    display: block;
}

.icon-link:hover .icon {
    background-color: #1a1c1e;
    border-color: #1a1c1e;

}

.icon-link {
    position: relative;
}


.hover-info:hover {
    color: #ee6059;

}

.return {
    position: absolute;
    top: 40%;
    right: 30px;
    color: white;
}

.return-icon {
    padding: 8px 15px 8px 15px;

    background-color: grey;

    font-size: 20px;
    aspect-ratio: 1;
}
</style>