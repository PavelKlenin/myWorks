import * as axios from "axios";

const API_KEY = "e3f1e459-893d-4754-8a24-d11a9e2a9b60";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": API_KEY,
  },
});

export const userAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  checkFollow: (userId) => {
    return instance.get(`follow/${userId}`).then((response) => response.data);
  },
  follow: (userId) => {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollow: (userId) => {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getProfile: (userId) => {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus: (status) => {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
};

export const authAPI = {
  authCheck: () => {
    return instance.get("auth/me").then((response) => response.data);
  },
  login: (email, password, rememberMe, captcha = false) => {
    return instance
      .post("auth/login", { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout: () => {
    return instance.delete("auth/login").then((response) => response.data);
  },
};
