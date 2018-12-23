<template>
 <f7-page :page-content="true">
   <f7-navbar title="התיק שלי" ></f7-navbar>
  {{userData}}
  <generic-loader v-show="this.$store.state.loading" />
    <Auth-form v-if="AuthForm" />
    <user-cryptos v-else ></user-cryptos>
  </f7-page>
</template>

<script>
import Auth from "./components/Auth.vue";
import userCryptos from "./components/userCryptos.vue";
import firebase from "firebase";

export default {
  name: "portfolio",
  components: {
    "Auth-form": Auth,
    "user-cryptos": userCryptos
  },
  data() {
    return {
      AuthForm: false,
      title: "",
      user: ""
    };
  },
  created() {
    this.$store.dispatch("userStatus");
  },
  computed: {
    userData() {
      this.user = this.$store.getters.userData;
      if (this.user.email) {
        this.AuthForm = false;
      } else {
        this.AuthForm = true;
      }
    }
  }
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>




