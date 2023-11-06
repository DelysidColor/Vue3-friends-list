export const hasFriend = (arr, id) => {
  let has = false;
  arr.forEach((item) => {
    if (item.id == id) {
      has = true;
    }
  });
  return has;
};

export const intersection = (arr1, arr2) => {
  let count = 0;

  arr1.forEach((item) => {
    if (hasFriend(arr2, item.id)) {
      count++;
    }
  });

  return count;
};
