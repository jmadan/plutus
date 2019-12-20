import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Backdrop, CircularProgress } from '@material-ui/core'
import { useParams } from 'react-router-dom'
const rp = require("request-promise")
const cheerio = require("cheerio")
import CouponList from './modules/views/CouponList'

const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const fetchCoupons = async (category) => {
    let coupons = []
    let options = {
        uri: `https://cors-anywhere.herokuapp.com/https://www.ozbargain.com.au/cat/${category}`,
        headers: {
          'Content-Type': 'text/html',
          'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
          'Origin': 'https://plutus-god-of-wealth.herokuapp.com/'
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

export default function Coupon() {
  const classes = useStyles();
  const [valid_coupons, setCoupons] = useState([])
  const [working, setWorking] = useState(false)
  let { cat } = useParams();

  useEffect(() => {
      async function getCoupons(cat){
          setWorking(true)
          let result = await fetchCoupons(cat)
          setCoupons(Object.assign(valid_coupons, result))
          console.log(JSON.stringify(valid_coupons))
          setWorking(false)
      }
      getCoupons(cat)
  }, [cat])

  
//   let active_coupons = fetchCoupons(cat)

  return (
    <React.Fragment>
        <Typography variant="h2" align="center" component="h2" gutterBottom>
            {cat}
        </Typography>
        {working ? <Backdrop
            className={classes.backdrop}
            open={working}
         >
            <CircularProgress color="inherit" />
        </Backdrop> : <CouponList coupons={valid_coupons} />}
        
    </React.Fragment>
  );
}

