// const express = require("express");
import express from "express";
// import 'dotenv/config' - only TS
require ('dotenv').config(); //require .env library - for js + ts

const app = express();
const port = process.env.port || 8080;

app.get("/", (req,res) =>{
    res.send( "Hello World Nodemon")
})

app.get("/abc", (req,res) =>{
    res.send( "Hello AE")
})

app.get("/html", (req,res) =>{
    res.send(`<h1 style="color:red">Hello mấy ní</h1>`)
})

app.listen (port, () =>{
    console.log(`App is running on port: ${port}`)
    console.log(`env.port: ${process.env.port}`)
})