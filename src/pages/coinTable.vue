<template>
<f7-page id="coin-table-wrap" :page-content="true"  >

    <div class="searchbar-backdrop"></div>
    <form class="searchbar">
        <div class="searchbar-inner">
            <div class="searchbar-input-wrap">
                <input type="search"  placeholder="דוגמה:btc/bitcoin" v-model="search" >
                <i class="searchbar-icon"></i>
                <span class="input-clear-button"></span>
            </div>
            <span class="searchbar-disable-button">Cancel</span>
        </div>
    </form>
    <div id="v-list" class="card data-table " >
        <div id="v-head">
            <div class="v-head-titles numeric-cell">#</div>
            <div class="v-head-titles label-cell">שם</div>
            <div class="v-head-titles numeric-cell">%(24 שעות)</div>
            <div class="v-head-titles numeric-cell">מחיר</div>
        </div>
        <generic-loader v-show="this.$store.getters.loader" />
        <virtual-list :size="42" :remain="10">
            <div id="v-body" v-for="(coin, index) in paginatedData" :key="index" @click="goCoinPage(coin)">
                <div class="v-body-items numeric-cell">{{index +1}}</div>
                <div class="v-body-items label-celll coinImg">
                    <div class="coinName-plus-img">
                        <img :src="coin.image">
                        <div>{{coin.name}}</div>
                    </div>
                </div>
                <div class="v-body-items numeric-cell precentage" :class="{green: coin.price_change_percentage_24h > 0, red:coin.price_change_percentage_24h < 0}">
                    {{Number(coin.price_change_percentage_24h).toFixed(2)}}%
                </div>
                <div class=" v-body-items numeric-cell">${{Number(coin.current_price).toFixed(2)}}</div>
            </div>
        </virtual-list>
    </div>

</f7-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "coinTable",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    goCoinPage(coin) {
      this.$store.commit("SELECTED_COIN", coin);
      this.$f7router.navigate("/coin/", {});
    },

    //search whiten full coin list
    filterCoinList() {
      let self = this;
      return this.getFullCoinList.filter(coin => {
        return (
          coin.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          coin.symbol.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
        );
      });
    }
  },
  created() {
    this.$store.dispatch("loadCoins");
  },

  computed: {
    ...mapGetters(["getFullCoinList"]),
    paginatedData() {
      if (this.search != "") {
        return this.filterCoinList();
      }
      return this.getFullCoinList;
    }
  }
};
</script>

<style>
.md .ptr-preloader {
  z-index: 250;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
 {
  opacity: 0;
  transform: translateY(30px);
}

/* table adjusments*/
.numeric-cell.precentage.red {
  direction: ltr;
}

.md .searchbar-disable-button,
.md .searchbar-icon {
  left: 0;
  right: inherit;
}

/*end of table adjusment*/

/* uniq table style*/
#v-head {
  line-height: 55px;
}

#v-head,
#v-body {
  display: flex;
}

.v-head-titles {
  padding-left: 28px;
  padding-right: 28px;
  color: rgba(0, 0, 0, 0.54);
}

.v-head-titles,
.v-body-items {
  width: 30%;
  text-align: center;
  font-weight: 500;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
}

.v-body-items:nth-child(1),
.v-head-titles:nth-child(1) {
  width: 20%;
}

.v-body-items:nth-child(2),
.v-head-titles:nth-child(2) {
  width: 30%;
}

.v-body-items:nth-child(1),
.v-body-items:nth-child(2) {
  border-bottom: 1px solid rgba(176, 176, 176, 0.35);
}

.v-body-items {
  line-height: 55px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.coinImg img {
  width: 20px;
  margin-left: 5px;
}

.coinName-plus-img {
  display: flex;
  align-items: center;
}

.green {
  color: green;
}

.red {
  color: red;
}

/*end of uniq table style*/
.bit-pad {
  margin-bottom: 20px;
}

@media screen and (max-width: 556px) {
  #v-head {
    line-height: 25px;
  }

  .v-head-titles {
    padding-left: 5px;
    padding-right: 5px;
  }

  .v-body-items:nth-child(2),
  .v-head-titles:nth-child(2) {
    width: 60%;
  }
}
</style>
