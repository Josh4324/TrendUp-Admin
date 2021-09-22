import React from "react";
import Footer from "../components/common/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
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
              <div className="d-flex justify-left align-items-center flex-wrap grid-margin">
                <div style={{ marginRight: "20px" }}>
                  <h4 className="mb-3 mb-md-0">Users</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-xl-12 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="dataTableExample"
                          className="table table-hover mb-0"
                        >
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
                                <span className="badge badge-secondary">
                                  Supporter
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
                                <span className="badge badge-secondary">
                                  Supporter
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
                                <span className="badge badge-secondary">
                                  Supporter
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
                                <span className="badge badge-secondary">
                                  Supporter
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
                                <span className="badge badge-secondary">
                                  Supporter
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
                                <span className="badge badge-secondary">
                                  Supporter
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
    </div>
  );
}
