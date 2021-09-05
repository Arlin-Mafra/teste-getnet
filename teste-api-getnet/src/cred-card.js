import  unirest from 'unirest'

class Credit{

    credCard(request,response){

      var req = unirest('POST', 'https://api-sandbox.getnet.com.br/v1/payments/credit')
        .headers({
          "Accept": "application/json, text/plain, */*",
          'Content-type': 'application/json; charset=utf-8',
          "Authorization": "Bearer 3d639c3c-b5e1-42d6-b8fe-24911e9a90e8"  
        })
       
        .end(function (res) { 
          if (res.error){
            console.log(res.error)
            return response.json(res.error); 
          } 
          return response.status(200).json(res.body);
        });
    }

}

export default new Credit()
