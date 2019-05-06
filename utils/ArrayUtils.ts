export const splitArrayGroups = (array: any[], elementSize: number) => {
  let resultArray: any[] = [];
  let copyArray = array.concat();

  while (copyArray.length > 0) {
    resultArray.push(copyArray.slice(0, elementSize));
    copyArray.splice(
      0,
      copyArray.length > elementSize ? elementSize : copyArray.length
    );
  }

  return resultArray;
};
