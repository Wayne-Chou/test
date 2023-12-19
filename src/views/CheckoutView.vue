<template>
  <div class="container" v-if="carItems.length === 0">您的購物車是空的</div>
  <div class="content container" v-else>
    <div v-for="(item, index) in carItems" :key="index">
      <div>
        <div class="item-img">
          <img :src="item.product.img" alt="" />
        </div>
        <div class="item-title">{{ item.product.title }}</div>
        <div class="item-number">{{ item.product.id }}</div>
        <div class="item-cost">{{ item.product.cost }}</div>
      </div>
      <div>
        <button @click="Increase(item)">+</button>
        <button @click="reduce(item)">-</button>
        <div>{{ item.number }}</div>
        <button @click="remover(item)">刪除商品</button>
        <div>购物车总金额: {{ carTotal }}</div>
        <RouterLink to="/Payment"
          ><button @click="getOrders">結帳</button></RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    // 透過computed取得store的資訊
    // 利用getters取得使用者資訊
    loginedUserInfo() {
      return this.$store.getters.loginedUserInfo;
    },
    // 利用state取得商品資訊
    carItems() {
      return this.$store.state.carItems;
    },
    carTotal() {
      // 利用getters取得計算金額
      return this.$store.getters.totalCost;
    },
  },

  methods: {
    getOrders() {
      let carItems = this.carItems.map(function (element) {
        return element.product.id;
      });

      let Myorders = {
        productNumber: carItems,
        userId: this.loginedUserInfo.id,
      };

      this.$axios.post("http://localhost:3000/orders/", Myorders).then(() => {
        this.getOrder();
      });
    },
    getOrder() {
      this.$axios.get("http://localhost:3000/orders/").then((res) => {
        this.orders = res.data.filter(
          (item) => item.userId === this.loginedUserInfo.id
        );
      });
    },
    Increase(item) {
      this.$store.commit("addShoppingCar", item.product);
    },
    reduce(item) {
      this.$store.commit("reduce", item.product);
    },
    remover(item) {
      this.$store.commit("removeShoppingCar", item.product);
    },
  },
};
</script>
<style scoped>
.container {
  text-align: center;
  font-size: 30px;
}
.content {
  text-align: center;
}
.item-img {
  width: 100%;
  background: #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.item-img img {
  width: 250px;
  height: 300px;
  padding: 10px;
}
</style>