import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/common/Footer";

export default function Payout() {
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
                            <tr>
                              <td>1</td>
                              <td>
                                <a href="creator-profile.html">Tope Agboola</a>
                              </td>
                              <td>₦500</td>
                              <td>January 07, 2021 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                                <a href="creator-profile.html">Tope Agboola</a>
                              </td>
                              <td>₦500</td>
                              <td>January 07, 2021 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                                <a href="creator-profile.html">Tope Agboola</a>
                              </td>
                              <td>₦500</td>
                              <td>January 07, 2021 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                <a href="creator-profile.html">Tope Agboola</a>
                              </td>
                              <td>₦500</td>
                              <td>January 07, 2021 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <a href="creator-profile.html">Tope Agboola</a>
                              </td>
                              <td>₦500</td>
                              <td>January 07, 2021 04:22 pm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>
                                <a href="creator-profile.html">Tope Agboola</a>
                              </td>
                              <td>₦500</td>
                              <td>January 07, 2021 04:22 pm</td>
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
