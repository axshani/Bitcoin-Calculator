import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import routes from "routes";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.redirect && prop.path !== '')
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      if (prop.path)
        return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100vh",
      background: "linear-gradient(#a9ddd6, #58ced6)",
      // [theme.breakpoints.up("sm")]: {
      //   width: `calc(100% - ${240}px)`
      // },
      overflow: "auto",
      position: "relative",
      float: "left",
      // ...transition,
      maxHeight: "100%",
      width: "100%",
      overflowScrolling: "touch"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flex: 1,
      margin: "3%",
    },
    contacts: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft:'5%'
    },
    largeIcon: {
      width: 45,
      height: 45,
      fontSize : 45,
      marginTop : '10px'
    },
  })
);

const Dashboard = () => {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <div style={{marginTop : '15%', width : '60px'}}> */}
      {/* {routes.map((route) => 
        !route.hidden ?
        <NavLink
        to={route.path}
        activeStyle={{
          fontWeight: "bold",
          color: "black",
          display: "block"
        }}
        style={{
          textDecoration: "none",
          // "&:hover,&:focus,&:visited,&": {
          color: "#7C7E8E"
          // }
        }} 
      >
        <IconButton className={classes.largeIcon} aria-label="settings">
        {route.icon && <route.icon className={classes.largeIcon}></route.icon>}
        </IconButton>
        </NavLink> : null
      )} */}
      {/* </div> */}
      <div style={{width : '100%'}}>
      {/* <div className={classes.contacts}>
        <ImportatntContacts></ImportatntContacts>
      </div> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {switchRoutes}
      </main>
      </div>
      {/* </AppContext.Provider> */}
    </div>
  );
};

export default Dashboard;
