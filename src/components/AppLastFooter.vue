<template>
    <div class="back-ground">
        <div class="container">
            <div class="flex content">
                <ul class="left-content flex">
                    <li>© Copyright 2015 </li>
                    <li>|</li>
                    <li> Avada Theme by ThemeFusion</li>
                    <li>|</li>
                    <li>All Rights Reserved </li>
                    <li>|</li>
                    <li>Powered by WordPress</li>

                </ul>
                <div class="icons flex">

                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />


                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />


                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />



                </div>

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

.container {
    min-width: 1200px;
    margin: 0 auto;

}
</style>