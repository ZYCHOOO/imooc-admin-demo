import Fuse from 'fuse.js'

export const headerSearchHook = () => {
  let fuse

  const initFuse = (searchPool) => {
    fuse = new Fuse(searchPool, {
      // 是否按优先级进行排序
      shouldSort: true,
      // 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
      threshold: 0.4,
      // 匹配长度超过这个值的才会被认为是匹配的
      minMatchCharLength: 1,
      // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
      // name：搜索的键
      // weight：对应的权重
      keys: [
        { name: 'title', weight: 0.7 },
        { name: 'path', weight: 0.3 }
      ]
    })
  }

  return { fuse, initFuse }
}
