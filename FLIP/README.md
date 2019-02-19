#    学习之--让动画变得更简单之FLIP技术

**用处 ： 实现流畅动画，让动画不再卡顿**

不需要管它的布局是如何变化的：如width，height，flexbox,gird (除了`transform`,  `opacity`以外其他属性的变化)
 
 FLIP 分别指  `first` , `last`, `invert` ,` play`

## `first:`记录动画开始时卡片位置。

  **react** 此时会用到 `Api` **createRef()** 获取卡片项父元素（DOM元素）   
   `this.listRef = React.createRef()`

   获取卡片元素

   `this.listRef.current.children`
   
   获取卡片位置`transArr`是个二维数组，稍后详细介绍
   ```
   const stepIndex = status === 0 ? 1:0
   list.forEach((v,k)=>{
    const rectInfo = v.getBoundingClientRect();
    transArr[k][0]=rectInfo.left;
    transArr[k][1]=rectInfo.top;
   })

   ```
## `last` ：记录动画完成时卡片的位置 




## `Invert`:计算元素的变化，并执行动画

```
 const stepIndex = status === 0 ? 1:0
   list.forEach((v,k)=>{
    const rectInfo = v.getBoundingClientRect();
    transArr[index+stepIndex][0]=transArr[index+stepIndex][0]-rectInfo.left;
    transArr[index+stepIndex][1]=transArr[index+stepIndex][1]-rectInfo.top
   })

```

## 美化组件--CSS模块化
 `npm install --save-dev webpack webpack-dev-server `

 `npm install --save-dev babel-loader babel-core 
 babel-preset-es2015 
babel-preset-react`

`npm install --save-dev style-loader CSS-loader `

`npm install --save-dev html-webpack-plugin `