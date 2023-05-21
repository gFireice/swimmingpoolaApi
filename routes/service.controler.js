const Router= require('express')
const router =new Router()
const ServiceControler=require("../controller/service.controler")


router.get('/service',ServiceControler.getService)








module.exports = router