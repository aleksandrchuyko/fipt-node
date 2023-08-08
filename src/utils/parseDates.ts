export const parseDates = (str: string) => {
  const matches: string[] = [];
  const res = str.match(/[1-3]?[0-9]\/[1]?[0-9]\/\d{4}/g);
  if (res) {
    res.forEach((element) => {
      matches.push(element.toString());
    });
  }
  return matches;
};
