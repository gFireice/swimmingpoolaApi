const express = require("express");
const clietnRouter=require("./routes/client.routes")
const employesRouter=require("./routes/employess.router")
const subsribeRouter=require("./routes/subscribe.router")
const serviceRouter=require("./routes/service.controler")


const PORT = process.env.PORT || 8081
const bodyParser = require('body-parser')
const app =express()

app.use(express.json())


app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req, res)=> res.send('HELLO ps !!!!!!!!'))

app.use('/api', clietnRouter, employesRouter, subsribeRouter, serviceRouter)
app.listen(PORT, () => console.log(`Server started ${PORT}`))
