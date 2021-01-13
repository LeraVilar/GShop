 <template>

    <div class="v-menu-bottom" id="nav"> 
        <div class="v-menu-bottom__items">
            <router-link :to="{name: 'mainpage'}">
            <div class="v-menu-bottom__back-to-catalog">
                <i class="material-icons catalog">expand_more</i>
                <span class="v-menu-bottom__back-catalog">Каталог</span>
            </div>
            </router-link>
            <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            
            <div class="v-menu-bottom__cart">
                <div class="v-menu-bottom__value">{{CART.length}}</div>
                <i class="material-icons" id="cart">add_shopping_cart</i>
            </div>
            </router-link>
            <div class="v-menu-bottom__login">
                <div class="v-menu-bottom__register">Регистрация</div>
                <div class="v-menu-bottom__enter">Войти</div>
            </div>
            <div class="v-menu-bottom__search" data-step="a">
                <input type="text" class="search">
                <i class="material-icons" id="search">search</i>
            </div>
        </div>
    </div>

</template>
<script>
import $ from 'jquery';
import {mapGetters} from 'vuex'


export default {
    name: 'v-menu-bottom',
    components: {


    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
    mounted() {
        $(function (f) {
    f(window).scroll(function () {
        f('#nav')[
            (f(this).scrollTop() > 55 ? "add" : "remove") + "Class"
            ]("bar_fixed");
    });
});
        $('.v-menu-bottom__back-to-catalog').hover(function(){
                    if (!$('.catalog').data('status')) {
            $('.catalog').html('expand_less');
            $('.catalog').data('status', true);
        }
        else {
            $('.catalog').html('expand_more');
            $('.catalog').data('status', false);
  }
});

    },
    data () {
        return {}
    }
}

</script>
<style lang="scss">
    #cart {
        font-size: 36px;
        color: #ffffff;
    }
    #search {
        font-size: 36px;
        color: #ffffff;
    }
    .v-menu-bottom {
        width: 100%;
        height: 75px;
        background: #546054;
        position: fixed;
        &__value {
            position: absolute;
            margin: -10px 25px;
            border-radius: 50%;
            width: 20px;
            height: 22px;
            text-align: center;
            font-weight: 900;
            font-size: 20px;
            color: #FFFFFF;
            background: red;
        }
        
        &__items {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            max-width: 1440px;
            margin: 0 auto;
         }
        &__back-to-catalog {
            display: flex;
            align-items: center;
            font-size: 26px;
            font-weight: 600;
        }
        &__search {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 50px;
            .search {
                margin: 0 18px;
                width: 300px;
                height: 40px;
                background: #B36C5A;
                border: none;
                font-size: 28px;
                padding: 5px;
                border-radius: 15px;
            }
         }

        &__register {
            margin: 0 16px;
         }

        &__login {
            display: flex;
            margin: 0 150px;
            font-size: 26px;
         }
}

.bar_fixed {
    top: 0;
    position: fixed;
    z-index: 2;
}
</style>