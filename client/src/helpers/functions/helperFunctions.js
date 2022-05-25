export const loginINIT = (loginData) => {
  loginData.email === "admin@therapidfire.com" &&
    loginData.password === "YoLoYoLo@oLyOLoY" &&
    localStorage.setItem("login", loginData);

  return true;
};
