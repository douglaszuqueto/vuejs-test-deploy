<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="text-center col-12" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active">
            <router-link to="/" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/share" class="nav-link text-white ">Share</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/geolocation" class="nav-link text-white ">Geolocation</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container" style="margin-top: 25px">
      <router-view/>
      <footer class="text-center">
        <br><br>
        <div class="alert" :class="[online ? 'alert-success' : 'alert-danger']" role="alert">
          <h3>Online: {{online}}</h3>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      online: true
    }
  },
  mounted () {
    this.online = this.getNetworkStatus()
    window.addEventListener('offline', this.toggleNetworkStatus)
    window.addEventListener('online', this.toggleNetworkStatus)
  },
  methods: {
    getNetworkStatus () {
      return Boolean(window.navigator.onLine)
    },
    toggleNetworkStatus ({ type }) {
      this.online = this.getNetworkStatus()
    }
  },
  destroyed () {
    window.removeEventListener('offline', this.toggleNetworkStatus)
    window.removeEventListener('online', this.toggleNetworkStatus)
  }
}
</script>

<style>
</style>
