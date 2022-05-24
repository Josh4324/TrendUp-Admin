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
              <NavLink to="/" className="nav-link">
                <i className="link-icon" data-feather="box"></i>
                <span className="link-title">Dashboard</span>
              </NavLink>
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
                    <NavLink to="/users" className="nav-link">
                      All Users
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/creators" className="nav-link">
                      Creators
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/supporters" className="nav-link">
                      Supporters
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blocked" className="nav-link">
                      Blocked Users
                    </NavLink>
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
                    <NavLink to="/posts" className="nav-link">
                      All Posts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/posts-public" className="nav-link">
                      Public Posts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/posts-private" className="nav-link">
                      Private Posts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/posts-deleted" className="nav-link">
                      Deleted Posts
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item nav-category">Finance</li>
            <li className="nav-item">
              <NavLink to="/transactions" className="nav-link">
                <i className="link-icon" data-feather="trending-up"></i>
                <span className="link-title">Transactions</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/payout" className="nav-link">
                <i className="link-icon" data-feather="arrow-up-right"></i>
                <span className="link-title">Payout</span>
              </NavLink>
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
