const Router= require('express')
const router =new Router()
const SubscribeControler=require("../controller/subscribe.controler")


router.get('/subscribe',SubscribeControler.getSubscribe)








module.exports = router