<!--
 * @FileDescription: js基础
 * @Author: zsf
 * @Date: 2021-11-25 11:05:43
 * @LastEditors: zsf
 * @LastEditTime: 2021-12-19 10:17:40
-->
## 函数柯理化
**作用：** 用于创建已经设置好一个或者多个参数的函数。
**创建方式：** 使用闭包返回一个函数，返回的函数还需要设置一些传入的参数。
```js
  function curry(fn, ...args) {
    return function(...innerArgs) {
      return fn.apply(null, [...args, ...innerArgs])
    }
  }
```

```js
var curry = fn => judge = (...args) => args.length === fn.length ? fn(...args) : (arg) => judge(...args, arg)
``` 

```js
function curry(fn, ...arg) {
  let allArgs = [...arg];
  return function demo(...moreArgs) {
    if(moreArgs.length === 0) {
      return fn.apply(this, [...allArgs]);
    }else {
      allArgs.push(...moreArgs);
      return demo;
    }    
  }
}
```

## 