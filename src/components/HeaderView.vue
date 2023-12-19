<template>
  <div class="header">
    <div class="h-items">
      <div class="h-item"><a href="">太陽眼鏡</a></div>
      <div class="h-item"><a href="">太陽眼鏡</a></div>
      <div class="h-item"><a href="">太陽眼鏡</a></div>
      <i class="fa-solid fa-bars h-icon" @click="toggle"></i>
    </div>

    <div class="user-shopping">
      <div @click="gotoFavorite" class="favorite">
        <span>我的最愛</span>
      </div>

      <div class="user">
        <div v-if="Object.keys(user).length === 0">
          <router-link to="/LoginRegister">
            <span>註冊/登入</span>
          </router-link>
        </div>
        <div v-else>
          <router-link to="OrderView"><span>訂單查詢</span></router-link>
          <span>/</span>
          <span @click="logout">登出</span>
        </div>
      </div>

      <div class="shopping-car" @click="gotoCart">
        <span>{{ getCarItem }}個商品</span>
      </div>
    </div>
  </div>

  <!-- 手機版header -->
  <div class="mb-header" :class="{ sidebaropen: sidebar }">
    <i class="fa-solid fa-x x-icon" @click="toggle"></i>
    <div class="mb-h-items">
      <div class="mb-item"><a href="">太陽眼鏡</a></div>
      <div class="mb-item"><a href="">太陽眼鏡</a></div>
      <div class="mb-item"><a href="">太陽眼鏡</a></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebar: false,
    };
  },
  // 計算屬性取得store的userInfo資料
  computed: {
    user() {
      return this.$store.state.userInfo;
    },
    // 計算屬性取得store的購物車資料
    getCarItem() {
      return this.$store.getters.getCarItem;
    },
    favoriteItem() {
      return this.$store.state.favoriteItem;
    },
    userFavorite() {
      return this.wishList.filter(
        (item) => item.userId === this.loginedUserInfo.id
      );
    },
  },
  methods: {
    // 將userInfo資料清空
    // 跳轉至一開始畫面
    logout() {
      this.$store.commit("setUserInfo", {});
      this.$router.push({ name: "ProductView" });
    },
    toggle() {
      this.sidebar = !this.sidebar;
    },
    // 結帳頁面
    gotoCart(productNumber) {
      // 帶參數透過id知道是哪個商品並跳轉
      this.$router.push({ name: "Checkout", params: { id: productNumber } });
    },
    gotoFavorite(productNumber) {
      this.$router.push({
        name: "FavoriteView",
        params: { id: productNumber },
      });
    },
  },
};
</script>


<style  scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.h-items {
  display: flex;
}
.h-item {
  margin: 0 30px;
  font-size: 20px;
}
.user-shopping {
  display: flex;
  gap: 30px;
}
.favorite,
.user,
.shopping-car {
  font-size: 20px;
}

/* 手機header */
.h-icon,
.x-icon {
  font-size: 30px;
  cursor: pointer;
  display: none;
}
.x-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.mb-header {
  width: 300px;
  height: 100vh;
  background-color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
}

.mb-item {
  margin: 15px 0;
  padding: 15px;
  border-bottom: 1px solid;
}
@media (max-width: 960px) {
  .h-icon,
  .x-icon {
    display: block;
  }
  .header .h-items .h-item {
    display: none;
  }
}

.mb-header.sidebaropen {
  display: block !important;
}
</style>