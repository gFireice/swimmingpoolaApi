const Router= require('express')
const router =new Router()
const EmployesControler=require("../controller/employes.controler")


router.get('/employess',EmployesControler.getEmployes)








module.exports = router