import context from '../main'

export default {
  //分页的方法
  pagination (pageNo, pageSize, array) {
    var offset = (pageNo - 1) * pageSize
    return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize)
  },
  //获取用户名或者token
  getusername () {
    var username = sessionStorage.getItem('username')
    //console.log(username);
    return username
  },
  //KB MB GB 单位装换
  conver (limit) {
    var size = ''
    if (limit < 0.1 * 1024) { //如果小于0.1KB转化成B
      size = limit.toFixed(2) + 'B'
    } else if (limit < 0.1 * 1024 * 1024) {//如果小于0.1MB转化成KB
      size = (limit / 1024).toFixed(2) + 'KB'
    } else if (limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB
      size = (limit / (1024 * 1024)).toFixed(2) + 'MB'

    } else if (limit < 1 * 1024 * 1024 * 1024 * 1024) { //如果小于1TB转化成MB
      size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
    } else {
      size = (limit / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'TB'

    }
    var sizestr = size + ''
    var len = sizestr.indexOf('\.')
    var dec = sizestr.substr(len + 1, 2)
    if (dec == '00') {//当小数点后为00时 去掉小数部分
      return sizestr.substring(0, len) + sizestr.substr(len + 3, 2)
    }
    return sizestr

  },
  //单位转换不加B
  converB (limit) {
    var size = ''
    if (limit < 0.1 * 1024) { //如果小于0.1KB转化成B
      size = limit.toFixed(2) + 'B'
    } else if (limit < 0.1 * 1024 * 1024) {//如果小于0.1MB转化成KB
      size = (limit / 1024).toFixed(2) + 'k'
    } else if (limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB
      size = (limit / (1024 * 1024)).toFixed(2) + 'M'

    } else if (limit < 1 * 1024 * 1024 * 1024 * 1024) { //如果小于1TB转化成MB
      size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'G'
    } else {
      size = (limit / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'T'

    }
    var sizestr = size + ''
    var len = sizestr.indexOf('\.')
    var dec = sizestr.substr(len + 1, 2)
    if (dec == '00') {//当小数点后为00时 去掉小数部分
      return sizestr.substring(0, len) + sizestr.substr(len + 3, 2)
    }
    return sizestr

  },
  converMB (limit) {
    return Math.floor(limit / (1024 * 1024))
  },
  converGB (limit) {
    return Math.floor(limit / (1024 * 1024 * 1024))
  },
  converHour (second) {
    return (second / (60 * 60)).toFixed(2)
  },
  strToNumber (str) {
    let laststr = str.substring(str.length - 1)
    let strnum = str.substring(0, str.length - 1)
    switch (laststr) {
      case 'T':
        return Math.round(Number(strnum) * 1024 * 1024 * 1024 * 1024)
        break
      case 'G':
        return Math.round(Number(strnum) * 1024 * 1024 * 1024)
        break
      case 'M':
        return Math.round(Number(strnum) * 1024 * 1024)
        break
      case 'K':
        return Math.round(Number(strnum) * 1024)
        break
    }
  },
  // 字符串TB
  strToNumberB (str) {
    let laststr = str.substring(str.length - 2)
    let strnum = str.substring(0, str.length - 2)
    switch (laststr) {
      case 'TB':
        return Math.round(Number(strnum) * 1024 * 1024 * 1024 * 1024)
        break
      case 'GB':
        return Math.round(Number(strnum) * 1024 * 1024 * 1024)
        break
      case 'MB':
        return Math.round(Number(strnum) * 1024 * 1024)
        break
      case 'KB':
        return Math.round(Number(strnum) * 1024)
        break
    }
  },
  //zfs过来的数据需要处理转化，首页文件系统计算百分比
  ZFSstrToNumberB (str) {
    let laststr = str.substring(str.length - 1)
    let strnum = str.substring(0, str.length - 1)
    switch (laststr) {
      case 'T':
        return Math.round(Number(strnum) * 1024 * 1024 * 1024 * 1024)
        break
      case 'G':
        return Math.round(Number(strnum) * 1024 * 1024 * 1024)
        break
      case 'M':
        return Math.round(Number(strnum) * 1024 * 1024)
        break
      case 'K':
        return Math.round(Number(strnum) * 1024)
        break
    }
  },
  //将后台返回的数据变成穿梭款左边能解析的格式
  transferleft (arr, _key, _label) {
    const data = []
    for (let i = 0; i < arr.length; i++) {
      data.push({
        key: arr[i][_key] || arr[i],
        label: arr[i][_label] || arr[i],
      })
    }
    return data
  },

  transferlefttoarr (arr) {
    let srr = []
    for (var i = 0; i < arr.length; i++) {
      srr.push(arr[i].key)
    }
    return srr
  },
  //数组去重
  twoarrunique (arr1, arr2) {
    //arr1是穿梭款右边的数组，arr2是穿梭狂右边的数组
    for (var i = 0; i < arr1.length; i++) {
      let obj = arr1[i]
      for (var j = 0; j < arr2.length; j++) {
        let index = arr2.indexOf(obj)
        if (index > -1) {
          arr2.splice(index, 1)
        }
      }
    }
    return arr2
  },
  //将数组变成下拉框的可选项
  arrtoselect (arr) {
    var selectarr = []
    for (var i = 0; i < arr.length; i++) {
      var obj = {key: i, label: arr[i], value: arr[i]}
      selectarr.push(obj)
    }
    return selectarr
  },
  //天转秒
  daytosecond (number) {
    let newnum = Number(number)
    return newnum * 24 * 60 * 60
  },
  //秒转天
  secondtoday (number) {
    let newnum = Number(number)
    return newnum / 60 / 60 / 24
  },
  //转换unicode
  toUnicodeFun (data) {
    if (data == '' || typeof data == 'undefined') return '请输入汉字'
    let str = ''
    for (let i = 0; i < data.length; i++) {
      str += data.charCodeAt(i).toString(10) + '\,'
    }
    return str.substr(0, str.length - 1)
  },

  //验证
  nametest: (rule, value, callback) => {
    let patrn = /[`~!@#$%^&*()\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im
    let reg = /(^\s+)|(\s+$)/g
    let cha = /[\u4E00-\u9FA5]/
    let reg2 = /^[a-zA-Z]/
    if (!reg.test(value)) {
      if (value.length < 3 || value.length > 20) {
        callback(new Error(context.$t('m._hualuStor')))

      } else if (patrn.test(value) || cha.test(value) || !reg2.test(value)) {
        callback(new Error('只能输入数字，"_",字母,且以字母开头'))
      } else {
        callback()
      }
    } else {
      callback(new Error('输入内容包含空格，请重新输入!'))
    }
    callback()
  },

  passwordtest: (rule, value, callback) => {
    let patrn = /[`~!@#$%^&*()\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im
    let reg = /(^\s+)|(\s+$)/g
    let cha = /[\u4E00-\u9FA5]/
    let reg2 = /^[a-zA-Z]/

    if (!reg.test(value)) {

      if (value.length < 3 || value.length > 20) {
        callback(new Error('长度在 3 到 20 个字符!'))

      } else if (patrn.test(value) || cha.test(value)) {
        callback(new Error('只能输入数字，"_",字母'))
      } else {
        callback()
      }
    } else {
      callback(new Error('输入内容包含空格，请重新输入!'))
    }
    callback()
  },

  IPtest: (rule, value, callback) => {
    let ipreg = /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])(\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)){3}$/

    if (!ipreg.test(value)) {
      callback(new Error('请输入正确的IP'))
    } else {
      callback()
    }
    callback()
  },

  numbertest: (rule, value, callback) => {
    // var patrn = /^\+?[1-9][0-9]*$ /
    if (value) {
      if (!Number.isInteger(value) || value < 0) {

        callback(new Error('只能输入大于0的整数'))

      } else {
        callback()
      }
    } else {
      callback()
    }
    callback()
  },

  emailtest: (rule, value, callback) => {
    let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$') //正则表达式
    if (value) {
      if (!reg.test(value)) {

        callback(new Error('请输入正确的邮箱'))

      } else {
        callback()
      }
    } else {
      callback()
    }
    callback()
  },

  //将UTC转换成当地时间
  convertUTCTimeToLocalTime (UTCDateString) {
    if (!UTCDateString) {
      return '-'
    }

    function formatFunc (str) {    //格式化显示
      return str > 9 ? str : '0' + str
    }

    function formatFunc2 (str) {
      if (str < 99 && str > 9) {
        return '0' + str
      } else if (str < 9) {
        return '00' + str
      } else {
        return str
      }
    }

    var date2 = new Date(UTCDateString)     //这步是关键
    var year = date2.getFullYear()
    var mon = formatFunc(date2.getMonth() + 1)
    var day = formatFunc(date2.getDate())
    var hour = date2.getHours()
    var noon = hour >= 12 ? 'PM' : 'AM'
    hour = hour >= 12 ? hour - 12 : hour
    hour = formatFunc(hour)
    var min = formatFunc(date2.getMinutes())
    var sec = formatFunc(date2.getSeconds())
    var milsec = formatFunc2(date2.getMilliseconds())
    var dateStr = year + '-' + mon + '-' + day + ' ' + noon + ' ' + hour + ':' + min + ':' + sec + ':' + milsec
    return dateStr
  },
  //根绝对象数组中的某个值排序
  compare (propertyName) {
    return function (obj1, obj2) {
      var value1 = obj1[propertyName]
      var value2 = obj2[propertyName]
      if (value1 < value2) {
        return -1
      } else if (value1 > value2) {
        return 1
      } else {
        return 0
      }
    }
  },
  //判断是否是IE
  IEVersion () {
    var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
      reIE.test(userAgent)
      var fIEVersion = parseFloat(RegExp['$1'])
      if (fIEVersion == 7) {
        return 7
      } else if (fIEVersion == 8) {
        return 8
      } else if (fIEVersion == 9) {
        return 9
      } else if (fIEVersion == 10) {
        return 10
      } else {
        return 6//IE版本<=7
      }
    } else if (isEdge) {
      return 'edge'//edge
    } else if (isIE11) {
      return 11 //IE11
    } else {
      return -1//不是ie浏览器
    }
  },
  //时间戳转换当地时间
  getLocalTime (nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
  },
  //日期格式化
  formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str))
      }
    }
    return fmt
  },
  padLeftZero (str) {
    return ('00' + str).substr(str.length)
  },
  //时间戳转换天时分秒
  timeStamp (second_time) {

    var time = parseInt(second_time) + '秒'
    if (parseInt(second_time) > 60) {

      var second = parseInt(second_time) % 60
      var min = parseInt(second_time / 60)
      time = min + '分' + second + '秒'

      if (min > 60) {
        min = parseInt(second_time / 60) % 60
        var hour = parseInt(parseInt(second_time / 60) / 60)
        time = hour + '小时' + min + '分' + second + '秒'

        if (hour > 24) {
          hour = parseInt(parseInt(second_time / 60) / 60) % 24
          var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24)
          time = day + '天' + hour + '小时' + min + '分' + second + '秒'
        }
      }
    }
    return time
  },

  // 给某个元素移除某个属性名
  removeClass (obj, classname) {
    //如果原来有class
    if (obj.className != '') {
      var arrClassName = obj.className.split(' ')
      var _index = this.arrIndexOf(arrClassName, classname)
      //如果有需要移除的class
      if (_index != -1) {
        arrClassName.splice(_index, 1)  //删除存在的class值
        obj.className = arrClassName.join(' ')   //将数组以空格连接成字符串放到元素的class属性里
      }
    }
    //如果原来没有class无操作
  },

  arrIndexOf (arr, v) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == v) {
        return i
      }
    }
    return -1
  },

}
