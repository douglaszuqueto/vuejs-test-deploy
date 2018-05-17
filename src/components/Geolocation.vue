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
    getGPSPosition: () => {
      if (!navigator.geolocation) {
        return
      }
      let self = this
      navigator.geolocation.getCurrentPosition((position) => {
        const {lat, long} = position.coords
        console.log(lat, long)
        alert(`Lat: ${lat}, long: ${long}`)
        self.gps.active = true
        self.gps.lat = lat
        self.gps.long = long
      })
    },
    watchGPSPostion: () => {
    }
  }
}
</script>
