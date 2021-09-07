import axios from "axios"

class tokenCard{

    tokenization(request,response){
     
      const data = request.body
     
      const {authorization} = request.headers

      var config = {
        method: 'post',
        url: 'https://api-sandbox.getnet.com.br/v1/tokens/card',
        data : data,
        headers: { 
          "Accept": "application/json, text/plain, */*",
          'Content-type': 'application/json; charset=utf-8',
          'Authorization': authorization          
        },
       
      };

      axios(config)
      .then(function (retorno) {
        return response.json(retorno.data);
      })
      .catch(function (error) {
        console.log(error);
        return response.json(error)
      });
    
    }

}

export default new tokenCard()
