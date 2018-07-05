<template>
  <div class="home">
    HOME
    <br>
    {{home}}
  </div>
</template>
<script>
import { db } from '@/main.js'
export default {
  data () {
    return {
      home: []
    }
  },
  firestore () {
    return {
      home: db.collection('home')
    }
  }
}
</script>
