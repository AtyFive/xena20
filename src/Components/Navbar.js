import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
//import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import TodayIcon from '@material-ui/icons/Today';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }



export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component={RouterLink} to="/home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={RouterLink} to="/archive">
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Family archive" />
        </ListItem>

        <ListItem button component={RouterLink} to="/uploads">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Uploads" />
        </ListItem>

        <ListItem button component={RouterLink} to="/familyTree">
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary="Family tree" />
        </ListItem>

        <ListItem button component={RouterLink} to="/timeLine">
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Timeline" />
        </ListItem>

        <ListItem button component={RouterLink} to="/calendar">
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>

      </List>
      
      
    </div>
  );
}
