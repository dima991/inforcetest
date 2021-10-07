export const assignSortType = (type) => {
  return {
    type,
    payload: {
      by: type.toUpperCase(),
    },
  };
};
