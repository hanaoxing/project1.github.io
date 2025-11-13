<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo" @click="handleLogoClick">
          <img src="/tab1/navicon.webp" alt="Logo" class="logo-img">
        </div>
        <ul class="nav-links">
          <li><router-link to="/beta" :class="{ active: $route.name === 'beta' }">William and Beta</router-link></li>
          <li><router-link to="/smile" :class="{ active: $route.name === 'smile' }">Operation smile</router-link></li>
          <li><router-link to="/school" :class="{ active: $route.name === 'school' }">USC Cinematic Arts
              Summer</router-link></li>
        </ul>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="/tab1/logo.webp" alt="Logo" class="footer-logo-img">
        </div>
        <div class="footer-text">
          <div @click="scrollToTop" class="back-to-top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <span>Back to the top</span>
          </div>
        </div>
        <p class="footer-empty"></p>
      </div>
      <div class="footer-copyright">
        <p>@2023 William and Beta. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleLogoClick() {
      // 如果已经在首页，直接回到顶部
      if (this.$route.name === 'home') {
        this.scrollToTop()
      } else {
        // 否则导航到首页，路由监听会自动回到顶部
        this.$router.push('/')
      }
    }
  },
  watch: {
    '$route'() {
      // 路由变化时跳转到顶部
      this.scrollToTop()
    }
  },
  mounted() {
    // 设置 zoom 属性 - 自动缩放整个页面
    const setZoom = () => {
      const scale = window.innerWidth / 1920
      document.documentElement.style.zoom = scale
    }

    // 初始化
    setZoom()

    // 监听窗口大小变化
    window.addEventListener('resize', setZoom)
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  background-color: #E9E5DE;
}

.navbar {
  top: 0;
  background-color: #4A4A4A;
  position: sticky;
  z-index: 100;
  width: 1920px;
  height: 108px;
}

.nav-container {
  padding: 0 240px;
  display: flex;
  align-items: center;
  height: 108px;
}

.logo {
  cursor: pointer;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo:hover {
  opacity: 0.8;
}

.logo-img {
  width: 67px;
  height: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 711px;
  flex: 1;
  justify-content: space-between;
}

.nav-links li {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-links a {
  font-family: Roboto;
  font-weight: 200;
  font-size: 20px;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
  text-transform: none;
  text-decoration: none;
}

.nav-links a:hover {
  color: #e0e0e0;
}

.nav-links a.active {
  color: #ffffff;
  border-bottom-color: #ffffff;
}

.main-content {
  flex: 1;
  width: 1440px;
  padding-top: 120px;
  margin: 0 auto;
}

.footer {
  background-color: #434343;
  color: #ffffff;
  margin-top: 240px;
  padding: 58px 107px;
}

.footer-content {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo-img {
  width: 152px;
}

.footer-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  height: 48px;
  line-height: 48px;
}

.back-to-top:hover {
  opacity: 0.8;
}

.back-to-top svg {
  width: 24px;
  height: 24px;
  color: #ffffff;
  flex-shrink: 0;
}

.back-to-top span {
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.footer-empty {
  width: 100px;
}

.footer-copyright {
  margin-top: 65px;
  height: 48px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  color: #9CA3AF;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  text-align: center;
}
</style>
