import i18n from '@/i18n/index'

export const validatePassword = () => {
  return (rule, value, cb) => {
    if (value.length < 6) {
      cb(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      cb()
    }
  }
}
