import axios from 'axios';
//import VueAxios from 'vue-axios';

export default {
  something(){
      alert("hello");
  },
  getListofImgs(imgTxt){
  
  return axios.get('https://pixabay.com/api/?key=25132140-cd0247c9c5afd6d611595e738&q='+imgTxt+'&image_type=photo')
  .then((resp)=>{
    return resp.data.hits;
  });
  //return data;
  }

}