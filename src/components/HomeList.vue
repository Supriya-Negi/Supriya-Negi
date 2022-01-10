<template>
    <div>
        <div  v-for="(item, index) in list_show" :key=index>
       <div v-if="index%2==0" class="row p-5">
           <div class="col-md-8 text-justify">
                    {{item.text}}
           </div>
           <div class="col-md-4 text-center fs">
               <b-icon icon="cup-fill"></b-icon>
           </div>
       </div>
       <div v-else class="row p-5">
           
           <div class="col-md-4 text-center fs">
               <b-icon icon="bug-fill"></b-icon>
           </div>
           <div class="col-md-8 text-justify">
                    {{item.text}}
           </div>
       </div>
    </div>
    </div>
</template>

<script>
export default {
   name:'hmlist',
   data() {
       return {
           kk:'bug-fill',
           list_show:[{
               "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco        laboris nisi ut aliquip ex ea commodo consequat.",
               "img":"bug-fill"
           },
           {
               "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco        laboris nisi ut aliquip ex ea commodo consequat.",
               "img":"bug-fill"
           },
           {
               "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco        laboris nisi ut aliquip ex ea commodo consequat.",
               "img":"bug-fill"
           },{
               "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco        laboris nisi ut aliquip ex ea commodo consequat.",
               "img":"bug-fill"
           }]
       }
   },
}
</script>
<style scoped>
.fs{
    font-size: 6rem;
}
</style>