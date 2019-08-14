export function getQueryParameter(search, parameter) {
  const [, value] = search.replace(/\?/g, '').split('&')
      .map((keyValue) => keyValue.split('='))
      .find(([key, value]) => key === parameter);

  return value;
}
