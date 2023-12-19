<template>
  <div class="container">
    <div class="productsList">
      <div class="product_item">
        <span class="product_number">{{ productInfo.id }}</span>
        <div class="product_img">
          <img :src="productInfo.img" alt="" />
        </div>
        <div class="product_content">
          <h3 class="product_title">{{ productInfo.title }}</h3>
          <p class="product_model">{{ productInfo.model }}</p>
          <p class="product_cost">{{ productInfo.cost }}</p>
          <p class="product_price">{{ productInfo.code }}</p>
          <div class="shop_love">
            <div @click="addToCart(productInfo)" class="shpping_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div
              class="love_icon"
              @click="addFavorite(productInfo)"
              :class="{ active: Isfav }"
            >
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 用來裝使用者資料
      productInfo: {},
      //用來裝商品資料的
      carItems: [],
      // 喜愛商品樣式預設
      Isfav: false,
    };
  },
  // 使用計算屬性取得當前id的值
  computed: {
    productId() {
      return this.$route.params.id;
    },
    // 從store取得使用者資料
    loginedUserInfo() {
      return this.$store.getters.loginedUserInfo;
    },
  },
  watch: {},
  // 在生命週期created呼叫productInfoGetInfo取得商品資訊
  created() {
    this.productInfoGetInfo();
    this.getWishList();
  },
  methods: {
    // 在這裡使用gat的方式取得商品資訊
    productInfoGetInfo() {
      this.$axios
        .get("http://localhost:3000/products/" + this.productId)
        .then((res) => {
          this.productInfo = res.data;
          // console.log(res.data);
          // console.log(this.productInfo);
        });
    },
    addToCart(productInfo) {
      // 運用find來比對商品存不存在
      const NotexistItem = this.carItems.find(
        (item) => item.product.id === productInfo.id
      );
      // 如果商品不存在觸發store的mutations
      if (!NotexistItem) {
        this.$store.commit("addShoppingCar", productInfo);
      }
    },

    getWishList() {
      this.$axios.get("http://localhost:3000/wishList/").then((res) => {
        this.wishList = res.data.filter(
          (item) => item.userId === this.loginedUserInfo.id
        );
        console.log("wishList", this.wishList);
      });
    },

    addFavorite(productInfo) {
      this.Isfav = !this.Isfav;
      if (this.loginedUserInfo.id) {
        const existItem = this.wishList.find(
          (item) => item.productNumber === productInfo.id
        );

        if (existItem) {
          this.$axios
            .delete("http://localhost:3000/wishList/" + existItem.id)
            .then(() => {
              this.getWishList();
            });
        } else {
          let Myfavorite = {
            productNumber: productInfo.id,
            userId: this.loginedUserInfo.id,
          };
          this.$axios
            .post("http://localhost:3000/wishList/", Myfavorite)
            .then(() => {
              this.getWishList();
            });
        }
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.product_content {
  padding: 40px;
  text-align: center;
}
.product_item {
  position: relative;
}
.product_img {
  width: 100%;
  background: #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.product_img img {
  width: 250px;
  height: 300px;
  padding: 10px;
}
.product_total {
  margin-bottom: 20px;
  font-size: 18px;
}
.product_total span {
  font-weight: bold;
  color: #09ceb7;
}
.product_number {
  position: absolute;
  background: #09ceb7;
  color: #fff;
  padding: 5px;
  font-size: 12px;
  top: 0;
  right: 0;
}
.product_title {
  font-size: 24px;
  margin-bottom: 20px;
}
.product_cost {
  font-size: 28px;
  color: #09ceb7;
  margin: 16px 0;
}
.product_price {
  color: #e5e5e5;
  text-decoration: line-through;
}
.shop_love {
  display: flex;
  justify-content: space-evenly;
}
.shop_love,
.love_icon {
  font-size: 40px;
  cursor: pointer;
}
/* 愛心樣式切換 */
.fa-solid.fa-heart {
  display: none;
}

.love_icon.active .fa-solid.fa-heart {
  display: block;
}

.love_icon.active .fa-regular.fa-heart {
  display: none;
}
</style>