<template>
<div>
  <div class="home bg-nav">
  <header class="jumbotron container text-center space" >
    <h2> Explore the World</h2>
    <p class="txt-warning"> {{subTitle}}</p>
    
  </header>
  
  </div>
 <hmlist/>

  </div>
</template>

<script>
// @ is an alias to /src
import hmlist from '@/components/HomeList.vue'

export default {
  name: 'Home',
  components: {
    hmlist
  },
  data() {
    return {
      subTitle:'This is the place where you can experience the worlds best photograpgy ! ',
    }
  },
}
</script>

<style scoped>
.bg-nav{
    background-color: #244c74;
    color:blanchedalmond;
}
.space{
  padding: 128px 20px;
}
</style>
