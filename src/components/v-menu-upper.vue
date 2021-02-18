<template>
    <div class="v-menu-upper">
        <div class="v-menu-upper__items">
            <router-link :to="{name: 'mainpage'}">
            <div class="v-menu-upper__main-logo"></div>
            </router-link>
            <div class="v-menu-upper__itemsofitem">
            <div class="v-menu-upper__item">Новости</div>
            <div class="v-menu-upper__item">Акции</div>
            <div class="v-menu-upper__item">Lorem</div>
            <div class="v-menu-upper__item">Блог</div>
            <!-- <div class="v-menu-upper__item social">
                <img src="../assets/logo/instagram.svg" alt="">
                <img src="../assets/logo/vk.svg" alt="">
                <img src="../assets/logo/whatsapp.svg" alt="">
                <img src="../assets/logo/viber.svg" alt="">
            </div> -->
            <!-- <div class="v-menu-upper__item">
                <p>г. Саратов 8 (845-2) 29-03-42</p>
                <p>г. Энгельс 8 (908) 552-29-19</p>
            </div> -->
        </div>
        </div>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
        background:#FFF;
        height: 165px;
        position: relative;
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
            width: 120px;
            height: 120px;
            margin-top: 5px;
            align-items: center;
            border-radius: 50%;
            background: #064717;
            border: 1px solid green;
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