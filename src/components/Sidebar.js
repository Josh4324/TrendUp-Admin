import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../community.css";
import "../style.css";

function Sidebar(props) {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("trend-user");
    props.dispatch({ type: "LOGIN_FAILURE" });
    window.location.href = "/login";
    history.push("/login");
  };
  return (
    <div>
      <nav className="sidebar">
        <div className="sidebar-header">
          <a href="/" className="sidebar-brand">
            Trendupp<span style={{ paddingLeft: "5px" }}>Admin</span>
          </a>
        </div>
        <div className="sidebar-body">
          <ul className="nav">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                <i className="link-icon" data-feather="box"></i>
                <span className="link-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item nav-category">Main</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#users"
                role="button"
                aria-expanded="false"
                aria-controls="tables"
              >
                <i className="link-icon" data-feather="users"></i>
                <span className="link-title">Users</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="users">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="/users" className="nav-link">
                      All Users
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/creators" className="nav-link">
                      Creators
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/supporters" className="nav-link">
                      Supporters
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/blocked" className="nav-link">
                      Blocked Users
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#articlesNav"
                role="button"
                aria-expanded="false"
                aria-controls="tables"
              >
                <i className="link-icon" data-feather="edit-3"></i>
                <span className="link-title">Posts</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="articlesNav">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="/posts" className="nav-link">
                      All Posts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/posts-public" className="nav-link">
                      Public Posts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="posts-private" className="nav-link">
                      Private Posts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="posts-deleted" className="nav-link">
                      Deleted Posts
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item nav-category">Finance</li>
            <li className="nav-item">
              <a href="/transactions" className="nav-link">
                <i className="link-icon" data-feather="trending-up"></i>
                <span className="link-title">Transactions</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/payout" className="nav-link">
                <i className="link-icon" data-feather="arrow-up-right"></i>
                <span className="link-title">Payout</span>
              </a>
            </li>

            <li className="nav-item nav-category">Account</li>

            <li className="nav-item" style={{ cursor: "pointer" }}>
              <span onClick={logout} className="nav-link">
                <i className="link-icon" data-feather="log-out"></i>
                <span className="link-title">Sign Out</span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    data: state.user,
  };
};

export default connect(mapStateToProps)(Sidebar);
