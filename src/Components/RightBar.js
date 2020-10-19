import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Xena_a from '../images/xena_a.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function RightBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Avatar alt="Remy Sharp" src={Xena_a} />
        <Avatar alt="Travis Howard" src={require('../images/bush.jpg')} />
        <Avatar alt="Cindy Baker" src={require('../images/megan.jpg')} />
        <Avatar alt="Cindy Baker" src={require('../images/queen.jpg')} />
      </div>
    );
  }
