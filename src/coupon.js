import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
const rp = require("request-promise")

const useStyles = makeStyles(theme => ({}));

const fetchCoupons = async (category) => {
    let coupons = []
    let options = {
        uri: `https://www.ozbargain.com.au/cat/${category}`,
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

export default function Coupon() {
  const classes = useStyles();
  let { cat } = useParams();

  let active_coupons = fetchCoupons(cat)


  return (
    <React.Fragment>
        <Typography>
        Coupon page - {cat}
        <br />
        {active_coupons.length}
        </Typography>
    </React.Fragment>
  );
}

