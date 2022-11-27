const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    // return 内容 true，表示用户信息存在
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo
}

export default getters
