<template>
  <div class="container">
    <div v-if="favorite.length === 0">您的最愛是空的</div>
    <div v-else>
      <div v-for="(item, index) in favorite" :key="index">
        <div>
          <div class="item-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="item-title">{{ item.title }}</div>
          <div class="item-number">{{ item.id }}</div>
          <div class="item-cost">{{ item.cost }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wishList: [], //用來放從db.json的資料wishList
      products: [], //用來放從db.json的資料products
      favorite: [], //將取得的資料用favorite來接
    };
  },

  created() {
    this.$axios.get("http://localhost:3000/products/").then((res) => {
      this.products = res.data;
    });
    this.$axios.get("http://localhost:3000/wishList/").then((res) => {
      this.wishList = res.data.filter(
        (item) => item.userId === this.loginedUserInfo.id
      );
      this.wishList.forEach((item) => {
        this.favorite.push(
          this.products.find((e) => e.id === item.productNumber)
        );
      });
    });
  },

  computed: {
    loginedUserInfo() {
      return this.$store.getters.loginedUserInfo;
    },
  },
};
</script>
<style scoped>
.container {
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