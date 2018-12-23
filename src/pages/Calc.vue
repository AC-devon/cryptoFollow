<template>
<f7-page :page-content="true">
    <f7-navbar title="מחשבון"></f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-header>מחשבון המרה</f7-block-header>
    <f7-block strong v-show="guide">
        <p>בעמוד הזה אפשר לקבל שער המרה מדויק ויחסי בין 2 מטבעות.<br>כל שעליך לעשות הוא לעקוב אחר השלבים הבאים:
      </p>
            <ul>
                <li> לחץ על הכפתור לחיצה(<font-awesome-icon icon="hand-pointer" />) והתחל להקליד את המטבע המבוקש</li>
                <li> לאחר מכן תצטרך לבחור את המטבע השני שאותו תרצה להשוות</li>
                <li> אחרי בחירת 2 המטבעות תלחץ על השדה העליון כדי להקיש את המספר אותו אתה מבקש להמיר  </li>
                <li> ואז תוכל לראות כי באופן אוטומטי תקבל את שער ההמרה </li>
            </ul>
            <f7-button big small @click="guide = false">סגור מדריך</f7-button>
    </f7-block>
    
    <f7-block inner>
<calc-coin-list @coinData="selectedCoin"/>
        <f7-list id="Exchange" no-hairlines-md class="text-align-center">
            <f7-list-item class="flex">

              <!-- coinGroup = 'a' -->
                <f7-button raised popup-open=".coin-popup" @click="coinGroup = 'a'" id="select-coin-btn">
                    <font-awesome-icon v-if="!coinA.image" icon="hand-pointer" />
                    <img :src="coinA.image" v-if="coinA.image">
                </f7-button>
                    <div class="item-input-wrap">
                        <input type="number" v-on:keyup="calc" v-model="calculator" >
                        <span class="input-clear-button" @click="calcResult = 0"></span>
                    </div>

            </f7-list-item>
            <f7-list-item id="mid-item">
                <font-awesome-icon id="exchange-icon" icon="exchange-alt" />
            </f7-list-item>
            <f7-list-item class="flex">
                <f7-button raised popup-open=".coin-popup" @click="coinGroup = 'b' " id="select-coin-btn">
                    <font-awesome-icon v-if="!coinB.image" icon="hand-pointer" />
                    <img :src="coinB.image" v-if="coinB.image">
                </f7-button>
                    <div class="item-input-wrap">
                        <input type="number" :value="calcResult">
                        <span class="input-clear-button"></span>
                    </div>

            </f7-list-item>
        </f7-list>
    </f7-block>
</f7-page>
</template>

<script>
import calcCoinList from "./components/calcCoinList.vue";
export default {
  name: "Calc",
  components: {
    "calc-coin-list": calcCoinList
  },
  data() {
    return {
      callType: "",
      calculator: "",
      calcResult: 0,
      coinGroup: "",
      guide: true,
      coinA: {},
      coinB: {}
    };
  },
  methods: {
    calc(e) {
      this.calcResult =
        (this.calculator * this.coinA.current_price) / this.coinB.current_price;
    },

    // selected coin from child component
    selectedCoin(value) {
      if (this.coinGroup == "a") {
        this.coinA = value;
      } else {
        this.coinB = value;
      }
    }
  }
};
</script>

<style>
.flex {
  display: flex;
}

.md .item-input .item-inner {
  display: inline-flex;
}

#select-coin-btn {
  margin-left: 15px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#select-coin-btn img {
  width: 25px;
}

#Exchange {
  width: 300px;
  margin: 0 auto;
}

#Exchange input {
  text-align: center;
}

#mid-item {
  text-align: center;
}

#exchange-icon {
  transform: rotate(90deg);
  width: 100%;
}
</style>
