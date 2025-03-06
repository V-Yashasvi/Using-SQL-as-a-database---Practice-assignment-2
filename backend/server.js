const express=require('express')
const app=express()
const mysql=require('mysql2')
require('dotenv').config()
const port=process.env.PORT

const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})

const connection=db.connect((err)=>{
    if(err){
        console.log("Connection failed", err)
        return
    }
    console.log("Connected to database successfully")
})

app.listen(port, async()=>{
    try {
        await connection
        console.log(`App is listening on http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
})