<template>
  <!-- footer -->
  <div class="footer-box">
    <div class="footer grid-1-5">
      <div class="footer-item">
        <div class="footer-title">HOME</div>
        <a class="footer-link" href="#">home</a>
      </div>
      <div class="footer-item">
        <div class="footer-title">PRODUCT</div>
        <a class="footer-link" href="#">home</a>
        <a class="footer-link" href="#">home</a>
      </div>
      <div class="footer-item">
        <div class="footer-title">ABOUT</div>
        <a class="footer-link" href="#">home</a>
        <a class="footer-link" href="#">home</a>
      </div>
      <div class="footer-item">
        <div class="footer-title">SUPPORT</div>
        <a class="footer-link" href="#">home</a>
        <a class="footer-link" href="#">home</a>
        <a class="footer-link" href="#">home</a>
        <a class="footer-link" href="#">home</a>
      </div>
      <div class="footer-item">
        <div class="footer-title">BE THE FIRST TO KNOW</div>
        <div class="footer-text">
          <p>
            Get special offers, exclusive product news,
            <br />
            and event info straight to your inbox
          </p>
        </div>
        <div class="footer-input">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div class="social-icon">
          <a class="soc-icon" href="#"><i class="fa-brands fa-facebook"></i></a>
          <a class="soc-icon" href="#"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a class="soc-icon" href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </div>

  <!-- 手機板footer -->
  <!-- 使用:class樣式綁定判斷觸發 -->
  <div class="mb-footer-box">
    <div class="mb-footer">
      <div class="mb-footer-item" @click="toggleFooterBox(0)">
        <div class="mb-footer-title" :class="{ turn: isTurned[0] }">HOME</div>
        <div class="mb-f-link" :class="{ 'mb-open': isContentOpen[0] }">
          <a class="mb-footer-link" href="#">home</a>
        </div>
      </div>
      <div class="mb-footer-item" @click="toggleFooterBox(1)">
        <div class="mb-footer-title" :class="{ turn: isTurned[1] }">
          PRODUCT
        </div>
        <div class="mb-f-link" :class="{ 'mb-open': isContentOpen[1] }">
          <a class="mb-footer-link" href="#">home</a>
          <a class="mb-footer-link" href="#">home</a>
        </div>
      </div>
      <div class="mb-footer-item" @click="toggleFooterBox(2)">
        <div class="mb-footer-title" :class="{ turn: isTurned[2] }">ABOUT</div>
        <div class="mb-f-link" :class="{ 'mb-open': isContentOpen[2] }">
          <a class="mb-footer-link" href="#">home</a>
          <a class="mb-footer-link" href="#">home</a>
        </div>
      </div>
      <div class="mb-footer-item" @click="toggleFooterBox(3)">
        <div class="mb-footer-title" :class="{ turn: isTurned[3] }">
          SUPPORT
        </div>
        <div class="mb-f-link" :class="{ 'mb-open': isContentOpen[3] }">
          <a class="mb-footer-link" href="#">home</a>
          <a class="mb-footer-link" href="#">home</a>
          <a class="mb-footer-link" href="#">home</a>
          <a class="mb-footer-link" href="#">home</a>
        </div>
      </div>
      <div class="mb-footer-item" @click="toggleFooterBox(4)">
        <div class="mb-footer-title" :class="{ turn: isTurned[4] }">
          BE THE FIRST TO KNOW
        </div>
        <div class="mb-footerbox" :class="{ 'mb-open': isContentOpen[4] }">
          <div class="mb-footer-text">
            <p>
              Get special offers, exclusive product news, and event info
              straight to your inbox
            </p>
          </div>
          <div class="mb-footer-input">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div class="mb-social-icon">
            <a class="mb-soc-icon" href="#"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a class="mb-soc-icon" href="#"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a class="mb-soc-icon" href="#"
              ><i class="fa-brands fa-twitter"></i
            ></a>
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
      //5個分別對應個別的索引值
      isContentOpen: [false, false, false, false, false],
      isTurned: [false, false, false, false, false],
      activeIndex: null, //透過activeIndex來判斷誰打開
    };
  },
  methods: {
    // 將索引值帶入
    toggleFooterBox(index) {
      // 判斷哪個被點擊加上class
      if (this.activeIndex === index) {
        // 如果是打開就關，是關就打開
        this.isContentOpen[index] = !this.isContentOpen[index];
        this.isTurned[index] = !this.isTurned[index];
      } else {
        // 判斷是哪個被點擊了
        this.activeIndex = index;
        this.isContentOpen[index] = !this.isContentOpen[index];
        this.isTurned[index] = !this.isTurned[index];
      }
    },
  },
};
</script>

<style  scoped>
.grid-1-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.footer-box {
  width: 100%;
  height: 100%;
  background-color: #353535;
  padding: 60px 0;
}
.footer {
  width: 70%;
  margin: 0 auto;
}
.footer-item:last-child {
  width: 260px;
}
.footer-title,
.footer-link,
.footer-text {
  color: #fff;
}
.footer-link {
  text-decoration: none;
  display: block;
  padding: 15px 0;
}
.footer-text {
  padding: 15px 0;
}
.footer-item {
  gap: 10px;
}
.social-icon {
  padding: 20px 0;
}
.soc-icon {
  color: #fff;
  font-size: 25px;
  padding-right: 15px;
}
input[type="email"] {
  border: none;
  outline: none;
  height: 30px;
  color: #fff;
  width: 100%;
  max-width: 300px;
  background: none;
  border-bottom: 1px solid;
}
::placeholder {
  color: #fff;
}
/* footer手機板 */

.mb-footer-box {
  width: 100%;
  height: 100%;
  background-color: #353535;
  display: none;
}
.mb-footer-title,
.mb-footer-link,
.mb-footer-text {
  color: #fff;
}
.mb-footer-title {
  border-bottom: 1px solid gray;
  padding: 10px 0;
  position: relative;
}
.mb-footer-title::after {
  content: ">";
  color: #fff;
  position: absolute;
  right: 20px;
  transform: rotateZ(0deg);
}
.mb-footer-title.turn::after {
  transform: rotateZ(90deg);
}
.mb-footer-link {
  display: block;
  margin: 10px 0;
  text-decoration: none;
}

.mb-footer-item {
  padding: 20px 20px;
}
.mb-soc-icon {
  color: #fff;
  font-size: 25px;
  padding-right: 15px;
}
.mb-social-icon {
  margin-top: 20px;
}
.mb-footer-text {
  margin: 10px 0;
}
.mb-footerbox {
  display: none;
}
.mb-f-link {
  display: none;
}
.mb-f-link.mb-open {
  display: block;
}
.mb-footerbox.mb-open {
  display: block;
}
@media (max-width: 960px) {
  .footer.grid-1-5 {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .mb-footer-box {
    display: block;
  }
  .footer-box {
    display: none;
  }
}
</style>