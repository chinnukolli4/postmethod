const express=require("express")
const app=express()
const cors=require ("cors")
const bodyParser=require("body-parser")
const port=2003


app.use(cors())

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())
app.get("/",(req,res)=>{
	res.send("server is started")
})
app.post("/newData",(req,res)=>{
	console.log(req.body)
})
app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.age
	const{name,age}=req.body;
	console.log(name,age)
})
app.listen(port,()=>console.log("server is running on port 2003"))