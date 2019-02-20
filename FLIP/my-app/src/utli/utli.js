//生成一个二维数组
function getArrByLen(len) {
    return Array(len).fill().map(() => [0, 0])
  }
export {
    getArrByLen
}