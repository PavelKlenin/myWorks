export const toggleObjInArr = (arr, itemPropName, actionData, toggledProp) => {
  return arr.map((item) => {
    return item[itemPropName] === actionData
      ? { ...item, [toggledProp]: !item[toggledProp] }
      : { ...item };
  });
};
/*         users: state.users.map((user) => {
          return user.id === action.userID
            ? { ...user, followed: !user.followed }
            : { ...user };
        }), */

export const updateArray = (array, [condition, data]) => {
  return condition ? [...array, data] : array.filter((item) => item !== data);
};
/*         followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId), */
