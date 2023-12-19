
 <template>
  <OrderEle />
  <div class="container">
    <div v-if="delivery.length === 0">您沒有任何訂單</div>
    <div v-else>
      <div v-for="(item, index) in delivery" :key="index">
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
    <div class="member">
      <div v-for="(item, index) in member" :key="index">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-phone">{{ item.phone }}</div>
        <div class="item-selectedArea">{{ item.selectedAreaName }}</div>
        <div class="item-SevenShop">{{ item.SevenShopName }}</div>
        <button :disabled="item.status === true" @click="cancel(item.id)">
          取消訂單
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import OrderEle from "@/components/OrderEle.vue";
import OrderEle from "../components/OrderEle.vue";

export default {
  data() {
    return {
      delivery: [],
      products: [],
      orders: [],
      member: [],
    };
  },
  components: {
    OrderEle,
  },
  computed: {
    loginedUserInfo() {
      return this.$store.getters.loginedUserInfo;
    },
  },
  created() {
    this.$axios.get("http://localhost:3000/products/").then((res) => {
      this.products = res.data;
    });
    this.$axios.get("http://localhost:3000/orders/").then((res) => {
      this.orders = res.data.filter(
        (item) => item.userId === this.loginedUserInfo.id
      );
      this.orders.forEach((item) => {
        item.productNumber.forEach((productItem) => {
          this.delivery.push(this.products.find((e) => e.id === productItem));
        });
      });
    });
    this.$axios.get("http://localhost:3000/sevenDatil/").then((res) => {
      this.member = res.data;
      console.log("member", res);
    });
  },
  methods: {
    cancel(id) {
      let cancel = {
        status: false,
      };
      this.$axios
        .patch("http://localhost:3000/sevenDatil/" + id, cancel)
        .then(() => {
          this.$axios.get("http://localhost:3000/sevenDatil/").then((res) => {
            this.member = res.data;
            console.log("member", res);
          });
        });
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
.item-img {
  width: 300px;

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
.disabled {
  background: #ccc;
}
</style>