const db=require("../db.js")

class ClientController{
    async creatClient(req, res){
        const {Firstname,LastName,Surname,BirthDay,RegDate,Phone,Mail,PlaceReg,Serial,Num,DateGet}=req.body
        const newPerson=await db.quary('Insert into Client(FirstName,LastName,SurName,BirthDay,RegistraarionDate,Phone,Mail,PlaceRegistration,SerialPassport,NumPassport,DateGet) values ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10$,$11) RETURNING *',[Firstname,LastName,Surname,BirthDay,RegDate,Phone,Mail,PlaceReg,Serial,Num,DateGet])
   res.json(newPerson.rows[0])
    }
    async getClient(req, res){
      const client =await db.query('select * from "Client"')
        res.header("content-type","application/json")
        res.header("Access-Control-Allow-Origin", "*")
        res.json(client.rows)
    }
    async getOneClient(req, res){
        const id =req.params.id
        const client =await db.query('select * from "Client" where "ClientID" = $1',[id])
        res.header("content-type","application/json")
        res.header("Access-Control-Allow-Origin", "*")
        res.json(client.rows[0])
    }
    async updateClient(req, res){
        const {Firstname,LastName,Surname,BirthDay,RegDate,Phone,Mail,PlaceReg,Serial,Num,DateGet,id}=req.body
        const newPerson=await db.quary('update "Client" set "FirstName" =$1,"LastName" =$2, "SurName" =$3,"BirthDay" =$4, "RegistraarionDate" =$5, "Phone" =$6, "Mail" =$7, "PlaceRegistration" =$8, "SerialPassport" =$9, +"NumPassport" =$10,"DateGet" =$11, "ClientID"=$12 RETURNING *)',[Firstname,LastName,Surname,BirthDay,RegDate,Phone,Mail,PlaceReg,Serial,Num,DateGet, id])
        res.json(newPerson.rows[0])
    }
    async deleteClient(req, res){
        const id =req.params.id
        const client =await db.query('delete from "Client" where "ClientID" = $1',[id])
        res.header("content-type","application/json")
        res.header("Access-Control-Allow-Origin", "*")
        res.json(client.rows[0])
    }
}

module.exports=new ClientController()