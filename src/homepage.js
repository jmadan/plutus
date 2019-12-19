import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeHero from './modules/views/HomeHero';
import ProductCategories from './modules/views/ProductCategories';
// import theme from './theme'

const useStyles = makeStyles(theme => ({}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
        <HomeHero/>
        <ProductCategories />
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};