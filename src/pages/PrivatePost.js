import React, { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { getAllPosts } from "../utils/apiCalls";
function PrivatePost(props) {
  const token = props.user.user.token;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getAllPosts(token);
      let newResult = result.filter((item) => {
        return item.postType !== "public";
      });
      console.log(newResult);
      setPosts(newResult);
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
                  <h4 class="mb-3 mb-md-0">Private Posts</h4>
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
                              <th>
                                <i class="link-icon" data-feather="image"></i>
                              </th>
                              <th>Title</th>
                              <th>User</th>
                              <th>Post Type</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {posts.map((item) => {
                              return (
                                <tr>
                                  <td class="py-1">
                                    {item.image === null ? (
                                      "No Image"
                                    ) : (
                                      <img src={item.image} alt="image" />
                                    )}
                                  </td>
                                  <td class="question-cell">{item.title}</td>

                                  <td>{item.brandName}</td>
                                  <td>
                                    {item.postType === "public" ? (
                                      <span class="badge badge-primary">
                                        Public
                                      </span>
                                    ) : (
                                      <span class="badge badge-secondary">
                                        Supporters
                                      </span>
                                    )}
                                  </td>

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

export default connect(mapStateToProps)(PrivatePost);
