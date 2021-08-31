import  unirest from 'unirest'

class tokenCard{

    tokenization(req,response){


        var req = unirest('POST', 'https://api-sandbox.getnet.com.br/v1/tokens/card')
        .headers({
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer ebb86e3d-0609-42a8-80c7-ff09de134240" 
        })
        // .send("{\r\n  \"card_number\": \"5155901222280001\",\r\n  \"customer_id\": \"customer_21081826\"\r\n}")
        .end(function (res) { 
          if (res.error){
            return  response.status(401).json(res.error) 
            // console.log(res.error) 
          } else{
            return response.json(res.body);
          }
        });
    }

}

export default new tokenCard()
