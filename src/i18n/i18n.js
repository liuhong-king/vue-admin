import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import zh_CN from '../lang/zh'
import en_US from '../lang/en'

Vue.use(VueI18n);
const i18n =new VueI18n({
  locale:'zh-CN',
  messages:{
    'zh-CN': zh_CN ,//中文语言包
    'en-US': en_US,//英文语言包
  },
  silentTranslationWarn: true
})

locale.i18n((key, value) => i18n.t(key, value)) //重点：为了实现element插件的多语言切换

export default i18n
