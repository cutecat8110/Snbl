<template>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-lg shadow-sm navbar-light bg-white">
      <div class="container">
        <router-link to="/admin/products" class="navbar-brand">
          後台
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link to="/admin/products" class="nav-link">產品</router-link>
            <router-link to="/admin/orders" class="nav-link">訂單</router-link>
            <router-link to="/admin/coupons" class="nav-link">優惠</router-link>
            <router-link to="/admin/article" class="nav-link">文章</router-link>
          </div>
          <div class="navbar-nav ms-auto">
            <a href="#" @click.prevent="logout" class="nav-link">登出</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/');
        }
      });
    },
  },
};
</script>
