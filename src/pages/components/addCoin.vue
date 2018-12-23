<template>
<div id="add-coin" class="list inline-labels no-hairlines-md">
    <ul>
        <li class="item-content item-input">
            <div class="item-media">
                <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
                <div class="item-title item-label">שם</div>
                <div class="item-input-wrap">
                    <select-coin-list  @selectedUserCoin="selectedAddCoin"/>
                    <f7-button v-if="!selectedCoinList.image"  popup-open=".select-coin-popup"> בחר מטבע</f7-button>
                    <f7-button v-if="selectedCoinList.image"  popup-open=".select-coin-popup">{{selectedCoinList.name}}</f7-button>
                        </div>
                </div>
        </li>
        <li class="item-content item-input">
            <div class="item-media">
                <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
                <div class="item-title item-label">כמות</div>
                <div class="item-input-wrap ">
                    <input type="number" v-model="quantity" class="text-align-center" placeholder="ספרות בלבד" required>
                    <span class="input-clear-button"></span>
                </div>
            </div>
        </li>
        <!-- <li class="item-content item-input">
            <div class="item-media">
                <i class="icon demo-list-icon"></i>
            </div>
            <div class="item-inner">
                <div class="item-title item-label">תאריך</div>
                <div class="item-input-wrap">
                    <input type="date" placeholder="נקנה בתאריך" v-model="date" required>
                    <span class="input-clear-button"></span>
                </div>
            </div>
        </li> -->
    </ul>
    <f7-button @click="addCoin" outline>הוסף</f7-button>
    <h3 v-show="alert" class="text-align-center">{{alertMsg}}</h3>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import selectCoin from "./selectCoin.vue";
export default {
  components: {
    "select-coin-list": selectCoin
  },
  data() {
    return {
      coinName: "",
      quantity: "",
      date: "",
      selectedCoinList: {},
      alert: false,
      alertMsg: "המטבע נוסף בהצלחה לטבלת המטבעות שלך"
    };
  },
  methods: {
    addCoin() {
      //this.$f7router.navigate("/coin/", {});
      // todo - add date by user choose
      let date = new Date();
      let coinName = this.selectedCoinList.symbol.toLowerCase();
      let formatDate = date.toDateString();
      let newCoin = {
        name: coinName,
        quantity: this.quantity,
        date: formatDate
      };
      this.$store.dispatch("addCoin", newCoin).then(r => {
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      });
    },
    selectedAddCoin(value) {
      this.selectedCoinList = value;
    }
  }
};
</script>

<style>
#add-coin {
  max-width: 500px;
  margin: 0 auto;
}
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
.item-input-wrap img {
  width: 25px;
}
h3.text-align-center {
  color: orange;
}
</style>
