export const hasFriend = (arr, id) => {
  let has = false;
  arr.forEach((item) => {
    if (item.id == id) {
      has = true;
    }
  });
  return has;
};
