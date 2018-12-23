import firebase from "firebase";
import { db } from "../firebase.config.js";
export const FireBaseStore = {
  state: { user: {}, userCoins: [], loading: false },
  getters: {
    userData: state => {
      return state.user;
    },
    get_user_Coins: state => {
      return state.userCoins;
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.loading = false;
      state.user = user;
    },
    SET_USER_COINS(state, userCoins) {
      state.userCoins = userCoins;
    }
  },
  actions: {
    //catach login user
    userStatus({ commit, state }) {
      state.loading = true;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log(user);
          commit("SET_USER", user);
        } else {
          commit("SET_USER", {});
          // No user is signed in.
        }
      });
    },
    userCoinList({ commit, state }) {
      //catch user coin list from firebase
      db.ref("users/" + state.user.uid + "/coins").on("value", snap => {
        if (snap.val() != null) {
          commit("SET_USER_COINS", snap.val());
        } else {
          commit("SET_USER_COINS", []);
        }
      });
    },
    addCoin({ getters, dispatch }, newCoin) {
      //add a new coin to the user list of coins in case the coin not already exists
      dispatch("updateUserCoin", newCoin).then(coin => {
        if (coin.length == 0) {
          // in case user coins list is empty
          getters.get_user_Coins.push(newCoin);
          //     console.log(getters.get_user_Coins, "push new coin");
          db.ref("users/" + getters.userData.uid + "/coins").set(
            getters.get_user_Coins
          );
        }
      });
    },
    updateUserCoin({ getters }, coinUpdate) {
      return getters.get_user_Coins.filter((coin, i) => {
        if (coin.name == coinUpdate.name) {
          //set a new quantity
          coinUpdate.quantity =
            Number(coin.quantity) + Number(coinUpdate.quantity);
          db.ref("users/" + getters.userData.uid + "/coins/" + [i]).update(
            coinUpdate
          );
          return coin.name == coinUpdate.name;
        }
      });
    },
    deleteUserCoin({ getters }, deleteCoin) {
      let updateList = getters.get_user_Coins.filter(coin => {
        return coin.name != deleteCoin.symbol;
      });
      db.ref("users/" + getters.userData.uid + "/coins").set(updateList);
    }
  }
};
