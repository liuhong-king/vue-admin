
let nasIP='127.0.0.1';

export default {

  //elecsearch数据库的接口
  elecapihost: 'http://'+nasIP+':9200',
  getpolicylist: '/transition_strategy/_search',
  createpolicy: '/transition_strategy/doc',
  deletepolicy: '/transition_strategy/doc/',
  editpolicy: '/transition_strategy/doc/',
  getloglist: '/logs/_search',
  confirmwarn: '/logs/doc/',


  sendRequest ($this, type, url, data, func1) {
    if (type == 'get') {
      //为了兼容ie11,ie11两次get请求过近，会直接返回缓存的数据，而不给后台发请求
      data['&timestamp']=new Date().getTime()

      //get方法调用
      $this.$ajax({
        method: type,
        url: url,
        params: data,
      }).then(response => {
        func1(response)

      }).catch(error => {
        $this.loading=false
        $this.dialogloading=false
        if($this.jsloading){
          $this.jsloading.close()
        }
        let err = error.response
        if (err && err.data.messages.message) {
          $this.$alert(error.response.data.messages.message, '提示')
        } else {
          $this.$message({
            type: 'error',
            message: '网络错误!'
          })
        }

      })
    } else {
      //除了get之外的方法
      $this.$ajax({
        method: type,
        url: url,
        data: data,
      }).then(response => {
        func1(response)
        // console.log(response);
      }).catch(error => {
        $this.loading=false
        $this.dialogloading=false
        if($this.jsloading){
          $this.jsloading.close()
        }
        let err = error.response
        console.log(error)
        if (err && err.data.messages.message) {
          $this.$alert(error.response.data.messages.message, '提示')
        } else {
          $this.$message({
            type: 'error',
            message: '网络错误!'
          })
        }

      })
    }

  },



}
