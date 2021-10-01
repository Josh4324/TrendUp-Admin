import axios from "axios";
import { http } from "./constants";

export const loginCall = async (userCredential, dispatch, history) => {
  try {
    const res = await axios.post(
      `${http}/api/v1/user/login/admin`,
      userCredential
    );
    if (res.data.code === 200) {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
      localStorage.setItem("trend-user", JSON.stringify(res.data.data));
      window.location.href = "/";
    }
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getCreators = async (token) => {
  try {
    const res = await axios.get(`${http}/api/v1/user/creators`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getTotalAmount = async (token) => {
  try {
    const res = await axios.get(`${http}/api/v1/payment/all`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getAllUsers = async (token) => {
  try {
    const res = await axios.get(`${http}/api/v1/user/all`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getAllSupporters = async (token) => {
  try {
    const res = await axios.get(`${http}/api/v1/statistic/supporters`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getAllPosts = async (token) => {
  try {
    const res = await axios.get(`${http}/api/v1/post/all-users`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getAllPayouts = async (token) => {
  try {
    const res = await axios.get(`${http}/api/v1/payout`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return res.data.data;
  } catch (err) {
    return err.response.data;
  }
};
