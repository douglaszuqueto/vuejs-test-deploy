<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <button class="btn btn-success" @click="getGPSPosition">Obter localização</button>
    <div class="alert alert-info" style="margin-top: 10px">
      <p><span class="font-weight-bold">GPS</span>: {{gps.active}}</p>
      <p><span class="font-weight-bold">Latitude</span>: {{gps.lat}}</p>
      <p><span class="font-weight-bold">Longitude</span>: {{gps.lon}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Geolocation',
  data () {
    return {
      msg: 'Geolocation',
      gps: {
        active: false,
        lon: '...',
        lat: '...'
      }
    }
  },
  mounted () {
    if (navigator.geolocation) {
      // alert('[Geolocation] - Suportado')
    } else {
      alert('[Geolocation] - Não suportado')
    }
  },
  methods: {
    onSuccess: (position) => {
      const {latitude, longitude} = position.coords
      console.log(latitude, longitude)
      alert(`Lat: ${latitude}, long: ${longitude}`)
      this.gps.active = true
      this.gps.lat = latitude
      this.gps.long = longitude
    },
    getGPSPosition: () => {
      if (!navigator.geolocation) {
        return
      }
      navigator.geolocation.getCurrentPosition(position => {
        this.onSuccess(position)
      })
    },
    watchGPSPostion: () => {
    }
  }
}
</script>
