/* eslint-disable no-unused-vars */
// Import Vue
import Vue from "vue";
import VueFire from "vuefire";
import { store } from "./store/store.js";

// Import F7
import Framework7 from "framework7/dist/framework7.esm.bundle.js";

// Import F7 Vue Plugin
import Framework7Vue from "framework7-vue/dist/framework7-vue.esm.bundle.js";

// Import F7 Styles
import Framework7Styles from "framework7/dist/css/framework7.css";
import Framework7StylesRTL from "framework7/dist/css/framework7.rtl.md.min.css";

// Import Icons and App Custom Styles
import IconsStyles from "./css/icons.css";
import AppStyles from "./css/app.css";
import framework7Icons from "framework7-icons/css/framework7-icons.css";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSync,
  faTable,
  faPlus,
  faArrowLeft,
  faExchangeAlt,
  faHandPointer
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//global usefull components
import Loader from "./pages/components/Loader";
import virtualList from "vue-virtual-scroll-list";
import { initAd, showAd } from "./adMob";

// Import Routes
import Routes from "./routes.js";

// Import App Component
import App from "./app";

// Init F7 Vue Plugin
library.add(faSync, faExchangeAlt, faArrowLeft, faHandPointer, faTable, faPlus);
Vue.use(Framework7Vue, Framework7, VueFire);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("generic-loader", Loader);
Vue.component("virtual-list", virtualList);

Vue.config.productionTip = false;
// Init App
const baseApp = new Vue({
  el: "#app",
  template: "<app/>",
  store,
  // Init Framework7 by passing parameters here
  framework7: {
    rtl: true,
    id: "io.framework7.testapp", // App bundle ID
    name: "Framework7", // App name
    theme: "auto", // Automatic theme detection
    // App routes
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  },
  mounted() {
    alert("mounted");
    document.addEventListener("deviceready", () => {
      alert("device ready");
      // initAd();
      // showAd();
    });
  }
});
