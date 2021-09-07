import 'dotenv/config'

import { Form } from '@unform/web';
import { useEffect, useState } from "react";
import api from "./api";

 function App() {

  const [session, setSession] = useState('')
  const [cardNumner, setCardNumber] = useState('')
  const [cardToken, setCardToken] = useState('')
  const [amount, setAmount] = useState('')
  const [order_id, setOrder_id] = useState('')
  const [customer_id, setCustomer_id] = useState('')
  const [number_installments, setNumber_installments] = useState('')
  const [cardholder_name, setCardholder_name] = useState('')
  const [expiration_month, setExpiration_month] = useState(0)
  const [expiration_year, setExpiration_year] = useState(0)
  
  
 
  useEffect(()=>{
  getToken()
  },[])


  async function getToken(){
    const response = await api.post('/auth')
    console.log(response.data) 
    setSession(response.data.access_token)
  }

  async function getTokenCard(){
    api.defaults.headers.authorization = `Bearer ${session}`
    var config = {
      headers: {
        'Content-type': 'application/json'
      } 
    }  
    const response = await api.post('/token',{
      card_number:cardNumner
    },config)
    console.log(response.data)

    const{ number_token} = response.data

    setCardToken(number_token)
  }


  async function handleSubmit(data){
    // e.prevent.default()

    api.defaults.headers.authorization = `Bearer ${session}`
    var config = {
      headers: {
        'Content-type': 'application/json'
      } 
    } 
    const response = await  api.post('/credit',{
      seller_id: process.env.SELLER_ID,
      amount,
      order:{
        order_id,
      },
      customer:{
        customer_id,
        billing_address:{}
      },
      device:{},
      shippings:[{address:{}}],
      credit:{
        delayed:false,
        save_card_data:false,
        transaction_type:"FULL",
        number_installments,
        card:{
          number_token:cardToken,
          cardholder_name,
          expiration_month,
          expiration_year
        }
      }
    },config)

    console.log(response.data)
  }

  return (
  <>
    <h1>home page</h1> 


       <Form onSubmit={handleSubmit}>
         
          {/* seller_id:<input value='dc48ad16-f700-44f2-9517-e0b303d50cd6' name='seller_id' type='text'/><br /> */}
         
         <section id="dados-cartao">

            Numero do cartão: <input name="card_number" 
              width={300} value={cardNumner} onChange={e => setCardNumber(e.target.value)}
              onBlur={getTokenCard}  /><br />
            Nome impresso no cartão: <input value={cardholder_name} 
            onChange={e => setCardholder_name(e.target.value)}
            name='cardholder_name' type='text'/><br />
            Mês de validade do cartão: <input value={expiration_month} name='expiration_month'
            onChange={e => setExpiration_month(e.target.value)} type='number'/><br />

            Ano de validade do cartão: <input value={expiration_year} name='expiration_year' 
            onChange={e => setExpiration_year(e.target.value)} type='number'/><br />
        </section>


         Valor: <input value={amount} name='amount' 
         onChange={e =>setAmount(e.target.value)} type='number'/><br />

         Numero do pedido: <input value={order_id} onChange={e =>setOrder_id(e.target.value)}
          name='order_id' type='text'/><br />
         
         ID do cliente: <input value={customer_id} 
         onChange={e => setCustomer_id(e.target.value)} name='customer_id' type='text'/><br />

         Numero de parcelas: <input value={number_installments} name='number_installments'
         onChange={e => setNumber_installments(e.target.value)} 
         type='number'/><br />

         Token do cartão: <input value={cardToken} name='number_token' type='text'/><br />

        <button type="submit">Pagar</button>
       </Form>

   </>
  )
}

export default App

