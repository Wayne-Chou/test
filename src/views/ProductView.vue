<template>
  <div id="productsList" class="container">
    <input v-model="selectedColor" id="yellow" value="yellow" type="checkbox" />
    <label for="yellow">黃色</label>
    <input v-model="selectedColor" id="purple" value="purple" type="checkbox" />
    <label for="purple">紫色</label>
    <input v-model="selectedColor" id="red" value="red" type="checkbox" />
    <label for="red">紅色</label>
    <input v-model="selectedColor" id="blue" value="blue" type="checkbox" />
    <label for="blue">藍色</label>
    <input v-model="selectedColor" id="pink" value="pink" type="checkbox" />
    <label for="pink">粉色</label>
    <input v-model="selectedColor" id="black" value="black" type="checkbox" />
    <label for="black">黑色</label>

    <select name="" id="select" v-model="selectedSort" @change="sortProducts">
      <option value="az">A到Z</option>
      <option value="za">Z到A</option>
      <option value="lowToHigh">價格低到高</option>
      <option value="highToLow">價格高到低</option>
    </select>
    <p class="product_total">
      總共有<span id="listNum">{{ ProductsColor.length }}</span
      >個商品
    </p>
    <div class="productsList">
      <div
        v-for="(product, index) in ProductsColor"
        :key="index"
        class="product_item"
      >
        <span class="product_number">{{ product.id }}</span>
        <div class="product_img" @click="ProductsPush(product.id)">
          <img :src="product.img" alt="" />
        </div>
        <div class="product_content">
          <h3 class="product_title">{{ product.title }}</h3>
          <p class="product_model">{{ product.model }}</p>
          <p class="product_cost">{{ product.cost }}</p>
          <p class="product_price">{{ product.code }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [], //儲存從db.json的商品
      selectedColor: [], //儲存顏色的值
      selectedSort: "az", //預設值
    };
  },

  created() {
    // 透過axios.get取得資料
    this.$axios.get("http://localhost:3000/products/").then((res) => {
      this.products = res.data;
    });
  },
  // 透過computed計算屬性來更新資料
  computed: {
    ProductsColor() {
      // 如果沒有點選顏色回傳整個商品
      if (this.selectedColor.length === 0) {
        return this.products;
      } else {
        // 使用filter去做判斷,使用includes確定是否有這個顏色
        // 最後再回傳
        return this.products.filter((product) =>
          this.selectedColor.includes(product.color || "")
        );
      }
    },
  },

  methods: {
    // 商品詳情
    ProductsPush(productNumber) {
      this.$router.push({
        name: "ProductDetail",
        params: { id: productNumber },
      });
    },
    sortProducts() {
      // 透過sort來排序
      switch (this.selectedSort) {
        case "az":
          this.products.sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          );
          break;
        case "za":
          this.products
            .sort((a, b) =>
              a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            )
            .reverse();
          break;
        case "lowToHigh":
          this.products.sort((a, b) => a.cost - b.cost);
          break;
        case "highToLow":
          this.products.sort((a, b) => b.cost - a.cost);
          break;
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

/* product */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 80px auto;
  text-align: center;
}
.productsList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.product_item {
  border-radius: 10px;
  box-shadow: 8px 9px#000;
  position: relative;
}

.product_introduction {
  padding: 40px;
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

@media (max-width: 960px) {
  .productsList {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .productsList {
    grid-template-columns: 1fr;
  }
}
</style>
