export const getToken = () => {
  return localStorage.getItem("jwtToken");
};

export const removeToken = () => {
  localStorage.removeItem("jwtToken");
};

export const setToken = (val) => {
  localStorage.setItem("jwtToken", val);
};
