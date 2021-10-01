import React, { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { getCreators } from "../utils/apiCalls";

function Creators(props) {
  const token = props.user.user.token;
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getCreators(token);
      setCreators(result);
      console.log(result);
    };

    run();
    return () => {};
  }, []);
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
                  <h4 class="mb-3 mb-md-0">Creators</h4>
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
                            {creators.map((item, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{item.brandName}</td>
                                  <td>{item.email}</td>
                                  <td>
                                    {item.firstName} {item.lastName}
                                  </td>
                                  <td>
                                    <span class="badge badge-primary">
                                      Creator
                                    </span>
                                  </td>
                                  <td>
                                    {new Date(item.createdAt).toDateString()} at{" "}
                                    {new Date(
                                      item.createdAt
                                    ).toLocaleTimeString()}
                                  </td>
                                </tr>
                              );
                            })}
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

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    data: state.user
  };
};

export default connect(mapStateToProps)(Creators);
