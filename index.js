import express from 'express'
import cheerio from 'cheerio'
const rp = require("request-promise")
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

app.get('/coupons', async (req,res) => {
    let couponList = await fetchCoupons()
    return res.send(couponList)
})

app.listen(PORT, () => {
    console.log(`Plutus listening on port ${PORT}!`)
})

const fetchCoupons = async () => {
    let coupons = []
    let options = {
        uri: 'https://www.ozbargain.com.au/cat/electrical-electronics',
        headers: {
          'Content-Type': 'text/html',
          'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        }
      };

    let res = await rp(options);
    
    let $ = cheerio.load(res, {
        withDomLvl1: true,
        normalizeWhitespace: true,
        xmlMode: false,
        decodeEntities: true
    });

    $.prototype.logHtml = function() {
        console.log('----------- ',this.html());
      };

    $('.n-right').each((i, el) => {
        if(!$(el).children('h2.title').children('span').length){
            if($(el).children('div.content').find('div.couponcode').length){
                coupons.push({
                    title: $(el).children('h2.title').text(),
                    coupon: $(el).children('div.content').children('div.couponcode').text()
                })
            }
        }
    })

    return coupons
}