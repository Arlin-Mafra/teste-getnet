import  unirest from 'unirest'
// import { Request, Response} from 'express'

class tokenCard{

    tokenization(request,response){

      // const {accept} = request.headers

        // var req = unirest('POST', 'https://api-sandbox.getnet.com.br/v1/tokens/card')
        // .headers({
        //     "Accept": "application/json, text/plain, */*",
        //     "Content-Type": "application/json",
        //     "Authorization": "Bearer 3d639c3c-b5e1-42d6-b8fe-24911e9a90e8" 
        // })
        // .send("{\r\n  \"card_number\": \"5155901222280001\",\r\n  \"customer_id\": \"customer_21081826\"\r\n}")
        // .end(function (res:any) { 
        //   if (res.error){
        //     console.log(res.error) 
        //     return  response.status(401).json(res.error) 
        //   } else{
        //     return response.json(res.body);
        //   }
        // });


var myHeaders = new Headers();
myHeaders.append("Content-type", "application/json; charset=utf-8");

// var raw = "{\r\n  \"card_number\": \"4012001037141112\",\r\n  \"customer_id\": \"customer_21081826\"\r\n}";
var raw = request.body

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  // redirect: 'follow'
};

fetch("https://api-sandbox.getnet.com.br/v1/tokens/card", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }

}

export default new tokenCard()
