import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/common/Footer";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { getAllPayouts } from "../utils/apiCalls";

function Payout(props) {
  const token = props.user.user.token;
  const [payout, setPayouts] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getAllPayouts(token);
      console.log(result);
      setPayouts(result);
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
                <div class="col-md-4 ">
                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-title">Minimum Payout</h6>
                      <form class="forms-sample">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            autocomplete="off"
                            value="5000"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">
                          Update Minimum Payout
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="wallet-card card rounded">
                    <div class="card-body text-center">
                      <h6 class="card-title text-muted mb-2">
                        CURRENT EARNING
                      </h6>
                      <h2 class="wallet-balance mb-2">₦754,000</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="wallet-card wallet-card-secondary card rounded">
                    <div class="card-body text-center">
                      <h6 class="card-title text-muted mb-2">
                        Total lifetime EARNING
                      </h6>
                      <h2 class="wallet-balance mb-2">₦1,754,000</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-lg-12 col-xl-12 stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-title">Payout</h6>
                      <div class="table-responsive">
                        <table id="dataTableExample" class="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>User</th>
                              <th>Payout Amount</th>
                              <th>Payout Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {payout.map((item, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{item?.user?.brandName}</td>
                                  <td>₦{item?.amount}</td>
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
    data: state.user,
  };
};

export default connect(mapStateToProps)(Payout);
