import store from "../store";
export const authHeader = () => {
  const currentUser = store.getState().user;

  if (currentUser?.token) {
    return {
      "Content-Type": "application/json",
      authorization: "Bearer " + currentUser.token,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
};
