const debounce = (func, delay = 2000) => {
  let timer = null;

  return function test(fn, ...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  }
}

export default debounce
