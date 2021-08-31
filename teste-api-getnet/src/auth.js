import unirest from 'unirest'


 class auth {

   authorization(req,response){

    var req = unirest('POST', 'https://api-sandbox.getnet.com.br/auth/oauth/v2/token')
    .headers({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': process.env.CLIENT_CREDENTIALS
    })
    .send('scope=oob')
    .send('grant_type=client_credentials')
    .end(function (res) { 
      if (res.error){
        return  response.status(401).json(res.error) 
      } 
    return response.json({"access_token": res.body.access_token});
    });
  }
 }
     
export default new auth()




