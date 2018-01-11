require('dotenv').config();

const express= require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, session = require('express-session')
, cors = require('cors')
, path = require('path')
, passport = require('passport')

const app= express();

app.use(cors())
app.use(bodyParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
