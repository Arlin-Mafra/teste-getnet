import {Router} from 'express'
import  auth  from './auth'
import  tokenCard  from './card-token'
import Credit from './cred-card'

const route = Router()


//auth
route.post('/auth', auth.authorization)
//token card
route.post('/token', tokenCard.tokenization)
//paymant credit 
route.post('/credit', Credit.credCard)

export default route