webpackJsonp([1],{"6epb":function(t,e){},AEln:function(t,e){},ANVS:function(t,e){},"CXp/":function(t,e){},Ldfw:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("1mcD"),s=a.n(n),o=a("NYxO"),r=a("fZjL"),c=a.n(r),l=a("mtWM"),u=a.n(l),d=function(t){return u.a.get(t).then(function(t){return t}).catch(function(t){console.log(t)})},v={state:{coin:{},coins:[],globalData:[],coinResourse:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",globalResourse:"https://api.coingecko.com/api/v3/global",loading:!1},getters:{loader:function(t){return t.loading},getFullCoinList:function(t){return t.coins},getGlobal:function(t){return{total_market_cap:void 0===t.globalData.total_market_cap?"":Number(t.globalData.total_market_cap.usd).toLocaleString(),total_volume:void 0===t.globalData.total_volume?"":Number(t.globalData.total_volume.usd).toLocaleString(),market_cap_percentage:void 0===t.globalData.market_cap_percentage?"":t.globalData.market_cap_percentage.btc.toLocaleString(),active_cryptocurrencies:t.globalData.active_cryptocurrencies}},coinRefactor:function(t){if(0!==c()(t.coin).length)return{name:t.coin.name,id:t.coin.id,current_price:t.coin.current_price.toFixed(3),image:t.coin.image,price_change_percentage_24h:t.coin.price_change_percentage_24h,market_cap:Number(t.coin.market_cap.toFixed(0)).toLocaleString(),total_volume:Number(t.coin.total_volume.toFixed(0)).toLocaleString(),circulating_supply:Number(t.coin.circulating_supply).toLocaleString(),ath:Number(t.coin.ath).toLocaleString(),ath_change_percentage:Number(t.coin.ath_change_percentage).toLocaleString(),ath_date:t.coin.ath_date.toLocaleString().split("T")[0]}}},actions:{loadGlobalData:function(t){var e=t.commit,a=t.state;a.loading=!0,d(a.globalResourse).then(function(t){return t.data.data}).then(function(t){e("SET_GLOBAL",t)})},loadCoins:function(t){var e=t.commit,a=t.state;a.loading=!0,d(a.coinResourse).then(function(t){return t.data}).then(function(t){e("SET_COINS",t)})}},mutations:{SET_GLOBAL:function(t,e){t.loading=!1,t.globalData=e},SET_COINS:function(t,e){t.loading=!1,t.coins=e},SELECTED_COIN:function(t,e){t.coin=e}}},p=a("kxiW"),m=a.n(p),_=Object(p.initializeApp)({apiKey:"AIzaSyAbRn6SitPdOY_O3d-VBX8VFakZLSWOah4",authDomain:"crypto-follow-2c41d.firebaseapp.com",databaseURL:"https://crypto-follow-2c41d.firebaseio.com",projectId:"crypto-follow-2c41d",storageBucket:"",messagingSenderId:"946754474156"}).database(),f={state:{user:{},userCoins:[],loading:!1},getters:{userData:function(t){return t.user},get_user_Coins:function(t){return t.userCoins}},mutations:{SET_USER:function(t,e){t.loading=!1,t.user=e},SET_USER_COINS:function(t,e){t.userCoins=e}},actions:{userStatus:function(t){var e=t.commit;t.state.loading=!0,m.a.auth().onAuthStateChanged(function(t){t?(console.log(t),e("SET_USER",t)):e("SET_USER",{})})},userCoinList:function(t){var e=t.commit,a=t.state;_.ref("users/"+a.user.uid+"/coins").on("value",function(t){null!=t.val()?e("SET_USER_COINS",t.val()):e("SET_USER_COINS",[])})},addCoin:function(t,e){var a=t.getters;(0,t.dispatch)("updateUserCoin",e).then(function(t){0==t.length&&(a.get_user_Coins.push(e),_.ref("users/"+a.userData.uid+"/coins").set(a.get_user_Coins))})},updateUserCoin:function(t,e){var a=t.getters;return a.get_user_Coins.filter(function(t,i){if(t.name==e.name)return e.quantity=Number(t.quantity)+Number(e.quantity),_.ref("users/"+a.userData.uid+"/coins/"+[i]).update(e),t.name==e.name})},deleteUserCoin:function(t,e){var a=t.getters,i=a.get_user_Coins.filter(function(t){return t.name!=e.symbol});_.ref("users/"+a.userData.uid+"/coins").set(i)}}};i.default.use(o.a);var h=new o.a.Store({modules:{localFunc:v,FireBaseStore:f}}),g=a("j5iW"),b=a("8OAG"),C=(a("wj+B"),a("ANVS"),a("VC+z"),a("VXnA"),a("Xmaz"),a("C/JF")),w=a("fhbW"),k=a("U0v6"),y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-block",{staticClass:"text-align-center"},[e("f7-preloader",{attrs:{color:"multi"}})],1)},staticRenderFns:[]};var D=a("VU/8")({name:"loader"},y,!1,function(t){a("AEln")},"data-v-4bfd0ad2",null).exports,x=a("G7bx"),L=a.n(x);var $=a("Dd8w"),F=a.n($),S={name:"coinTable",data:function(){return{search:""}},methods:{goCoinPage:function(t){this.$store.commit("SELECTED_COIN",t),this.$f7router.navigate("/coin/",{})},filterCoinList:function(){var t=this;return this.getFullCoinList.filter(function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>=0||e.symbol.toLowerCase().indexOf(t.search.toLowerCase())>=0})}},created:function(){this.$store.dispatch("loadCoins")},computed:F()({},Object(o.b)(["getFullCoinList"]),{paginatedData:function(){return""!=this.search?this.filterCoinList():this.getFullCoinList}})},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{attrs:{id:"coin-table-wrap","page-content":!0}},[a("div",{staticClass:"searchbar-backdrop"}),t._v(" "),a("form",{staticClass:"searchbar"},[a("div",{staticClass:"searchbar-inner"},[a("div",{staticClass:"searchbar-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"search",placeholder:"דוגמה:btc/bitcoin"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),a("i",{staticClass:"searchbar-icon"}),t._v(" "),a("span",{staticClass:"input-clear-button"})]),t._v(" "),a("span",{staticClass:"searchbar-disable-button"},[t._v("Cancel")])])]),t._v(" "),a("div",{staticClass:"card data-table ",attrs:{id:"v-list"}},[a("div",{attrs:{id:"v-head"}},[a("div",{staticClass:"v-head-titles numeric-cell"},[t._v("#")]),t._v(" "),a("div",{staticClass:"v-head-titles label-cell"},[t._v("שם")]),t._v(" "),a("div",{staticClass:"v-head-titles numeric-cell"},[t._v("%(24 שעות)")]),t._v(" "),a("div",{staticClass:"v-head-titles numeric-cell"},[t._v("מחיר")])]),t._v(" "),a("generic-loader",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters.loader,expression:"this.$store.getters.loader"}]}),t._v(" "),a("virtual-list",{attrs:{size:42,remain:10}},t._l(t.paginatedData,function(e,i){return a("div",{key:i,attrs:{id:"v-body"},on:{click:function(a){t.goCoinPage(e)}}},[a("div",{staticClass:"v-body-items numeric-cell"},[t._v(t._s(i+1))]),t._v(" "),a("div",{staticClass:"v-body-items label-celll coinImg"},[a("div",{staticClass:"coinName-plus-img"},[a("img",{attrs:{src:e.image}}),t._v(" "),a("div",[t._v(t._s(e.name))])])]),t._v(" "),a("div",{staticClass:"v-body-items numeric-cell precentage",class:{green:e.price_change_percentage_24h>0,red:e.price_change_percentage_24h<0}},[t._v("\r\n                    "+t._s(Number(e.price_change_percentage_24h).toFixed(2))+"%\r\n                ")]),t._v(" "),a("div",{staticClass:" v-body-items numeric-cell"},[t._v("$"+t._s(Number(e.current_price).toFixed(2)))])])}))],1)])},staticRenderFns:[]};var E=a("VU/8")(S,A,!1,function(t){a("mQpJ")},null,null).exports,N={name:"About",data:function(){return{AuthForm:"",title:"",email:"",password:""}},methods:{registerFire:function(){var t=this;m.a.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(t){var e=t.code,a=t.message;"auth/weak-password"==e?alert("סיסמה חלשה מדי"):alert(a),console.log(t)}).then(function(e){t.$store.commit("SET_USER",e)})},loginFire:function(){var t=this;m.a.auth().signInWithEmailAndPassword(this.email,this.password).catch(function(t){t.code,t.message}).then(function(e){t.$store.commit("SET_USER",e)})}}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-block",{attrs:{inner:"",id:"register-form"}},[a("f7-block",[a("f7-row",[a("f7-col",[a("f7-button",{attrs:{outline:"",round:""},on:{click:function(e){t.AuthForm="register"}}},[t._v("הירשם")])],1),t._v(" "),a("f7-col",[a("f7-button",{attrs:{outline:"",round:""},on:{click:function(e){t.AuthForm="login"}}},[t._v("התחבר")])],1)],1)],1),t._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.AuthForm,expression:"AuthForm != ''"}],staticClass:"list inline-labels no-hairlines-md"},[a("ul",[a("li",{staticClass:"item-content item-input"},[a("div",{staticClass:"item-media"},[a("i",{staticClass:"icon demo-list-icon"})]),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("אימייל")]),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"כתובת האימייל שלך",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("span",{staticClass:"input-clear-button"})])])]),t._v(" "),a("li",{staticClass:"item-content item-input"},[a("div",{staticClass:"item-media"},[a("i",{staticClass:"icon demo-list-icon"})]),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("סיסמה")]),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"הסיסמה שלך",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("span",{staticClass:"input-clear-button"})])])])]),t._v(" "),"register"==t.AuthForm?a("f7-button",{staticClass:"auth-btn",attrs:{fill:"",color:"red"},on:{click:t.registerFire}},[t._v("הירשם")]):t._e(),t._v(" "),"login"==t.AuthForm?a("f7-button",{staticClass:"auth-btn",attrs:{fill:"",color:"green"},on:{click:t.loginFire}},[t._v("התחבר")]):t._e()],1)])],1)},staticRenderFns:[]};var R=a("VU/8")(N,O,!1,function(t){a("q+RN")},null,null).exports,U={data:function(){return{popupOpened:!1,search:""}},methods:{selectedAddCoin:function(t){this.$emit("selectedUserCoin",t)},filterCoinList:function(){var t=this;return this.getFullCoinList.filter(function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>=0||e.symbol.toLowerCase().indexOf(t.search.toLowerCase())>=0})}},computed:F()({},Object(o.b)(["getFullCoinList"]),{paginatedData:function(){return""!=this.search?this.filterCoinList():this.getFullCoinList}})},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("f7-popup",{staticClass:"select-coin-popup",attrs:{"color-theme":"orange",opened:t.popupOpened},on:{"popup:closed":function(e){t.popupOpened=!1}}},[a("f7-page",[a("f7-navbar",{attrs:{title:"בחר מטבע"}},[a("f7-nav-right",[a("f7-link",{attrs:{"popup-close":""}},[a("f7-icon",{attrs:{f7:"close"}})],1)],1)],1),t._v(" "),a("form",{staticClass:"searchbar"},[a("div",{staticClass:"searchbar-inner"},[a("div",{staticClass:"searchbar-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"search",placeholder:"דוגמה:btc/bitcoin"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),a("i",{staticClass:"searchbar-icon"}),t._v(" "),a("span",{staticClass:"input-clear-button"})]),t._v(" "),a("span",{staticClass:"searchbar-disable-button"},[t._v("x")])])]),t._v(" "),a("f7-block",[a("virtual-list",{attrs:{size:45,remain:9}},t._l(t.paginatedData,function(e,i){return a("f7-button",{key:i,staticClass:"select-btn",attrs:{"popup-close":"",outline:"",round:"",value:e.id,selected:""},on:{click:function(a){t.selectedAddCoin(e)}}},[a("span",{staticClass:"coin-img-list"},[a("img",{attrs:{src:e.image}})]),t._v(" "+t._s(e.id)+"\r\n              ")])}))],1)],1)],1)],1)},staticRenderFns:[]};var T={components:{"select-coin-list":a("VU/8")(U,B,!1,function(t){a("CXp/")},null,null).exports},data:function(){return{coinName:"",quantity:"",date:"",selectedCoinList:{},alert:!1,alertMsg:"המטבע נוסף בהצלחה לטבלת המטבעות שלך"}},methods:{addCoin:function(){var t=this,e=new Date,a=this.selectedCoinList.symbol.toLowerCase(),i=e.toDateString(),n={name:a,quantity:this.quantity,date:i};this.$store.dispatch("addCoin",n).then(function(e){t.alert=!0,setTimeout(function(){t.alert=!1},3e3)})},selectedAddCoin:function(t){this.selectedCoinList=t}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list inline-labels no-hairlines-md",attrs:{id:"add-coin"}},[a("ul",[a("li",{staticClass:"item-content item-input"},[t._m(0),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("שם")]),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("select-coin-list",{on:{selectedUserCoin:t.selectedAddCoin}}),t._v(" "),t.selectedCoinList.image?t._e():a("f7-button",{attrs:{"popup-open":".select-coin-popup"}},[t._v(" בחר מטבע")]),t._v(" "),t.selectedCoinList.image?a("f7-button",{attrs:{"popup-open":".select-coin-popup"}},[t._v(t._s(t.selectedCoinList.name))]):t._e()],1)])]),t._v(" "),a("li",{staticClass:"item-content item-input"},[t._m(1),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("כמות")]),t._v(" "),a("div",{staticClass:"item-input-wrap "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"text-align-center",attrs:{type:"number",placeholder:"ספרות בלבד",required:""},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),t._v(" "),a("span",{staticClass:"input-clear-button"})])])])]),t._v(" "),a("f7-button",{attrs:{outline:""},on:{click:t.addCoin}},[t._v("הוסף")]),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.alert,expression:"alert"}],staticClass:"text-align-center"},[t._v(t._s(t.alertMsg))])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-media"},[e("i",{staticClass:"icon demo-list-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-media"},[e("i",{staticClass:"icon demo-list-icon"})])}]};var V={components:{"add-coin":a("VU/8")(T,q,!1,function(t){a("Xzol")},null,null).exports},data:function(){return{showByIndex:null,sumOfAllCoins:0,isBottom:!0,coinName:"",quantity:"",selectedCoin:{},coinsData:[]}},methods:{deleteCoin:function(t,e){this.$store.dispatch("deleteUserCoin",t)},refactorUserData:function(){var t=this,e=[];return console.log(this.get_user_Coins),this.getFullCoinList.filter(function(a){return t.get_user_Coins.filter(function(t){a.symbol==t.name&&e.push({name:a.name,symbol:a.symbol,price:a.current_price,quantity:t.quantity,total:t.quantity*a.current_price,image:a.image})})}),this.sumOfAllCoins=0,e.map(function(e){t.sumOfAllCoins+=Number(e.total)}),this.coinsData=e,console.log(e,"coin data"),this.coinsData}},created:function(){this.$store.dispatch("userCoinList")},computed:F()({},Object(o.b)(["getFullCoinList","userData","get_user_Coins"]),{coinsList:function(){return this.refactorUserData()}})},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{attrs:{inner:"","page-content":!0}},[a("f7-block",{attrs:{id:"user-menu",inner:""}},[a("f7-link",{attrs:{"tab-link":"#showTable","tab-link-active":""}},[a("font-awesome-icon",{attrs:{icon:"table"}})],1),t._v(" "),a("f7-link",{attrs:{"tab-link":"#addCoin"}},[a("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1),t._v(" "),a("f7-tabs",{attrs:{animated:"",id:"tabs-wrap"}},[a("f7-tab",{attrs:{id:"showTable","tab-active":""}},[a("h2",{attrs:{id:"sum-of-all-coins"}},[t._v("$"+t._s(this.sumOfAllCoins.toFixed(2)))]),t._v(" "),a("div",{staticClass:"card data-table ",attrs:{id:"v-list"}},[a("div",{attrs:{id:"v-head"}},[a("div",{staticClass:"v-head-titles numeric-cell"},[t._v("שם")]),t._v(" "),a("div",{staticClass:"v-head-titles label-cell"},[t._v("ערך")]),t._v(" "),a("div",{staticClass:"v-head-titles numeric-cell"},[t._v("רווח/הפסד")]),t._v(" "),a("div",{staticClass:"v-head-titles numeric-cell"},[t._v("מחיר")]),t._v(" "),a("div",{staticClass:"v-head-titles numeric-cell"},[t._v("מחק")])]),t._v(" "),t._l(t.coinsList,function(e,i){return a("div",{key:i,class:{"hover-on":t.showByIndex===i},attrs:{id:"v-body"},on:{mouseover:function(e){t.showByIndex=i},mouseout:function(e){t.showByIndex=null}}},[a("div",{staticClass:"v-body-items-user numeric-cell"},[t._v(t._s(e.name)),a("br"),a("img",{staticClass:"table-img",attrs:{src:e.image}})]),t._v(" "),a("div",{staticClass:"v-body-items-user label-celll"},[a("div",[t._v("$"+t._s(Number(e.total).toFixed(2)))]),t._v(" "),a("div",{staticClass:"text-color-orange"},[t._v(t._s(e.quantity))])]),t._v(" "),a("div",{staticClass:"v-body-items-user numeric-cell precentage",class:{green:e.price_change_percentage_24h>0,red:e.price_change_percentage_24h<0}},[t._v("\r\n                            בקרוב...\r\n                        ")]),t._v(" "),a("div",{staticClass:" v-body-items-user numeric-cell"},[t._v("$"+t._s(Number(e.price).toFixed(2)))]),t._v(" "),a("div",{staticClass:"v-body-items-user v-body-edit"},[a("f7-chip",{attrs:{deleteable:""},on:{click:function(a){t.deleteCoin(e,i)}}})],1)])})],2)]),t._v(" "),a("f7-tab",{attrs:{id:"addCoin"}},[a("f7-block",[a("add-coin")],1)],1)],1)],1)},staticRenderFns:[]};var P={name:"portfolio",components:{"Auth-form":R,"user-cryptos":a("VU/8")(V,I,!1,function(t){a("Ldfw")},null,null).exports},data:function(){return{AuthForm:!1,title:"",user:""}},created:function(){this.$store.dispatch("userStatus")},computed:{userData:function(){this.user=this.$store.getters.userData,this.user.email?this.AuthForm=!1:this.AuthForm=!0}}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",{attrs:{"page-content":!0}},[e("f7-navbar",{attrs:{title:"התיק שלי"}}),this._v("\n "+this._s(this.userData)+"\n "),e("generic-loader",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.loading,expression:"this.$store.state.loading"}]}),this._v(" "),this.AuthForm?e("Auth-form"):e("user-cryptos")],1)},staticRenderFns:[]};var G=a("VU/8")(P,j,!1,function(t){a("w2cG")},null,null).exports,z={data:function(){return{popupOpened:!1,search:""}},methods:{selectedCoin:function(t){this.$emit("coinData",t)},filterCoinList:function(){var t=this;return this.getFullCoinList.filter(function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>=0||e.symbol.toLowerCase().indexOf(t.search.toLowerCase())>=0})}},computed:F()({},Object(o.b)(["getFullCoinList"]),{paginatedData:function(){return""!=this.search?this.filterCoinList():this.getFullCoinList}})},X={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-popup",{staticClass:"coin-popup",attrs:{"color-theme":"orange",opened:t.popupOpened},on:{"popup:closed":function(e){t.popupOpened=!1}}},[a("f7-navbar",{attrs:{id:"flex-space"}},[a("div",{attrs:{id:"go-back"}},[a("f7-link",{on:{click:function(e){t.$f7router.back()}}},[a("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)],1)]),t._v(" "),a("f7-block",[a("form",{staticClass:"searchbar"},[a("div",{staticClass:"searchbar-inner"},[a("div",{staticClass:"searchbar-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"search",placeholder:"דוגמה:btc/bitcoin"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),a("i",{staticClass:"searchbar-icon"}),t._v(" "),a("span",{staticClass:"input-clear-button"})]),t._v(" "),a("span",{staticClass:"searchbar-disable-button"},[t._v("Cancel")])])]),t._v(" "),a("f7-block",[a("virtual-list",{attrs:{size:45,remain:9}},t._l(t.paginatedData,function(e,i){return a("f7-button",{key:i,staticClass:"select-btn",attrs:{"popup-close":"",outline:"",round:"",value:e.id,selected:""},on:{click:function(a){t.selectedCoin(e)}}},[a("span",{staticClass:"coin-img-list"},[a("img",{attrs:{src:e.image}})]),t._v(" "+t._s(e.id)+"\r\n              ")])}))],1)],1)],1)},staticRenderFns:[]};var W={name:"Calc",components:{"calc-coin-list":a("VU/8")(z,X,!1,function(t){a("O3Kk")},null,null).exports},data:function(){return{callType:"",calculator:"",calcResult:0,coinGroup:"",guide:!0,coinA:{},coinB:{}}},methods:{calc:function(t){this.calcResult=this.calculator*this.coinA.current_price/this.coinB.current_price},selectedCoin:function(t){"a"==this.coinGroup?this.coinA=t:this.coinB=t}}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{attrs:{"page-content":!0}},[a("f7-navbar",{attrs:{title:"מחשבון"}}),t._v(" "),a("f7-block-header",[t._v("מחשבון המרה")]),t._v(" "),a("f7-block",{directives:[{name:"show",rawName:"v-show",value:t.guide,expression:"guide"}],attrs:{strong:""}},[a("p",[t._v("בעמוד הזה אפשר לקבל שער המרה מדויק ויחסי בין 2 מטבעות."),a("br"),t._v("כל שעליך לעשות הוא לעקוב אחר השלבים הבאים:\n      ")]),t._v(" "),a("ul",[a("li",[t._v(" לחץ על הכפתור לחיצה("),a("font-awesome-icon",{attrs:{icon:"hand-pointer"}}),t._v(") והתחל להקליד את המטבע המבוקש")],1),t._v(" "),a("li",[t._v(" לאחר מכן תצטרך לבחור את המטבע השני שאותו תרצה להשוות")]),t._v(" "),a("li",[t._v(" אחרי בחירת 2 המטבעות תלחץ על השדה העליון כדי להקיש את המספר אותו אתה מבקש להמיר  ")]),t._v(" "),a("li",[t._v(" ואז תוכל לראות כי באופן אוטומטי תקבל את שער ההמרה ")])]),t._v(" "),a("f7-button",{attrs:{big:"",small:""},on:{click:function(e){t.guide=!1}}},[t._v("סגור מדריך")])],1),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("calc-coin-list",{on:{coinData:t.selectedCoin}}),t._v(" "),a("f7-list",{staticClass:"text-align-center",attrs:{id:"Exchange","no-hairlines-md":""}},[a("f7-list-item",{staticClass:"flex"},[a("f7-button",{attrs:{raised:"","popup-open":".coin-popup",id:"select-coin-btn"},on:{click:function(e){t.coinGroup="a"}}},[t.coinA.image?t._e():a("font-awesome-icon",{attrs:{icon:"hand-pointer"}}),t._v(" "),t.coinA.image?a("img",{attrs:{src:t.coinA.image}}):t._e()],1),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.calculator,expression:"calculator"}],attrs:{type:"number"},domProps:{value:t.calculator},on:{keyup:t.calc,input:function(e){e.target.composing||(t.calculator=e.target.value)}}}),t._v(" "),a("span",{staticClass:"input-clear-button",on:{click:function(e){t.calcResult=0}}})])],1),t._v(" "),a("f7-list-item",{attrs:{id:"mid-item"}},[a("font-awesome-icon",{attrs:{id:"exchange-icon",icon:"exchange-alt"}})],1),t._v(" "),a("f7-list-item",{staticClass:"flex"},[a("f7-button",{attrs:{raised:"","popup-open":".coin-popup",id:"select-coin-btn"},on:{click:function(e){t.coinGroup="b"}}},[t.coinB.image?t._e():a("font-awesome-icon",{attrs:{icon:"hand-pointer"}}),t._v(" "),t.coinB.image?a("img",{attrs:{src:t.coinB.image}}):t._e()],1),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("input",{attrs:{type:"number"},domProps:{value:t.calcResult}}),t._v(" "),a("span",{staticClass:"input-clear-button"})])],1)],1)],1)],1)},staticRenderFns:[]};var J={name:"Tabs",components:{ppTable:E,Portfolio:G,Calc:a("VU/8")(W,H,!1,function(t){a("iDxs")},null,null).exports},data:function(){return{isBottom:!(this.$f7.width>1024)}},methods:{reload:function(t,e){this.$store.dispatch("loadCoins")}},created:function(){this.$store.dispatch("loadGlobalData")},computed:{globalData:function(){return this.$store.getters.getGlobal},isiOS:function(){return this.$theme.ios},isMaterial:function(){return this.$theme.material}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{attrs:{"page-content":!1}},[a("f7-navbar",[a("div",{staticClass:"pointer",on:{click:t.reload}},[a("font-awesome-icon",{attrs:{icon:"sync"}})],1),t._v(" "),a("main",{staticClass:"text-align-center"},[this.$store.getters.loader?a("generic-loader"):a("span",{attrs:{id:"generic-data-wrap"}},[a("div",{staticClass:"pad-nav"},[a("div",[t._v("שווי שוק:"),a("strong",[t._v(" $"+t._s(t.globalData.total_market_cap))])]),t._v(" "),a("div",[t._v("ווליום:"),a("strong",[t._v("$"+t._s(t.globalData.total_volume))])])]),t._v(" "),a("div",{staticClass:"pad-nav"},[a("div",[t._v("דומיננטיות הביטקוין:"),a("strong",[t._v("%"+t._s(t.globalData.market_cap_percentage))])]),t._v(" "),a("div",[t._v("כמות מטבעות בשוק:"),a("strong",[t._v(t._s(t.globalData.active_cryptocurrencies))])])])])],1)]),t._v(" "),a("f7-tabs",{attrs:{id:"center-contet"}},[a("f7-tab",{staticClass:"page-content",attrs:{id:"tab-1","tab-active":""}},[a("ppTable")],1),t._v(" "),a("f7-tab",{staticClass:"page-content",attrs:{id:"tab-2"}},[a("Portfolio")],1),t._v(" "),a("f7-tab",{staticClass:"page-content",attrs:{id:"tab-3"}},[a("Calc")],1)],1),t._v(" "),a("f7-toolbar",{attrs:{tabbar:"",labels:"","bottom-md":t.isBottom}},[a("f7-link",{attrs:{"tab-link":"#tab-1","tab-link-active":""}},[a("f7-icon",{attrs:{f7:"graph_round"}}),t._v(" רשימת מטבעות\n        ")],1),t._v(" "),a("f7-link",{attrs:{"tab-link":"#tab-2"}},[a("f7-icon",{attrs:{f7:"briefcase"}}),t._v(" התיק שלי\n        ")],1),t._v(" "),a("f7-link",{attrs:{"tab-link":"#tab-3"}},[a("f7-icon",{attrs:{f7:"money_dollar"}}),t._v(" מחשבון\n        ")],1)],1)],1)},staticRenderFns:[]};var Z={name:"Home",components:{ppHeader:a("VU/8")(J,M,!1,function(t){a("Nn+m")},null,null).exports},data:function(){return{}},created:function(){}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",[e("ppHeader")],1)},staticRenderFns:[]},Q=a("VU/8")(Z,K,!1,null,null,null).exports,Y=a("DZbR"),tt=a("yd7U"),et={props:["coinChart"],data:function(){return{}},computed:{chartData:function(){for(var t=[],e=0;e<this.$props.coinChart.data.prices.length;e++)t.push({x:this.$props.coinChart.data.prices[e][0],y:100});return{sets:[{generators:[Object(Y.svgArea)(),Object(Y.svgLine)(),Object(Y.svgScatter)()],graphs:[{label:"area 1",values:t}]}]}}},components:{ChartAxis:tt.ChartAxis}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chart"},[e("chart-axis",{attrs:{data:this.chartData}})],1)},staticRenderFns:[]};var it={name:"Coin",components:{Chart:a("VU/8")(et,at,!1,function(t){a("cc6C")},"data-v-f6e19a44",null).exports},data:function(){return{coinData:this.$store.getters.coinRefactor,coinChart:null,days:1,chartApi:"https://api.coingecko.com/api/v3/coins/"}},methods:{chartData:function(){var t=this;d(this.chartApi+this.coinData.id+"/market_chart?vs_currency=usd&days="+this.days).then(function(e){t.coinChart=e,console.log(t.coinChart)})}},created:function(){this.chartData()}},nt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{id:"flex-space",title:t.coinData.name}},[a("div",{attrs:{id:"go-back"}},[a("f7-link",{on:{click:function(e){t.$f7router.back()}}},[a("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)],1)]),t._v(" "),a("f7-block",[a("div",{attrs:{id:"coin-block"}},[a("div",{attrs:{id:"coin-head"}},[a("div",{attrs:{id:"coin-cur-price"}},[a("div",{attrs:{id:"cur-price"}},[t._v("$"+t._s(t.coinData.current_price))]),t._v(" "),a("div",{attrs:{id:"last-update-price"},domProps:{textContent:t._s((new Date).toLocaleString("heb-IL",{timeZone:"Asia/Jerusalem"}))}})]),t._v(" "),a("div",{attrs:{id:"coin-image"}},[a("img",{attrs:{src:t.coinData.image}})])]),t._v(" "),a("div",{attrs:{id:"coin-chart"}}),t._v(" "),a("div",{attrs:{id:"coin-body"}},[a("div",{staticClass:"card data-table"},[a("div",{staticClass:"card-content"},[a("table",[a("tbody",[a("tr",[a("th",{staticClass:"data-table-title"},[t._v("נתונים עדכניים")])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("מחיר")]),t._v(" "),a("td",{staticClass:"numeric-cell"},[t._v("$"+t._s(t.coinData.current_price))])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("%(24 שעות)")]),t._v(" "),a("td",{staticClass:"numeric-cell ltr",class:{green:t.coinData.price_change_percentage_24h>0,red:t.coinData.price_change_percentage_24h<0}},[t._v("\r\n                                            "+t._s(t.coinData.price_change_percentage_24h.toFixed(2))+"%")])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("שווי שוק")]),t._v(" "),a("td",{staticClass:"numeric-cell"},[t._v("$"+t._s(t.coinData.market_cap))])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("ווליום "),a("small",[t._v("(24 שעות)")])]),t._v(" "),a("td",{staticClass:"numeric-cell"},[t._v("$"+t._s(t.coinData.total_volume))])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("כמות מטבעות נוכחית")]),t._v(" "),a("td",{staticClass:"numeric-cell"},[t._v(t._s(t.coinData.circulating_supply))])]),t._v(" "),a("tr",[a("th",{staticClass:"data-table-title"},[t._v("נתוני עבר")])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("מחיר יחידה מקסימלי בכל הזמנים")]),t._v(" "),a("td",{staticClass:"numeric-cell"},[t._v("\r\n                                            $"+t._s(t.coinData.ath))])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("שינוי מהמחיר הגבוה בכל הזמנים")]),t._v(" "),a("td",{staticClass:"numeric-cell ltr",class:{green:t.coinData.ath_change_percentage>0,red:t.coinData.ath_change_percentage<0}},[t._v("\r\n                                            "+t._s(t.coinData.ath_change_percentage)+"%")])]),t._v(" "),a("tr",[a("td",{staticClass:"label-cell"},[t._v("בתאריך")]),t._v(" "),a("td",{staticClass:"numeric-cell"},[t._v(" "+t._s(t.coinData.ath_date)+"\r\n                                        ")])])])])])])])])])],1)},staticRenderFns:[]};var st=[{path:"/",component:Q},{path:"/Coin/",component:a("VU/8")(it,nt,!1,function(t){a("6epb")},null,null).exports}],ot={name:"App",methods:{handleBackButton:function(){return document.querySelector(".panel-left.panel-active")?this.$f7.panel.close():document.querySelector(".modal-in")?this.$f7.popover.close():this.$f7.views.main.router.history.length>1?this.$f7.views.main.router.back():window.navigator.app.exitApp()}},computed:{isiOS:function(){return this.$theme.ios}},created:function(){document.addEventListener("backbutton",this.handleBackButton)}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("f7-statusbar"),this._v(" "),e("f7-view",{attrs:{id:"main-view",url:"/","color-theme":"orange",main:""}})],1)},staticRenderFns:[]};var ct=a("VU/8")(ot,rt,!1,function(t){a("bSUD")},null,null).exports;C.library.add(w.e,w.b,w.a,w.c,w.f,w.d),i.default.use(b.a,g.a,s.a),i.default.component("font-awesome-icon",k.FontAwesomeIcon),i.default.component("generic-loader",D),i.default.component("virtual-list",L.a),i.default.config.productionTip=!1;new i.default({el:"#app",template:"<app/>",store:h,framework7:{rtl:!0,id:"io.framework7.testapp",name:"Framework7",theme:"auto",routes:st},components:{app:ct},mounted:function(){alert("mounted"),document.addEventListener("deviceready",function(){alert("device ready")})}})},"Nn+m":function(t,e){},O3Kk:function(t,e){},"VC+z":function(t,e){},VXnA:function(t,e){},Xmaz:function(t,e){},Xzol:function(t,e){},bSUD:function(t,e){},cc6C:function(t,e){},iDxs:function(t,e){},mQpJ:function(t,e){},"q+RN":function(t,e){},w2cG:function(t,e){},"wj+B":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6c223135c674ebb35ed6.js.map