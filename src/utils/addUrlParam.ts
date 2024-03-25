export const addUrlParam = (url: string, param: Array<string | number | undefined>) => {
  const filteredParam = param.filter(Boolean)
  return [url, ...filteredParam].join('/')
}
