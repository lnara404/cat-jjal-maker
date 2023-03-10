export const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text)

export const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key))
  },
}

export const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = 'https://cataas.com'
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`)
  const responseJson = await response.json()
  return `${OPEN_API_DOMAIN}/${responseJson.url}`
}
