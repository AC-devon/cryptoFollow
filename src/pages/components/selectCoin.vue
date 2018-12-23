<template>
<span>
    <f7-popup  color-theme="orange" class="select-coin-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar title="בחר מטבע">
          <f7-nav-right>
            <f7-link popup-close><f7-icon f7="close"></f7-icon></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <form class="searchbar">
          <div class="searchbar-inner">
            <div class="searchbar-input-wrap">
              <input type="search" placeholder="דוגמה:btc/bitcoin" v-model="search">
              <i class="searchbar-icon"></i>
              <span class="input-clear-button"></span>
          </div>
          <span class="searchbar-disable-button">x</span>
          </div>
      </form>
      <f7-block>
          <virtual-list :size="45" :remain="9">
              <f7-button popup-close class="select-btn" outline round v-for="(coin,i) in paginatedData" :value="coin.id" :key="i" @click="selectedAddCoin(coin)" selected>
                  <span class="coin-img-list"><img :src="coin.image" /></span> {{coin.id}}
              </f7-button>
          </virtual-list>
      </f7-block>
    </f7-page>
  </f7-popup>
</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      popupOpened: false,
      search: ""
    };
  },
  methods: {
    selectedAddCoin(coin) {
      this.$emit("selectedUserCoin", coin);
    },
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
.select-btn {
  width: 200px;
  max-width: 100%;
  margin: 10px auto;
  text-align: right;
}

.coin-img-list img {
  width: 25px;
  vertical-align: middle;
  padding-left: 5px;
}
</style>
