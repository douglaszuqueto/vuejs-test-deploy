<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <button type="button" class="btn btn-success" @click="share()">Compartilhar</button>
  </div>
</template>

<script>
function debug (msg, log) {
  if (log) {
    return console.log(msg)
  }
  alert(msg)
}

export default {
  name: 'WebShareAPI',
  data () {
    return {
      msg: 'Web Share API'
    }
  },
  mounted () {
  },
  methods: {
    share: () => {
      debug('[Web Share API] - Compartilhar')
      if (navigator.share) {
        navigator.share({
          title: 'Web Fundamentals',
          text: 'Check out Web Fundamentals — it rocks!',
          url: 'https://developers.google.com/web'
        })
          .then(() => {
            debug('[Web Share API] - Compartilhado', true)
          })
          .catch((error) => {
            debug('[Web Share API] - Compartilhado')
            debug('[Web Share API] - Erro', error)
          })
      } else {
        debug('[Web Share API] - Não sportado')
      }
    }
  }
}
</script>
