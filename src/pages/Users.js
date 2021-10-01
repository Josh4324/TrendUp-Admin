import React, { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { getAllUsers } from "../utils/apiCalls";

function Users(props) {
  const token = props.user.user.token;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getAllUsers(token);
      console.log(result);
      setUsers(result);
    };

    run();
    return () => {};
  }, []);
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
                            {users.map((item, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>
                                    {item.brandName === null
                                      ? "None"
                                      : item.brandName}
                                  </td>
                                  <td>{item.email}</td>
                                  <td>
                                    {item.firstName} {item.lastName}
                                  </td>
                                  <td>
                                    {item.userType === "creator" ? (
                                      <span className="badge badge-primary">
                                        {item.userType}
                                      </span>
                                    ) : (
                                      <span className="badge badge-secondary">
                                        {item.userType}
                                      </span>
                                    )}
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

export default connect(mapStateToProps)(Users);
