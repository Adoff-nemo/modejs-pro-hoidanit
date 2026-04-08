// const express = require("express");
import express from "express";
const app = express();
const port = 8080;

app.get("/", (req,res) =>{
    res.send( "Hello World")
})

app.get("/abc", (req,res) =>{
    res.send( "Hello AE")
})

app.listen (port, () =>{
    console.log(`App is running on port: ${port}`)
})