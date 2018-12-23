import { RestAPI } from "../pages/components/service/RestAPI.js";
export const localFunc = {
  state: {
    coin: {},
    coins: [],
    globalData: [],
    coinResourse:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    globalResourse: "https://api.coingecko.com/api/v3/global",
    loading: false
  },
  getters: {
    loader: state => {
      return state.loading;
    },
    getFullCoinList: state => {
      let coinList = state.coins;
      return coinList;
    },
    getGlobal: state => {
      let gloablHeader = {
        total_market_cap:
          state.globalData.total_market_cap === undefined
            ? ""
            : Number(state.globalData.total_market_cap.usd).toLocaleString(),
        total_volume:
          state.globalData.total_volume === undefined
            ? ""
            : Number(state.globalData.total_volume.usd).toLocaleString(),
        market_cap_percentage:
          state.globalData.market_cap_percentage === undefined
            ? ""
            : state.globalData.market_cap_percentage.btc.toLocaleString(),
        active_cryptocurrencies: state.globalData.active_cryptocurrencies
      };
      return gloablHeader;
    },
    coinRefactor: state => {
      if (Object.keys(state.coin).length !== 0) {
        let coinRef = {
          name: state.coin.name,
          id: state.coin.id,
          current_price: state.coin.current_price.toFixed(3),
          image: state.coin.image,
          price_change_percentage_24h: state.coin.price_change_percentage_24h,
          market_cap: Number(state.coin.market_cap.toFixed(0)).toLocaleString(),
          total_volume: Number(
            state.coin.total_volume.toFixed(0)
          ).toLocaleString(),
          circulating_supply: Number(
            state.coin.circulating_supply
          ).toLocaleString(),
          ath: Number(state.coin.ath).toLocaleString(),
          ath_change_percentage: Number(
            state.coin.ath_change_percentage
          ).toLocaleString(),
          ath_date: state.coin.ath_date.toLocaleString().split("T")[0]
        };
        return coinRef;
      }
    }
  },
  actions: {
    loadGlobalData({ commit, state }) {
      state.loading = true;
      RestAPI.getData(state.globalResourse)
        .then(r => r.data.data)
        .then(globalData => {
          commit("SET_GLOBAL", globalData);
        });
    },
    loadCoins({ commit, state }) {
      state.loading = true;
      RestAPI.getData(state.coinResourse)
        .then(r => r.data)
        .then(coins => {
          commit("SET_COINS", coins);
        });
    }
  },
  mutations: {
    SET_GLOBAL(state, globalData) {
      state.loading = false;
      state.globalData = globalData;
    },
    SET_COINS(state, coins) {
      state.loading = false;
      state.coins = coins;
    },
    SELECTED_COIN(state, coin) {
      state.coin = coin;
    }
  }
};
