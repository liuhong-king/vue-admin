<template>
  <div>
    <div class="bgimage">

      <div class="content clearfix">
        <div class="info">
          <p class="info-title"><i>TITLE</i></p>
          <div class="info-content">
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </div>
        </div>

        <div class="loginbox">
          <p class="longintitle"><span>管理员登录</span></p>
          <el-form :model="loginForm" status-icon :rules="loginrules" ref="loginForm" class="demo-ruleForm">
            <el-form-item class="inputbox" prop="username">
              <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item class="inputbox" prop="pass">
              <el-input type="password" placeholder="请输入密码" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item class="loginbar">
              <el-button type="primary" @click="login('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>

    </div>
  </div>

</template>
<script>
  export default {
    created: function () {
      let $this = this
      document.onkeydown = function (event) {
        let e = event ? event : (window.event ? window.event : null)
        if (e.keyCode == 13) {
          $this.login('loginForm')
        }
      }
    },
    data () {
      return {
        loginForm: {
          pass: '',
          username: ''
        },
        loginrules: {
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      login (formName) {
        window.location.href = '/index'
      },
    },

  }
</script>
<style scoped>
  .bgimage {
    height: 100vh;
    min-width: 1366px;
    overflow: hidden;
    background: url(bg.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }

  .content {
    margin: 10% auto;
    width: 70%;
    height: 60%;
  }

  .info {
    float: left;
    background-color: rgba(0,0,0,.3);
    width: 49%;
    height: 100%;
    border-radius: 4px;
    /*color: #7E6AE8;*/
    color: #ffffff;
  }

  .info-title {
    margin-left: 1em;
    margin-top: 1em;
  }
  .info-title i{
    font-size: 1.5em;
  }

  .info-content {
    height: 24em;
    width: 50%;
    margin: auto;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    line-height: 32px;
    margin-top: 18%;
    font-size: 14px;
    /*background-image: -webkit-linear-gradient(bottom, #2F23AB, #C86CD7 40%);*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
  }

  .loginbox {
    float: left;
    width: 49%;
    height: 100%;
    /*background-color: #ffffff;*/
    background-color: rgba(255,255,255,.3);
    border-radius: 4px;
    text-align: center;
  }

  .longintitle {
    margin-top: 20%;
    margin-bottom: 2em;
    /*color: #7E6AE8;*/
    color: #ffffff;
  }

  .longintitle span {
    font-size: 2em;
  }

  .el-form-item .el-form-item__label {
    color: #ffffff !important;
  }
  .inputbox{
    margin-bottom: 2em;
    margin-left: 5em;
    text-align: left;
  }
  .loginbar{
    margin-left: 5em;
    text-align: left;
  }
  .el-input {
    width: 80%;
  }
  .el-button {
    width: 80%;
  }
</style>

