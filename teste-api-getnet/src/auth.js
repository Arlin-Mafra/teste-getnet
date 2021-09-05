import axios from "axios"
import qs from 'qs'

 class auth {

   authorization(request,response){

    var data = qs.stringify({
      'scope':'oob',
      'grant_type':'client_credentials'
    })

    var config ={
      method:'post',
      url:'https://api-sandbox.getnet.com.br/auth/oauth/v2/token',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': process.env.CLIENT_CREDENTIALS
      },
      data:data
    }

    axios(config)
    .then( function(retorno){
        // console.log(retorno)
        return  response.json(retorno.data)
    })
    .catch(function(error){
      // console.log(error)
      return response.status(400).json(error.message)
    })
  }
 }
     
export default new auth()




