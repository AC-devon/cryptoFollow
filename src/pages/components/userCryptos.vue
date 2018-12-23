<template>
<f7-page inner :page-content="true">

    <f7-block id="user-menu" inner>
        <f7-link tab-link="#showTable" tab-link-active>
            <font-awesome-icon icon="table" />
        </f7-link>
        <f7-link tab-link="#addCoin">
            <font-awesome-icon icon="plus" />
        </f7-link>
    </f7-block>

    <f7-tabs animated id="tabs-wrap">
        <f7-tab id="showTable" tab-active>
            <h2 id="sum-of-all-coins">${{this.sumOfAllCoins.toFixed(2)}}</h2>
            <div id="v-list" class="card data-table ">
                <div id="v-head">
                    <div class="v-head-titles numeric-cell">שם</div>
                    <div class="v-head-titles label-cell">ערך</div>
                    <div class="v-head-titles numeric-cell">רווח/הפסד</div>
                    <div class="v-head-titles numeric-cell">מחיר</div>
                    <div class="v-head-titles numeric-cell">מחק</div>
                </div>

                <div id="v-body"  
                v-for="(coin, index) in coinsList" 
                :key="index" 
                :class="{'hover-on' : showByIndex === index }"
                 @mouseover="showByIndex = index" 
                 @mouseout="showByIndex = null" 
                >
                    <div class="v-body-items-user numeric-cell">{{coin.name}}<br><img class="table-img" :src="coin.image"></div>
                        <div class="v-body-items-user label-celll">
                            <div>${{Number(coin.total).toFixed(2)}}</div>
                            <div class="text-color-orange">{{coin.quantity}}</div>
                        </div>
                        <div class="v-body-items-user numeric-cell precentage" :class="{green: coin.price_change_percentage_24h > 0, red:coin.price_change_percentage_24h < 0}">
                            בקרוב...
                        </div>
                        <div class=" v-body-items-user numeric-cell">${{Number(coin.price).toFixed(2)}}</div>
                      <div class="v-body-items-user v-body-edit"> <f7-chip @click="deleteCoin(coin,index)" deleteable ></f7-chip></div>
                    </div>

                </div>
                
        </f7-tab>
        <f7-tab id="addCoin">
            <f7-block>
                <add-coin />
            </f7-block>
        </f7-tab>
    </f7-tabs>

    <!-- hidden add-coin until chose coin fron coin-list component -->

</f7-page>
</template>

<script>
import { db } from "../../firebase.config.js";

import addCoin from "./addCoin.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    "add-coin": addCoin
  },
  data() {
    return {
      showByIndex: null,
      sumOfAllCoins: 0,
      isBottom: true,
      coinName: "",
      quantity: "",
      selectedCoin: {},
      coinsData: []
    };
  },

  methods: {
    deleteCoin(val, i) {
      this.$store.dispatch("deleteUserCoin", val);
    },
    refactorUserData() {
      let coinsArr = [];
      console.log(this.get_user_Coins);
      this.getFullCoinList.filter(coin => {
        return this.get_user_Coins.filter(uniq => {
          if (coin.symbol == uniq.name) {
            coinsArr.push({
              name: coin.name,
              symbol: coin.symbol,
              price: coin.current_price,
              quantity: uniq.quantity,
              total: uniq.quantity * coin.current_price,
              image: coin.image
            });
          }
        });
      });
      this.sumOfAllCoins = 0;
      coinsArr.map(coin => {
        this.sumOfAllCoins += Number(coin.total);
      });
      this.coinsData = coinsArr;
      console.log(coinsArr, "coin data");
      return this.coinsData;
    }
  },
  created() {
    this.$store.dispatch("userCoinList");
  },
  computed: {
    ...mapGetters(["getFullCoinList", "userData", "get_user_Coins"]),
    coinsList() {
      //return this.get_user_Coins;

      return this.refactorUserData();
    }
    // userData() {
    //   return this.$store.getters.userData;
    // }
  }
};
</script>

<style>
/*user menu style*/
#sum-of-all-coins {
  text-align: center;
  color: orange;
}

#user-menu {
  text-align: center;
  font-size: 31px;
}

/* table style*/
#showTable .card {
  max-width: 800px;
  margin: 0 auto;
}
#user-menu > a.tab-link.link.tab-link-active {
  border: 1px solid orange;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
#v-body {
  transition: 0.2s ease;
}

.v-body-items-user {
  width: 25%;
  padding-right: 5%;
  padding-top: 1%;
  text-align: right;
}

.v-body-items-user:nth-child(1),
.v-body-items-user:nth-child(2) {
  border-bottom: 1px solid rgba(176, 176, 176, 0.35);
}

.table-img {
  width: 25px;
}

.hover-on {
  cursor: pointer;
  background: #ffa500a3;
  transition: 0.3s ease;
}
</style>
