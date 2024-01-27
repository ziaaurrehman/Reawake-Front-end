import instance from "axios";
import { toast } from "react-toastify";

const axios = instance.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    //deleting the token from header
    delete axios.defaults.headers.common["Authorization"];
  }
};

axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signupUser = async (form) => {
  try {
    const res = await axios.post(`/signup`, form);
    return res;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return error;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post(`/login`, user);
    return res;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return error;
  }
};

export const addTask = async (data) => {
  try {
    const res = await axios.post(`/add-task`, data);
    return res;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return error;
  }
};

export const getTask = async (id) => {
  try {
    const res = await axios.get(`/get-task/${id}`);
    return res;
  } catch (error) {
    // toast.error(`${error?.response?.data?.message}`, {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    return error;
  }
};

export const getTodoTask = async (id) => {
  try {
    const res = await axios.get(`/get-todo-task/${id}`);
    return res;
  } catch (error) {
    // toast.error(`${error?.response?.data?.message}`, {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    return error;
  }
};

export const getInProgressTask = async (id) => {
  try {
    const res = await axios.get(`/get-in-progress-task/${id}`);
    return res;
  } catch (error) {
    // toast.error(`${error?.response?.data?.message}`, {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    return error;
  }
};

export const getCompletedTask = async (id) => {
  try {
    const res = await axios.get(`/get-completed-task/${id}`);
    return res;
  } catch (error) {
    // toast.error(`${error?.response?.data?.message}`, {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    return error;
  }
};

export const updateTask = async (data) => {
  try {
    const res = await axios.put(`/update-task/`, data);
    return res;
  } catch (error) {
    // toast.error(`${error?.response?.data?.message}`, {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    return error;
  }
};

export const updateProfile = async (id, data) => {
  try {
    const res = await axios.put(`/setting/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return error;
  }
};

export const updateForgetPassword = async (password, token) => {
  try {
    const res = await axios.post(`/forget-password/${token}`, password);
    return res;
  } catch (error) {
    toast.error(`${error?.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return error;
  }
};

export const forgetPassword = async (email) => {
  try {
    const res = await axios.post(`/forget-password`, email);
    return res;
  } catch (error) {
    console.log(error);
    toast.error(`${error?.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return error;
  }
};