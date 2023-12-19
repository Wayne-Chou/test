<template>
  <div class="container">
    <label for="name">姓名</label>
    <input v-model="name" type="text" name="name" id="name" />
    <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
    <br />

    <label for="phone">手機號碼</label>
    <input v-model="phone" type="text" name="cellphone" id="phone" />
    <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
    <br />
    <select
      @change="changeArea"
      id="area"
      name="area"
      required
      v-model="selectedArea"
    >
      <option value="">請選擇地區</option>
      <option v-for="area in arealist" :key="area.name" :value="area">
        {{ area.name }}
      </option>
    </select>
    <div v-if="errors.selectedArea" class="error-message">
      {{ errors.selectedArea }}
    </div>

    <select
      id="shop"
      name="shop"
      required
      v-model="SevenShop"
      :disabled="!selectedArea"
    >
      <option value="">請選擇門市</option>
      <option v-for="shop in shoplist" :key="shop.townname" :value="shop">
        {{ shop.townname }}
      </option>
    </select>
    <div v-if="errors.SevenShop" class="error-message">
      {{ errors.SevenShop }}
    </div>

    <input @click="submit" class="sub" type="submit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arealist: [],
      shoplist: [],
      selectedArea: "",
      name: "",
      phone: "",
      SevenShop: "",
      errors: {},
    };
  },
  created() {
    this.$axios.get("https://api.nlsc.gov.tw/other/ListCounty").then((res) => {
      this.processXmlListInfo(res, "county");
    });
  },

  computed: {},
  methods: {
    changeArea() {
      this.$axios
        .get(
          "https://api.nlsc.gov.tw/other/ListTown1/" + this.selectedArea.code01
        )
        .then((res) => {
          this.shoplist = res.data;
        });
    },
    processXmlListInfo(res, target) {
      this.arealist = [];
      // 處理 縣市/區 列表資訊
      const xmlString = res.data;

      //使用JavaScript的内置DOM解析器DOMParser来解析XML字符串
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      //取得 縣市/區 列表 (HTMLCollection 狀態)
      const list = xmlDoc.getElementsByTagName(`${target}Item`);

      // console.log("list", list);

      // HTMLCollection 狀態 縣市/區 列表轉換成 Array 狀態 縣市/區 列表
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        console.log("item", item);
        const code = item.querySelector(`${target}code`).textContent;
        console.log("code", code);
        const name = item.querySelector(`${target}name`).textContent;
        console.log("name", name);
        const code01 = parseInt(
          item.querySelector(`${target}code01`).textContent
        );
        console.log("code01", code01);
        // 創建縣市 / 區 資訊物件
        const itemObject = {
          id: i + 1,
          code,
          name,
          code01,
        };
        // console.log("itemObject", itemObject);
        // 判斷taget 為 縣市 或 區，再進行對應的 push
        this.arealist.push(itemObject);
      }
    },
    submit() {
      this.errors = {};

      if (this.name === "") {
        this.errors.name = "姓名不能為空";
      } else if (!this.name.match(/^[A-Za-z\u4e00-\u9fa5]+$/)) {
        this.errors.name = "姓名只能包含中英文字符";
      }

      if (this.phone === "") {
        this.errors.phone = "手機號碼不能為空";
      } else if (!/^\d{10}$/.test(this.phone)) {
        this.errors.phone = "手機號碼必須是10位數";
      }
      if (!this.selectedArea) {
        this.errors.selectedArea = "請選擇地區";
      }
      if (!this.SevenShop) {
        this.errors.SevenShop = "請選擇門市";
      }
      // 都沒有錯誤訊息才能跳轉
      if (Object.keys(this.errors).length === 0) {
        let MemberProfile = {
          name: this.name,
          phone: this.phone,
          selectedAreaCode: this.selectedArea.code01,
          selectedAreaName: this.selectedArea.name,
          SevenShopCode: this.SevenShop.towncode01,
          SevenShopName: this.SevenShop.townname,
          status: true,
        };
        this.$axios
          .post("http://localhost:3000/sevenDatil/", MemberProfile)
          .then(() => {
            this.$router.push({ name: "OrderView" });
          });
      }
    },
  },
};
</script>
<style scoped>
.container {
  text-align: center;
}
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>