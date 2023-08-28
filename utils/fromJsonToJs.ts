export const fromJsonToJs = (str: string) => {
  if (!str) {
    return;
  }
  return str.replace(/[\[\]']/g, '').split(',').map(item => item.trim());
}