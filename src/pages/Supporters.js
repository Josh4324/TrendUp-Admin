import React from "react";
import Footer from "../components/common/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

export default function Supporters() {
  return (
    <div>
      <div className="sidebar-dark">
        <div class="main-wrapper">
          <Sidebar />
          <div class="page-wrapper">
            <nav class="navbar d-block d-md-none">
              <a href="#" class="sidebar-toggler">
                <i data-feather="menu"></i>
              </a>
            </nav>

            <div class="page-content">
              <div class="d-flex justify-left align-items-center flex-wrap grid-margin">
                <div style={{ marginRight: "20px" }}>
                  <h4 class="mb-3 mb-md-0">Supporters</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-xl-12 stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table
                          id="dataTableExample"
                          class="table table-hover mb-0"
                        >
                          <thead>
                            <tr>
                              <th class="pt-0">#</th>
                              <th class="pt-0">Brand Name</th>
                              <th class="pt-0">Email</th>
                              <th class="pt-0">Name</th>
                              <th class="pt-0">User Type</th>
                              <th class="pt-0">Reg. Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Supporter
                                </span>
                              </td>
                              <td>January 07, 2021; 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>
                                <a href="supporter-profile.html">Peter</a>
                              </td>
                              <td>example@gmail.com</td>
                              <td>Peter Atero</td>
                              <td>
                                <span class="badge badge-secondary">
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
