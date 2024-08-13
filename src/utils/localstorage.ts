export const getData = (key: string) => {
  return localStorage.getItem(key);
};

export const setData = (key: string, value: string) => {
  localStorage.setItem(key, value);
  return true;
};
