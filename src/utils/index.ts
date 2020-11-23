// 防抖

interface debArg {
  fn: any,
  delay?: any
}

export const debounce = (params: debArg) => {
  let timer: NodeJS.Timeout | null = null
  const { fn, delay } = params
  return () => {
    const context = this
    const args = params
    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

// 节流

// 函数节流的实现;
export const throttle = (params: debArg) => {
  let preTime = Date.now()
  const { fn, delay } = params
  return () => {
    const context = this
    const args = params
    const nowTime = Date.now()

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now()
      fn.apply(context, args)
    }
  }
}

export const getCookie = (name: string) => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  }
  return null
}


export const setCookie = (name: string, value: any, days: number, cookieDomain: any) => {
  let expires = ''
  let domain = ''
  if (days) {
    const date = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000)
    expires = ` ; expires = ${date.toUTCString()} `
  }
  if (cookieDomain) {
    domain = ` ; domain = ${cookieDomain} `
  }
  document.cookie = `${name}=${value} ${expires} ${domain}; path = /`
}
