<template>
<f7-block inner id="register-form">
    <f7-block>
        <f7-row>
            <f7-col>
                <f7-button outline round @click="AuthForm = 'register'">הירשם</f7-button>
            </f7-col>
            <f7-col>
                <f7-button outline round @click="AuthForm = 'login'">התחבר</f7-button>
            </f7-col>
        </f7-row>
    </f7-block>
    <transition name="slide-fade">

        <div v-show="AuthForm != ''" class="list inline-labels no-hairlines-md">
            <ul>
                <li class="item-content item-input">
                    <div class="item-media">
                        <i class="icon demo-list-icon"></i>
                    </div>
                    <div class="item-inner">
                        <div class="item-title item-label">אימייל</div>
                        <div class="item-input-wrap">
                            <input type="email" v-model="email" placeholder="כתובת האימייל שלך" required>
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-media">
                        <i class="icon demo-list-icon"></i>
                    </div>
                    <div class="item-inner">
                        <div class="item-title item-label">סיסמה</div>
                        <div class="item-input-wrap">
                            <input type="password" v-model="password"  placeholder="הסיסמה שלך" required>
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
            </ul>

            <f7-button fill color="red" class="auth-btn" v-if="AuthForm == 'register'" @click="registerFire">הירשם</f7-button>
            <f7-button fill color="green" class="auth-btn" v-if="AuthForm == 'login'" @click="loginFire">התחבר</f7-button>
           
        </div>

    </transition>
</f7-block>
</template>

<script>
import firebase from "firebase";
import { db } from "../../firebase.config.js";

export default {
  name: "About",
  data() {
    return {
      AuthForm: "",
      title: "",
      email: "",
      password: ""
    };
  },
  methods: {
    registerFire() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == "auth/weak-password") {
            alert("סיסמה חלשה מדי");
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        })
        .then(r => {
          this.$store.commit("SET_USER", r);
        });
    },
    loginFire() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        })
        .then(r => {
          this.$store.commit("SET_USER", r);
        });
    }
  }
};
</script>

<style>
#register-form {
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
}

#register-form input {
  text-align: center;
}

.auth-btn {
  width: 100px;
  margin: 0 auto;
}
</style>
