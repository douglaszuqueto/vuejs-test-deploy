<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <button type="button" class="btn btn-success" @click="share()">Compartilhar</button>
    <button type="button" class="btn btn-info" @click="shareSleep()">Compartilhar(sleep)</button>
  </div>
</template>

<script>
function debug (msg, log) {
  if (log) {
    return console.log(msg)
  }
  alert(msg)
}

async function share () {
  debug('[Web Share API] - Compartilhar')
  if (navigator.share) {
    const payload = {
      title: 'Web Fundamentals',
      text: 'Check out Web Fundamentals — it rocks!',
      url: 'https://developers.google.com/web'
    }
    try {
      await navigator.share(payload)
    } catch (e) {
      debug('[Web Share API] - Erro', e.message())
    }
  } else {
    debug('[Web Share API] - Não sportado')
  }
}

function sleep (delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
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
    share: async () => {
      await share()
    },
    shareSleep: async () => {
      await sleep(500)
      await share()
    }
  }
}
</script>
