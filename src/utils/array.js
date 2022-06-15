export const getUnique = (arr = [], key = 'value') => {
  const finalArr = [];
  arr.forEach((item) => {
    const index = finalArr.findIndex((addedItem) => addedItem[key] === item[key]);
    if (index === -1) finalArr.push(item);
  });
  return finalArr;
};
