require('dotenv').config();

const express= require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, session = require('express-session')
, cors = require('cors')
, path = require('path')
, passport = require('passport')
, connectionString = process.env.HEROKU_URI 

const app= express();

///// APP SETUP /////
app.use(cors())
app.use(bodyParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../build')); ///is this like this normally? relation to server?


///// MASSIVE SETUP /////
massive({connectionString
}).then(db=>{
    app.set('db',db)
    console.log('massive is working?')

     db.createPracticeTable().then(response=>{
            console.log(response,'practice table created')
            }).catch(err=>console.log(err))
        


}).catch(err=>console.log(err))




///// ENDPOINTS /////
 app.get("/test", (req,res)=>{
console.log('this is working ')
 res.status(200).send('this is working')

}) 

app.get("/getAllCharacters", (req,res)=>{
    let db=req.app.get('db')

    db.getAllCharacters()
    .then(results=>{
        console.log('characters returned are', results)
        res.status(200).send(results)
    })
    .catch(err=>{console.log(err, 'see getAllCharacters server endpoint')})
}) 


//////// VERY LAS ENDPOINT ///////

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

/////////VERY END

let PORT = 3002;
    app.listen(PORT, ()=>{
        console.log('Listening on port ${PORT}')
    })