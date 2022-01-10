<template>
<div>
  <b-container class="m-3 p-3 bg-info" fluid="md">
    <b-row>
     <b-col>
        <b-form-input class="col-sm-7" v-model="imgTxt" placeholder="Enter your image search"></b-form-input>
     </b-col>
     <b-col>
        <b-button class="col-sm-5" @click="getImgData" variant="danger">Get images</b-button>
     </b-col>
    </b-row>
  </b-container>
 
  <div class="list m-4">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="row">
      <div class="column bg-nav mx-3"  v-for="(item ) in valList.slice(0,5)" :key=item.id>
          <img  class="p-4 lil" :src="item.previewURL" />
      </div>
      <div class="column bg-nav mx-3 my-3"  v-for="(item ) in valList.slice(5,11)" :key=item.id>
          <img  class="p-4 lil" :src="item.previewURL" />
      </div>
      <div class="column bg-nav mx-3 my-3"  v-for="(item ) in valList.slice(11)" :key=item.id>
          <img  class="p-4 lil" :src="item.previewURL" />
      </div>

  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import service from '@/components/service.js'
export default {
  name: 'List',
  data() {
      return {
          valList:'',
          nn:'',
          imgTxt:'flower'
          
      }
  },
  components: {
    
  },
  methods:{
   async getImgData(){
     this.valList = await service.getListofImgs(this.imgTxt);
      }
    },
  async mounted(){
    this.valList = await service.getListofImgs(this.imgTxt);
    console.log(this.valList);
  }
}
</script>
<style scoped>
.bg-nav{
    /* background-color: #244c74;
    color:blanchedalmond; */
    width:200px;
    height:200px;
    border-radius:10px;
    display: inline-flex;
    
}
.lil{
    width:200px;
    height:200px;
    background-color: #244c74;
    border-radius:10px;
}
body{
    text-align:left;
}
</style>
