import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import Typography from '../components/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function CouponList(props) {
  const classes = useStyles();

  let items = props.coupons.map(c => (
    <Paper className={classes.root}>
      <Typography variant="h5" marked="center" align="center" component="h3">
          {c.title} - <b>{c.coupon}</b>
      </Typography>
      </Paper>
  ))

  let msg = <Typography variant="h4" marked="center" align="center" component="h2">
            {'No coupons found! :('}
            </Typography>

  return (
    <div className={classes.root}>
        {props.coupons.length? items : msg}
      {/* <List component="nav" aria-label="Available Coupons">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List> */}
    </div>
  );
}