import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    // 定義一開始的位置
    redirect: "/ProductView",
  },
  {
    path: "/ProductView",
    name: "ProductView",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/ProductDetail/:id",
    name: "ProductDetail",
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/LoginRegister",
    name: "LoginRegister",
    component: () => import("../views/LoginRegisterView.vue"),
  },
  {
    path: "/Member",
    name: "Member",
    component: () => import("../views/MemberView.vue"),
  },
  {
    path: "/Checkout/:id",
    name: "Checkout",
    component: () => import("../views/CheckoutView.vue"),
  },
  {
    path: "/FavoriteView/:id",
    name: "FavoriteView",
    component: () => import("../views/FavoriteView.vue"),
  },
  {
    path: "/OrderView",
    name: "OrderView",
    component: () => import("../views/OrderView.vue"),
  },
  {
    path: "/Payment",
    name: "Payment",
    component: () => import("../views/PaymentView.vue"),
  },
  {
    path: "/DeliverSeven",
    name: "DeliverSeven",
    component: () => import("../views/DeliverSeven.View.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
