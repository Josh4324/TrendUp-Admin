import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { getCreators, getTotalAmount } from "../utils/apiCalls";
import Sidebar from "../components/Sidebar";
import Footer from "../components/common/Footer";
import { Chart } from "react-charts";
import { useHistory } from "react-router-dom";
import "../community.css";
import "../style.css";

function Dashboard(props) {
  const token = props.user.user.token;
  const [creators, setCreators] = useState([]);
  const [numCreators, setNumCreators] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const run = async () => {
      const result = await getCreators(token);
      let newCreators = result.slice(0, 10);
      const result2 = await getTotalAmount(token);
      console.log(result2);
      setTotalAmount(result2.amount);
      setCreators(newCreators);
      setNumCreators(result.length);
    };

    run();
    return () => {};
  }, []);
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
                      <h3 className="mb-4">{numCreators}</h3>
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
                      <h3 className="mb-4">₦{totalAmount}</h3>
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
                                  <span className="badge badge-primary">
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
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    data: state.user
  };
};

export default connect(mapStateToProps)(Dashboard);
