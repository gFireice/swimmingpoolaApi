const Router= require('express')
const router =new Router()
const ClientController=require("../controller/client.controler")

router.post('/client',ClientController.creatClient)
router.get('/client',ClientController.getClient)
router.delete('/client/:id',ClientController.deleteClient)
router.put('/client',ClientController.updateClient)
router.get('/client/:id',ClientController.getOneClient)



module.exports = router