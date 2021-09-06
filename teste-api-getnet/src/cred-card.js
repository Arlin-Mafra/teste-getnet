import axios from "axios";

class Credit{

    credCard(request,response){

      const data = request.body

      const { authorization } = request.headers

      var config = {
        method: 'post',
        url: 'https://api-sandbox.getnet.com.br/v1/payments/credit',
        headers: { 
          "Accept": "application/json, text/plain, */*",
          'Content-type': 'application/json; charset=utf-8',
          'Authorization': authorization 
        },
        data : data,
      };
      
      axios(config)
      .then(function (retorno) {
        return response.json(retorno.data);
      })
      .catch(function (retorno) {
        return response.status(400).json(retorno)
      });
     
    }

}

export default new Credit()
