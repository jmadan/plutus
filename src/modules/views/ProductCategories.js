import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import Typography from '../components/Typography';
import Coupon from '../../coupon'

const preventDefault = event => event.preventDefault();

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      img: require('../../public/imgs/auto-automobile-automotive-car-305070.jpg'),
      url:
        'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
      title: 'Automotive',
      param: 'automotive',
      width: '40%',
    },
    {
      img: require('../../public/imgs/magazines-on-shelves-2927585.jpg'),
      url:
        'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
      title: 'Books & Magazines',
      param: 'books-magazines',
      width: '20%',
    },
    {
      img: require('../../public/imgs/close-up-photo-of-gaming-keyboard-2115257.jpg'),
      url:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
      title: 'Computing',
      param: 'computing',
      width: '40%',
    },
    {
      img: require('../../public/imgs/white-led-take-out-signage-hanging-891393.jpg'),
      url:
        'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
      title: 'Dining & Takeaway',
      param: 'dining-takeaway',
      width: '38%',
    },
    {
      img: require('../../public/imgs/accomplishment-ceremony-education-graduation-267885.jpg'),
      url:
        'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
      title: 'Education',
      param: 'education',
      width: '38%',
    },
    {
      img: require('../../public/imgs/view-of-vintage-camera-325153.jpg'),
      url:
        'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80',
      title: 'Electrical & Electronics',
      param: 'electrical-electronics',
      width: '24%',
    },
    {
      img: require('../../public/imgs/view-of-vintage-camera-325153.jpg'),
      url:
        'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80',
      title: 'Entertainment',
      param: 'entertainment',
      width: '40%',
    },
    {
      img: require('../../public/imgs/assorted-clothes-996329.jpg'),
      url:
        'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
      title: 'Fashion & Apparel',
      param: 'fashion-apparel',
      width: '20%',
    },
    {
      img: require('../../public/imgs/rolled-20-u-s-dollar-bill-164527.jpg'),
      url:
        'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
      title: 'Financial',
      param: 'financial',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Find your coupons
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                // backgroundImage: `url(${image.url})`,
                backgroundImage: `url(${image.img})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
            {/* <Link to={`/coupons/${image.param}`}> */}
              <Typography
                component={Link}
                to={`/coupons/${image.param}`}
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
              {/* </Link> */}
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
