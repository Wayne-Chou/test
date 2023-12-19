<template>
  <div class="items">
    <div class="item"><router-link to="OrderView">訂單查詢</router-link></div>
    <div class="item"><router-link to="Member">會員資料</router-link></div>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  justify-content: space-around;
  max-width: 650px;
  width: 100%;
  background: #ccc;
  margin: 0 auto;
}
.item {
  padding: 30px;
}
</style>