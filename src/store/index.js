import { createStore } from "vuex";
import persistedState from "vuex-persistedstate";
export default createStore({
  plugins: [persistedState({ storage: window.sessionStorage })],
  state: {
    userInfo: {}, //將使用者資料儲存在store做全局使用
    carItems: [], //商品資料
    favoriteItem: [], //喜愛商品資料
  },
  getters: {
    loginedUserInfo(state) {
      return state.userInfo;
    },
    getCarItem(state) {
      // 購物車初始值為0
      let total = 0;
      state.carItems.forEach((item) => {
        total = item.number + total;
      });
      // 更新購物車數量
      return total;
    },
    // 更新總金額
    totalCost(state) {
      // 初始值為0
      let total = 0;
      // 透過forEach去將金額跟數量相乘並更新總金額
      state.carItems.forEach((item) => {
        total += item.product.cost * item.number;
      });
      // 最後回傳金額
      return total;
    },
  },
  mutations: {
    // 透過state將userInfo放在store
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },

    addShoppingCar(state, addCar) {
      // 如果商品存在透過find來比對
      // 資料的id跟被點選的id
      const existItem = state.carItems.find(
        (item) => item.product.id === addCar.id
      );
      // 商品存在數量增加
      if (existItem) {
        existItem.number++;
      } else {
        state.carItems.push({ product: addCar, number: 1 });
      }
      // 更新購物車金額當商品增加時總金額加上商品金額
      // state.totalCost = state.totalCost + addCar.cost
      state.totalCost += addCar.cost;
    },
    reduce(state, product) {
      // 如果商品存在透過find來比對
      // 資料的id跟被點選的id
      const existItem = state.carItems.find(
        (item) => item.product.id === product.id
      );

      // 商品存在且1以上時能夠遞減
      if (existItem.number > 1) {
        existItem.number--;
      }
      // 更新購物車金額當商品減少時總金額減去商品金額

      // state.totalCost = state.totalCost - product.cost

      state.totalCost -= product.cost;
    },
    removeShoppingCar(state, product) {
      // findIndex會將陣列中的「每一個」元素帶入指定的函式內做判斷，
      // 並會回傳第一個符合判斷條件元素的位置號碼，如果沒有元素符合則會回傳 -1。
      // 不等於-1表示裡面有商品
      const existItemIndex = state.carItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existItemIndex !== -1) {
        // splice移除或新增陣列的元素

        // 第一個是要移除或要添加的序列號碼
        // 第二個是要移除的長度，沒寫第1個後全部都會移除，0則不會有東西被移除
        // 第三個是要增加內容(選填)
        state.carItems.splice(existItemIndex, 1);
      }
    },

    removefavoriteItem(state, removedItem) {
      const existItem = state.favoriteItem.find(
        (item) => item.product.id === removedItem.id
      );
      if (existItem) {
        // 如果商品存在使用filter移除
        // 使用不等于 !== 来区分這樣可以確保我要移除的是某個商品
        // 而不是全部商品
        state.favoriteItem = state.favoriteItem.filter(
          (item) => item.product.id !== removedItem.id
        );
      }
    },
    addfavoriteItem(state, addfavoriteItem) {
      // 一樣用id比對點擊哪個商品一樣使用find去找
      const existItem = state.favoriteItem.find(
        (item) => item.product.id === addfavoriteItem.id
      );

      if (existItem) {
        // 如果商品存在使用filter移除
        // 使用不等于 !== 来区分這樣可以確保我要移除的是某個商品
        // 而不是全部商品
        state.favoriteItem = state.favoriteItem.filter(
          (item) => item.product.id !== addfavoriteItem.id
        );
      } else {
        // 商品不存在，将商品加入最爱
        state.favoriteItem.push({ product: addfavoriteItem });
      }
    },
  },
  actions: {},
  modules: {},
});
