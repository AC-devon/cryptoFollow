<template>
<f7-page :page-content="false">
   <!-- header data -->
    <f7-navbar>
      <div class="pointer" @click="reload"><font-awesome-icon icon="sync" /></div>
        <main class="text-align-center">
            <generic-loader v-if="this.$store.getters.loader" />
            <span id="generic-data-wrap"  v-else>
          <div class="pad-nav">
              <div  >שווי שוק:<strong> ${{globalData.total_market_cap}}</strong> </div>
              <div>ווליום:<strong >${{globalData.total_volume}}</strong> </div>
          </div>
          <div class="pad-nav">
              <div>דומיננטיות הביטקוין:<strong>%{{globalData.market_cap_percentage}}</strong> </div>
              <div>כמות מטבעות בשוק:<strong>{{globalData.active_cryptocurrencies}}</strong></div>
          </div>
        </span>
        </main>
    </f7-navbar>
    
 <f7-tabs  id="center-contet">
        <f7-tab id="tab-1" class="page-content" tab-active>
            <ppTable />
        </f7-tab>
        <f7-tab id="tab-2" class="page-content">
            <Portfolio />
        </f7-tab>
        <f7-tab id="tab-3" class="page-content">
            <Calc />
        </f7-tab>
    </f7-tabs>

    <f7-toolbar tabbar labels :bottom-md="isBottom">
        <f7-link tab-link="#tab-1"  tab-link-active>
            <f7-icon f7="graph_round"></f7-icon> רשימת מטבעות
        </f7-link>
        <f7-link  tab-link="#tab-2"  >
            <f7-icon f7="briefcase"></f7-icon> התיק שלי
        </f7-link>
        <f7-link tab-link="#tab-3"  >
            <f7-icon f7="money_dollar"></f7-icon> מחשבון
        </f7-link>
    </f7-toolbar>
</f7-page>
</template>

<script>
// get page components
import coinTable from "./coinTable.vue";
import Portfolio from "./Portfolio.vue";
import Calc from "./Calc.vue";

export default {
  name: "Tabs",
  components: {
    ppTable: coinTable,
    Portfolio: Portfolio,
    Calc: Calc
  },
  data() {
    return {
      isBottom: this.$f7.width > 1024 ? false : true
    };
  },
  methods: {
    reload(event, done) {
      this.$store.dispatch("loadCoins");
    }
  },
  created() {
    this.$store.dispatch("loadGlobalData");
  },
  computed: {
    globalData() {
      return this.$store.getters.getGlobal;
    },
    isiOS() {
      return this.$theme.ios;
    },
    isMaterial() {
      return this.$theme.material;
    }
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
  position: absolute;
  right: 3%;
}
main.text-align-center {
  width: 100%;
  font-size: 13px;
}

.pad-nav {
  display: inline-block;
  padding: 0 3%;
}

@media only screen and (max-width: 600px) {
  main.text-align-center {
    font-size: 10px;
  }
}
</style>
