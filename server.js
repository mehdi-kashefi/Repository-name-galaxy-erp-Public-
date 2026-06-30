const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>res.json({service:"Galaxy ERP",status:"ONLINE",time:new Date()}));

let repairs=[];
app.get("/repair",(req,res)=>res.json(repairs));
app.post("/repair",(req,res)=>{
 const item={id:Date.now(),...req.body};
 repairs.push(item);
 res.json(item);
});

app.post("/ai",(req,res)=>{
 const issue=(req.body.issue||"").toLowerCase();
 res.json({
   problem:issue.includes("no power")?"Power Issue":"Unknown",
   cost:issue.includes("no power")?"$20-$50":"N/A"
 });
});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`Galaxy ERP running on ${PORT}`));
