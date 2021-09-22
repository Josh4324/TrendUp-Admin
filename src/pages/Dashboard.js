import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import Sidebar from "../components/Sidebar";
import Footer from "../components/common/Footer";
import { useHistory } from "react-router-dom";
import "../community.css";
import "../style.css";

function Dashboard(props) {
  let history = useHistory();
  return (
    <div className="sidebar-dark">
      <div className="main-wrapper">
        <Sidebar />
        <div className="page-wrapper">
          <nav className="navbar d-block d-md-none">
            <Link to="/" className="sidebar-toggler">
              <i data-feather="menu"></i>
            </Link>
          </nav>

          <div className="page-content">
            <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
              <div>
                <h4 className="mb-3 mb-md-0">Welcome to Dashboard</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title mb-0">Creators</h6>
                      <h3 className="mb-4">3,897</h3>
                    </div>

                    <div className="monthly-sales-chart-wrapper">
                      <canvas id="monthly-student-chart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title mb-0">Support Transactions</h6>
                      <h3 className="mb-4">₦899,200</h3>
                    </div>

                    <div className="monthly-sales-chart-wrapper">
                      <canvas id="monthly-sensei-chart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-xl-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title mb-0">New Creators</h6>
                      <a href="/users" className="btn btn-outline-primary mb-3">
                        View All
                      </a>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th className="pt-0">#</th>
                            <th className="pt-0">Brand Name</th>
                            <th className="pt-0">Email</th>
                            <th className="pt-0">Name</th>
                            <th className="pt-0">User Type</th>
                            <th className="pt-0">Reg. Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              <a href="creator-profile.html">Peter</a>
                            </td>
                            <td>example@gmail.com</td>
                            <td>Peter Atero</td>
                            <td>
                              <span className="badge badge-primary">
                                Creator
                              </span>
                            </td>
                            <td>January 07, 2021; 04:22 pm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth,
    data: state.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
