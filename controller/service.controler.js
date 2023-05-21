const db=require("../db.js")

class ServiceControler{

    async getService(req, res){
        const service =await db.query('select * from "Service"')
        res.header("content-type","application/json")
        res.header("Access-Control-Allow-Origin", "*")
        res.json(service.rows)
    }

}
module.exports=new ServiceControler()