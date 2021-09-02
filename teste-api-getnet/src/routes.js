import {Router} from 'express'
import  auth  from './auth'
import  tokenCard  from './card-token'

const route = Router()


//auth
route.post('/auth', auth.authorization)
//token card
route.post('/token', tokenCard.tokenization)

export default route