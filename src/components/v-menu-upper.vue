<template>
    <div class="v-menu-upper">
        <div class="v-menu-upper__items">
            <router-link :to="{name: 'mainpage'}">
            <img src="../assets/logo/3.svg" alt="" class="v-menu-upper__main-logo">
            </router-link>
            <div class="v-menu-upper__item">Новости</div>
            <div class="v-menu-upper__item">Акции</div>
            <div class="v-menu-upper__item">Lorem</div>
            <div class="v-menu-upper__item">Блог</div>
            <div class="v-menu-upper__item social">
                <img src="../assets/logo/instagram.svg" alt="">
                <img src="../assets/logo/vk.svg" alt="">
                <img src="../assets/logo/whatsapp.svg" alt="">
                <img src="../assets/logo/viber.svg" alt="">
            </div>
            <div class="v-menu-upper__item">
                <p>г. Саратов 8 (845-2) 29-03-42</p>
                <p>г. Энгельс 8 (908) 552-29-19</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-menu-upper",
    components: {

    },
    data() {
        return {}
    }
}
</script>
<style lang="scss">
    .v-menu-upper {
        background:#F2EFEA;
        height: 165px;

        &__items {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1440px;
            margin: 0 auto;
        }
        &__item {
            border: 1px solid rgb(21, 58, 30);
            padding: 12px;
            
        }
        &__main-logo {
            width: 200px;
            height: 155px;
            margin-top: 5px;
            align-items: center;
        }
    }
    .social {
        width: 200px;
        height: 30px;
        display: flex;
        justify-content: center;
        border: none;
        align-items: center;
        & img {
            width: 75px;
            height: 55px;
        }
    }
</style>