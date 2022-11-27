import { getItem, setItem } from '@/utils/storage'
import { TIME_STAMP_KEY, TOKEN_TIMEOUT_VALUE } from '@/utils/enums'

/**
 * 获取时间戳
 */
export const getTimeStamp = () => {
  return getItem(TIME_STAMP_KEY)
}

/**
 * 设置时间戳
 */
export const setTimeStamp = () => {
  setItem(TIME_STAMP_KEY, Date.now())
}

/**
 * 是否超时
 */
export const isTimeout = () => {
  // 当前时间
  const currentTime = Date.now()
  // 缓存时间
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
