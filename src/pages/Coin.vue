<template>
<f7-page>
    <f7-navbar id="flex-space" :title="coinData.name">
        <div id="go-back">
            <f7-link @click="$f7router.back()">
                <font-awesome-icon icon="arrow-left" />
            </f7-link>
        </div>
    </f7-navbar>
    <f7-block>
        
        <div id="coin-block">
            <div id="coin-head">
                <div id="coin-cur-price">
                    <div id="cur-price">${{coinData.current_price}}</div>
                    <div id="last-update-price" v-text="new Date().toLocaleString('heb-IL', { timeZone: 'Asia/Jerusalem' })"></div>
                </div>
                <div id="coin-image"><img :src="coinData.image"/></div>
                </div>
                <div id="coin-chart">
                    <!-- <Chart v-bind:coinChart="coinChart" v-if="coinChart !== null"/> -->
                </div>
                <div id="coin-body">
                    <div class="card data-table">

                        <div class="card-content">
                            <table>

                                <tbody>

                                    <tr>
                                        <th class="data-table-title">נתונים עדכניים</th>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">מחיר</td>
                                        <td class="numeric-cell">${{coinData.current_price}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">%(24 שעות)</td>
                                        <td class="numeric-cell ltr" :class="{green: coinData.price_change_percentage_24h > 0, red:coinData.price_change_percentage_24h < 0}">
                                            {{coinData.price_change_percentage_24h.toFixed(2)}}%</td>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">שווי שוק</td>
                                        <td class="numeric-cell">${{coinData.market_cap}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">ווליום <small>(24 שעות)</small></td>
                                        <td class="numeric-cell">${{coinData.total_volume}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">כמות מטבעות נוכחית</td>
                                        <td class="numeric-cell">{{coinData.circulating_supply}}</td>
                                    </tr>
                                    <tr>
                                        <th class="data-table-title">נתוני עבר</th>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">מחיר יחידה מקסימלי בכל הזמנים</td>
                                        <td class="numeric-cell">
                                            ${{coinData.ath}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">שינוי מהמחיר הגבוה בכל הזמנים</td>
                                        <td class="numeric-cell ltr" :class="{green: coinData.ath_change_percentage > 0, red:coinData.ath_change_percentage < 0}">
                                            {{coinData.ath_change_percentage}}%</td>
                                    </tr>
                                    <tr>
                                        <td class="label-cell">בתאריך</td>
                                        <td class="numeric-cell"> {{ coinData.ath_date}}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </f7-block>
</f7-page>
</template>

<script>
import { RestAPI } from "./components/service/RestAPI.js";

import Chart from "./components/Chart.vue";
export default {
  name: "Coin",
  components: {
    Chart: Chart
  },
  data() {
    return {
      coinData: this.$store.getters.coinRefactor,
      coinChart: null,
      days: 1,
      chartApi: "https://api.coingecko.com/api/v3/coins/"
    };
  },
  methods: {
    chartData() {
      RestAPI.getData(
        this.chartApi +
          this.coinData.id +
          "/market_chart?vs_currency=usd&days=" +
          this.days
      ).then(r => {
        this.coinChart = r;
        console.log(this.coinChart);
      }); //.catch(e){}
    }
  },
  created() {
    this.chartData();
  }
};
</script>

<style>
.ltr {
  direction: ltr;
}

data-collapsible-title {
  display: none;
}

/* header page style*/
#flex-space .navbar-inner {
  justify-content: space-between;
}

/* end of header page style*/

/* coin block style*/
th {
  color: #2196f3;
}

#coin-head {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#cur-price {
  font-size: 28px;
}

#coin-image img {
  max-width: 60px;
}

.label-cell small {
  font-size: 10px;
}

/* end of coin block style*/
</style>
