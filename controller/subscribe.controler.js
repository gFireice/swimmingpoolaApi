const db=require("../db.js")

class SubscribeControler{

    async getSubscribe(req, res){
        const subsribe =await db.query('select * from "Subscription"')
        res.header("content-type","application/json")
        res.header("Access-Control-Allow-Origin", "*")
        res.json(subsribe.rows)
    }

}
module.exports=new SubscribeControler()