export const tagsFormated = (arr: string[]) => {
  let tagsStr = '';

  arr.map((item, index) => {
    if (index === 0) {
      tagsStr += item
    } else {
      tagsStr += ', ' + item;
    }
  })

  return tagsStr;
}