import React, { useRef, useState } from "react";
import { loginCall } from "../utils/apiCalls";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";
import { NotificationManager } from "react-notifications";

function Login(props) {
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    let cred = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const result = await loginCall(cred, props.dispatch, history);
    if (result) {
      setLoading(false);
      if (result.code === 401) {
        NotificationManager.error(result.message, "Error");
      }
    }
  };
  return (
    <div>
      <div class="sidebar-dark">
        <div class="main-wrapper">
          <div class="page-wrapper full-page">
            <div class="page-content d-flex align-items-center justify-content-center">
              <div class="row w-100 mx-0 auth-page">
                <div class="col-md-8 col-xl-6 mx-auto">
                  <div class="card">
                    <div class="row">
                      <div class="col-md-2 pr-md-0">
                        <div class="auth-left-wrapper"></div>
                      </div>
                      <div class="col-md-8 pl-md-0">
                        <div class="auth-form-wrapper px-4 py-5">
                          <a href="#" class="noble-ui-logo d-block mb-2">
                            Trendupp<span> Admin</span>
                          </a>
                          <h5 class="text-muted font-weight-normal mb-4">
                            Welcome back! Log in to your account.
                          </h5>
                          <form class="forms-sample">
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Email address
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="Email"
                                ref={emailRef}
                              />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">
                                Password
                              </label>
                              <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                autocomplete="current-password"
                                placeholder="Password"
                                ref={passwordRef}
                              />
                            </div>
                            <div class="form-check form-check-flat form-check-primary">
                              <label class="form-check-label">
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                />
                                Remember me
                              </label>
                            </div>
                            <div
                              className={loading === true ? "loader" : "none"}
                            >
                              <div></div>
                            </div>
                            <div class="mt-3">
                              <span
                                onClick={onLogin}
                                class="btn btn-primary mr-2 mb-2 mb-md-0 text-white"
                              >
                                Login
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="col-md-2 pr-md-0">
                        <div class="auth-left-wrapper"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Login);
