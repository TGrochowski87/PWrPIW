import React from "react";
import { List as ListIcon, Create as CreateIcon } from "@material-ui/icons";
import {
  makeStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import ForumPage from "./ForumPage";
import NewEntry from "./NewEntry";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "20%",
  },
  drawerPaper: {
    backgroundColor: "darkgrey",
    width: "20%",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const NavigationDrawer = ({
  recordList,
  addRecord,
  editRecord,
  groupRecordList,
  addGroupRecord,
  editGroupRecord,
  usedTags,
  setUsedTags,
}) => {
  const classes = useStyles();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={`${classes.toolbar} menu`}>
          <h4>MENU</h4>
        </div>
        <Divider />
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Forum" />
            </ListItem>
          </Link>
          <Link to="/new" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="New Entry" />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ForumPage
              {...props}
              recordList={recordList}
              editRecord={editRecord}
              groupRecordList={groupRecordList}
              editGroupRecord={editGroupRecord}
              usedTags={usedTags}
              setUsedTags={setUsedTags}
            />
          )}
        />
        <Route
          path="/new"
          render={(props) => (
            <NewEntry
              {...props}
              addRecord={addRecord}
              addGroupRecord={addGroupRecord}
              usedTags={usedTags}
              setUsedTags={setUsedTags}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default NavigationDrawer;
