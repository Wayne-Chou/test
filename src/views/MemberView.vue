<template>
  <OrderEle />
  <div class="box">
    <h1>會員資料{{ member.username }}</h1>
    <label for="user">姓名</label>
    <input
      v-model="member.username"
      type="text"
      id="user"
      name="user"
      required
    />
    <div v-if="errors.username" class="error-message">
      {{ errors.username }}
    </div>
    <br />
    <label for="address">地址</label>
    <input
      v-model="member.address"
      type="text"
      id="address"
      name="address"
      required
    />
    <div v-if="errors.address" class="error-message">
      {{ errors.address }}
    </div>
    <br />
    <label for="phone">手機號碼</label>
    <input v-model="member.phone" type="tel" id="phone" name="phone" required />
    <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
    <br />
    <label for="password">密碼</label>
    <input
      v-model="member.password"
      type="password"
      id="password"
      name="password"
      required
    />
    <div v-if="errors.password" class="error-message">
      {{ errors.password }}
    </div>
    <br />
    <label for="confirmPassword">確認密碼</label>
    <input
      v-model="member.checkPassword"
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      required
    />
    <div v-if="errors.checkPassword" class="error-message">
      {{ errors.checkPassword }}
    </div>

    <button @click="change(member.id)" class="btn">確認修改</button>
  </div>
</template>

<script>
import OrderEle from "@/components/OrderEle.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      checkPassword: "",
      address: "",
      member: {}, //儲存會員資料
      errors: {}, //顯示錯誤訊息
    };
  },
  components: {
    OrderEle,
  },
  computed: {
    // 計算屬性取得store的userInfo資料
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  created() {
    // 在生命週期created拿到資料
    this.member = this.userInfo;
  },
  methods: {
    change(id) {
      this.errors = {};
      if (!this.username.match(/^[A-Za-z\u4e00-\u9fa5]+$/)) {
        this.errors.name = "姓名只能包含中英文字符";
      }
      if (!/^\d{10}$/.test(this.member.phone)) {
        this.errors.phone = "手機號碼必須是10位數";
      }
      if (this.password !== this.checkPassword) {
        this.errors.password = "密碼不一致";
        this.errors.checkPassword = "密碼不一致";
      }
      let change = {
        username: this.member.username,
        phone: this.member.phone,
        address: this.member.address,
        password: this.member.password,
      };

      this.$axios
        .patch("http://localhost:3000/member/" + id, change)
        .then(() => {
          this.$axios.get("http://localhost:3000/member/" + id).then((res) => {
            this.member = res.data;
            this.$store.commit("setUserInfo", res.data);
            console.log("member", res);
          });
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.box {
  background: Blanchedalmond;
  padding: 30px;
  max-width: 300px;
  width: 100%;
  margin: 30px auto;
}
.box input {
  height: 30px;
  width: 100%;
  margin-bottom: 20px;
}
.btn {
  width: 100%;
  height: 30px;
  margin-top: 15px;
  background: Maroon;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  border: none;
}

/* 錯誤訊息 */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
