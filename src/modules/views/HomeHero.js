import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'


const backgroundImage = require('../../public/imgs/multicolored-abstract-painting-1012982.jpg')

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Find your coupons
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                  {'New offers every week. New experiences, new surprises. '}
                  {'Shopping will no longer be alike.'}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/betainvite"
      >
        Interested?
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the joy of coupons
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
