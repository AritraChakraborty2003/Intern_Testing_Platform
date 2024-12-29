export const verifyUser = () => {
  const storedToken = JSON.parse(localStorage.getItem("token"));
  if (!storedToken) return false;
  const { signature } = storedToken;
  if (Date.now() > signature) {
    localStorage.removeItem("token");
    return false;
  }
  return true;
};
