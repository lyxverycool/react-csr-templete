// 节流

export const throttle = (fn, delay = 500) => {
  let flag = true
  return (...args) => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}

export const getCookie = name => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  }
  return null
}

export const setCookie = (name, value, days, cookieDomain) => {
  let expires = ''
  let domain = ''
  if (days) {
    const date = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000)
    expires = ` ;expires=${date.toUTCString()}`
  }
  if (cookieDomain) {
    domain = ` ;domain=${cookieDomain}`
  }
  document.cookie = `${name}=${value}${expires}${domain};path=/`
}
