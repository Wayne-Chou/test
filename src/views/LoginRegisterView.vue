<template>
  <div class="panel-group container">
    <input
      type="radio"
      name="panel-radio"
      id="radio1"
      class="panel-control"
      checked
    />
    <input type="radio" name="panel-radio" id="radio2" class="panel-control" />

    <div class="tab-group">
      <label for="radio1" class="active">登入</label>
      <label for="radio2">註冊</label>
    </div>
    <div class="content-group">
      <div class="content content1">
        <div class="box">
          <label for="user_name">信箱</label>
          <input
            v-model="username"
            type="email"
            id="user_name"
            name="username"
            required
          />
          <br />
          <label for="password">密碼</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            required
          />
          <br />
          <button @click="login" class="login">登入</button>
        </div>
      </div>
      <div class="content content2">
        <div class="box">
          <label for="username">信箱</label>
          <input
            v-model="username"
            type="email"
            id="username"
            name="username"
            required
          />
          <div v-if="errors.username" class="error-message">
            {{ errors.username }}
          </div>
          <br />
          <label for="r_password">密碼</label>
          <input
            v-model="password"
            type="password"
            id="r_password"
            name="password"
            required
          />
          <div v-if="errors.password" class="error-message">
            {{ errors.password }}
          </div>
          <br />
          <label for="check_password">確認密碼</label>
          <input
            v-model="check_password"
            type="password"
            id="check_password"
            name="password"
            required
          />
          <div v-if="errors.check_password" class="error-message">
            {{ errors.check_password }}
          </div>
          <br />
          <label for="phone">手機號碼</label>
          <input v-model="phone" type="text" id="phone" name="phone" required />
          <div v-if="errors.phone" class="error-message">
            {{ errors.phone }}
          </div>
          <br />
          <label for="address">地址</label>
          <input
            v-model="address"
            type="text"
            id="address"
            name="address"
            required
          />
          <div v-if="errors.address" class="error-message">
            {{ errors.address }}
          </div>
          <br />
          <button @click="register" class="register">註冊</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 登入錯誤/成功提示 -->
  <div v-if="errorShow" class="error modal_box">
    <div class="modal">
      <div class="modal_header">
        <h5 class="modal_title">帳號密碼不能為空</h5>
      </div>
    </div>
  </div>
  <div v-else-if="successShow" class="success modal_box">
    <div class="modal">
      <div class="modal_header">
        <h5 class="modal_title">登入成功!</h5>
      </div>
    </div>
  </div>
  <div v-else-if="failShow" class="fail modal_box">
    <div class="modal">
      <div class="modal_header">
        <h5 class="modal_title">登入失敗</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorShow: false, //錯誤訊息
      successShow: false, //成功訊息
      failShow: false, //失敗訊息
      username: "",
      password: "",
      check_password: "",
      phone: "",
      address: "",
      member: [], //接會員資料
      errors: {}, //錯誤訊息
    };
  },

  created() {
    // 使用get來獲取會員資料
    this.$axios.get("http://localhost:3000/member/").then((res) => {
      this.member = res.data;
      // console.log(res);
    });
  },
  methods: {
    register() {
      // 每次驗證清空錯誤訊息
      this.errors = {};
      if (!this.username.match(/^[A-Za-z\u4e00-\u9fa5]+$/)) {
        this.errors.username = "姓名只能包含中英文字符";
      } else {
        this.errors.username = "不能為空";
      }
      if (!/^\d{10}$/.test.phone) {
        this.errors.phone = "手機號碼必須是10位數";
      } else {
        this.errors.phone = "不能為空";
      }
      if (this.password !== this.check_password) {
        this.errors.password = "密碼不一致";
        this.errors.check_password = "密碼不一致";
      } else {
        this.errors.password = "不能為空";
        this.errors.check_password = "不能為空";
      }
      if (this.address === "") {
        this.errors.address = "地址不能為空";
      }
      // 如果都沒有錯誤訊息再將資料傳入
      if (Object.keys(this.errors).length === 0) {
        // 用個變數將所有資料傳入
        let payLoad = {
          username: this.username,
          password: this.password,
          check_password: this.check_password,
          phone: this.phone,
          address: this.address,
        };
        // 將資料透過payLoad傳入store
        this.$axios.post("http://localhost:3000/member/", payLoad).then(() => {
          this.$store.commit("setUserInfo", payLoad);
          // console.log("name", payLoad);
        });
      }
    },
    login() {
      // 帳號密碼不能空
      if (this.username === "" && this.password === "") {
        setTimeout(() => {
          // 1秒後出現錯誤訊息
          this.errorShow = true;
        }, 1000);
        setTimeout(() => {
          // 5秒後將錯誤訊息關閉
          this.errorShow = false;
        }, 5000);
      } else if (
        // 將member透過find去比對是否跟使用者輸入的相符
        this.member.find(
          (e) => e.username === this.username && e.password === this.password
        )
      ) {
        let userInfo = this.member.find(
          (e) => e.username === this.username && e.password === this.password
        );
        this.$store.commit("setUserInfo", userInfo);
        // 1秒後顯示成功訊息
        setTimeout(() => {
          this.successShow = true;
          console.log(78);
        }, 1000);
        // 5秒後訊息消失並且跳轉頁面
        setTimeout(() => {
          this.successShow = false;
          this.$router.push({ name: "Member" });
          console.log(1651);
        }, 5000);
        // 如果都不對出現錯誤訊息
      } else {
        setTimeout(() => {
          this.failShow = true;
        }, 1000);
        setTimeout(() => {
          this.failShow = false;
        }, 5000);
      }
    },
  },
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.panel-control {
  display: none;
}
.panel-group {
  max-width: 450px;
  width: 100%;
  margin: 50px auto;
}

.tab-group {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.tab-group label {
  display: inline-block;
  width: 100px;
  padding: 15px;
  border-bottom: none;
  background-color: aliceblue;
  cursor: pointer;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
}
.content-group {
  width: 100%;
}
.content {
  display: none;
}
#radio1:checked ~ .tab-group [for="radio1"],
#radio2:checked ~ .tab-group [for="radio2"] {
  background-color: lightcoral;
  color: #fff;
}

#radio1:checked ~ .content-group .content1,
#radio2:checked ~ .content-group .content2 {
  display: block;
}
.box {
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: antiquewhite;
  border-radius: 25px;
}
.box input {
  height: 30px;
}
.login,
.register {
  outline: none;
  border: none;
  background: Indianred;
  color: #fff;
  font-size: 20px;
  height: 50px;
  cursor: pointer;
}

/* 視窗樣式 */
.modal_box {
  position: fixed;
  z-index: 1090;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.modal {
  margin: 2.5em auto;
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fff;
  padding: 30px;
  text-align: center;
}

/* 註冊錯誤訊息 */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
