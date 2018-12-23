import axios from "axios";

export const RestAPI = {
  getData: function(resourse){
       return axios.get(resourse).then((response)=>{
        return response;
      }).catch((err)=>{
        console.log(err);
      })
  
  }

} 