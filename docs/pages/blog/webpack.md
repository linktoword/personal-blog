<!--
 * @FileDescription: webpack
 * @Author: zsf
 * @Date: 2021-12-06 23:12:50
 * @LastEditors: zsf
 * @LastEditTime: 2021-12-19 10:35:49
-->
## require.context(directory, useSubdirectories, regExp)
**作用：** 自动化导入模块，在项目中遇到需要从一个文件夹下import导入多个文件，就可使用这个api，他会遍历文件夹下的文件，然后自动导入。
|  参数   | 描述  | 类型 |
|  ----  | ----  |---- |
| directory  | 要查找的目录的路径 | string |
| useSubdirectories  | 是否查找子目录 | boolean |
| regExp  | 要匹配文件的正则表达式 | |

`require.context()`返回一个函数`webpackContext`,有两个静态方法 keys 与 resolve, 和一个属性 id
```js
// 例如
import titleCom from '@/components/demo/titleCom'
import bannerCom from '@/components/demo/bannerCom'
import cellCom from '@/components/demo/cellCom'
...
components:{titleCom,bannerCom,cellCom, ...}

// 就可以使用require.context
const path = require('path')
const webpackContext = require.context('@/components/demo', false, /\.vue$)
const modules = {}
webpackContext.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = webpackContext(key).default || webpackContext(key)
})
components: modules
```