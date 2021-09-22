import { getAllUsers, createUserRequest } from "../api";

export const updatePageAction = nextPage => {
  return {
    type: "UPDATE_PAGE",
    payload: {
      nextPage
    }
  };
};

export const addUserAction = (name, email) => {
  return {
    type: "ADD_USER",
    payload: {
      name,
      email
    }
  };
};

export const deleteUserAction = userId => {
  return {
    type: "DELETE_USER",
    payload: {
      userId
    }
  };
};

export const setUsersAction = users => {
  return {
    type: "SET_USERS",
    payload: {
      users
    }
  };
};

export const loadUsers = () => {
  return async (dispatch, getState) => {
    const response = await getAllUsers();

    dispatch(setUsersAction(response.data.result));
  };
};

export const createUser = (name, email) => {
  return async (dispatch, getState) => {
    console.log("Comecou");
    try {
      await createUserRequest(name, email);
      console.log("Acabou com sucesso!");
      dispatch(loadUsers());
    } catch (e) {
      console.log("Deu Erro: ", e.message);
    }
  };
};

export const togglePageAction = () => {
  return (dispatch, getState) => {
    const currentPage = getState().currentPage;
    if (currentPage === "register") {
      dispatch(updatePageAction("list"));
    } else {
      dispatch(updatePageAction("register"));
    }
  };
};
