const db=require("../db.js")

class EmployesControler{

    async getEmployes(req, res){
        const emloyess =await db.query('select * from "Employess"')
        res.header("content-type","application/json")
        res.header("Access-Control-Allow-Origin", "*")
        res.json(emloyess.rows)
    }

}
module.exports=new EmployesControler()