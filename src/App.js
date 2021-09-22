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

function App(props) {
  return (
    <div className="App color-theme-blue">
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/users" exact component={Users} />
          <Route path="/creators" exact component={Creators} />
          <Route path="/supporters" exact component={Supporters} />
          <Route path="/blocked" exact component={Blocked} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts-public" exact component={PublicPost} />
          <Route path="/posts-private" exact component={PrivatePost} />
          <Route path="/posts-deleted" exact component={DeletedPost} />
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/payout" exact component={Payout} />
        </Switch>
        <NotificationContainer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps)(App);
