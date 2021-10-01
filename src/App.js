import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/index";
import Users from "./pages/Users";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import "./community.css";
import "./style.css";
import Creators from "./pages/Creators";
import Supporters from "./pages/Supporters";
import Blocked from "./pages/Blocked";
import Posts from "./pages/Posts";
import PublicPost from "./pages/PublicPost";
import PrivatePost from "./pages/PrivatePost";
import DeletedPost from "./pages/DeletedPost";
import Transactions from "./pages/Transactions";
import Payout from "./pages/Payout";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

function App(props) {
  const user = props.user.user;
  console.log(user);
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/login">
            {user === null ? <Login /> : <Dashboard />}
          </Route>

          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/creators" component={Creators} />
          <PrivateRoute exact path="/supporters" component={Supporters} />
          <PrivateRoute exact path="/blocked" component={Blocked} />
          <PrivateRoute exact path="/posts" component={Posts} />

          <PrivateRoute exact path="/posts-public" component={PublicPost} />
          <PrivateRoute exact path="/posts-private" component={PrivatePost} />
          <PrivateRoute exact path="/posts-deleted" component={DeletedPost} />

          <PrivateRoute exact path="/transactions" component={Transactions} />
          <PrivateRoute exact path="/payout" component={Payout} />
        </Switch>
        <NotificationContainer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(App);
