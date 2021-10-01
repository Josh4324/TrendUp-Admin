import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/common/Footer";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { getCreators, getTotalAmount } from "../utils/apiCalls";

function Transactions(props) {
  const token = props.user.user.token;
  const [transact, setTransact] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getTotalAmount(token);
      console.log(result.payment);
      setTransact(result.payment);
    };

    run();
    return () => {};
  }, []);
  return (
    <div>
      <div class="sidebar-dark">
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
                  <h4 class="mb-3 mb-md-0">Transactions</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-xl-12 stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table id="dataTableExample" class="table">
                          <thead>
                            <tr>
                              <th>Creator</th>
                              <th>Supporter</th>
                              <th>Amount</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {transact.map((item) => {
                              return (
                                <tr>
                                  <td>{item.user.brandName}</td>
                                  <td>
                                    {item.firstName} {item.lastName}
                                  </td>
                                  <td>₦{item.amount}</td>
                                  <td class="date-cell">
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

export default connect(mapStateToProps)(Transactions);
