import express from 'express'
import cheerio from 'cheerio'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

const PORT = process.env.PORT || 8080

app.get('/',(req,res) => {
    return res.send('This is just an empty page')
})

app.listen(PORT, () => {
    console.log(`Plutus listening on port ${PORT}!`)
})