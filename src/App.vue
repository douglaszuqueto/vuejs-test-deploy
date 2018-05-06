<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="collapse navbar-collapse " id="navbarNav">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
