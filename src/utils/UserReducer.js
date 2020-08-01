export const userReducer = (users, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return users.map(user => {
        if (user.id === action.id) {
          user.isActive = false;
        }
        return user;
      });

    case "RESET_USERS":
      return users.map(user => ({
        ...user,
        isActive: true
      }));

    default:
      return users;
  }
};
