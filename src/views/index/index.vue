<template>
  <div>
    <el-container style="height: 100%;min-height:100vh;" direction="vertical">
      <el-header class="index-header" height='6.5vh'>
        <div class="nav-left">
          <!--<img @click="gotohome" src="./logowhite.png" alt="logo" class="logo">-->
          <div class="logo">
            <!--<img style="margin-top: .2em" src="./logoli.png" alt="" height=90%   width=100%>-->
            <span>Logo</span>
          </div>
        </div>
        <div class="nav-right">
          <ul>
            <li>
              <span class="user welcome">{{$t('m._welcome')}} {{name}}</span>
            </li>
            <li>
              <span class="spre"></span>
            </li>
            <li>
              <span v-if="mylang==='en-US'" @click="changelang('zh-CN')" class="user logout" type="text">中文</span>
              <span v-else  @click="changelang('en-US')" class="user logout" type="text">English</span>
            </li>
            <li>
              <span class="spre"></span>
            </li>
            <li>
              <span @click="gotohome()" class="user logout" type="text">{{$t('m._logOut')}}</span>
            </li>
          </ul>
        </div>

      </el-header>
      <el-container>
        <el-aside>

          <el-menu
            class="menuul"
            text-color="#ffffff"
            active-text-color="#A14EE7"
            background-color="#1C0029"
            default-active="/dashboard">
            <!--系统设置，查看-->
            <router-link to="/dashboard">
              <el-menu-item index="/dashboard">
                <i class="fa fa-bar-chart"></i>
                <span slot="title">{{$t('m._dashboard')}}</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="1">
              <template slot="title">
                <i class="fa fa-life-ring"></i>分组1
              </template>
              <el-menu-item-group>
                <router-link to="">
                  <el-menu-item index="1-1">
                    <i class="fa fa-support"></i>
                    <span slot="title">选项1</span>
                  </el-menu-item>
                </router-link>
                <router-link to="">
                  <el-menu-item index="1-2">
                    <i class="fa fa-server"></i>
                    <span slot="title">选项2</span>
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="fa fa-bars"></i>分组2
              </template>
              <el-menu-item-group>
                <router-link to="">
                  <el-menu-item index="2-1">
                    <i class="fa fa-floppy-o"></i>
                    <span slot="title">选项1</span>
                  </el-menu-item>
                </router-link>
                <router-link to="">
                  <el-menu-item index="2-2">
                    <i class="fa fa-download"></i>
                    <span slot="title">选项2</span>
                  </el-menu-item>
                </router-link>
                <router-link to="">
                  <el-menu-item index="2-3">
                    <i class="fa fa-folder-open-o"></i>
                    <span slot="title">选项3</span>
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>

        </el-aside>
        <el-container>
          <el-main ref="main" :style="styleObj1">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>


  </div>
</template>

<script>
  import tool from '../../tools/tool'
  export default {

    created: function () {

      if(sessionStorage.getItem("lang")){
        let seesionLang=sessionStorage.getItem("lang")
        this.mylang=seesionLang
        this.$i18n.locale=seesionLang
      }
    },
    data () {


      return {
        name: 'admin',
        styleObj1: '',
        mylang:'zh-CN',
        dialogloading: false,
      }
    },
    methods: {
      gotohome () {
        location.href = '/'
      },
      changelang(lang){
        this.$i18n.locale=lang
        sessionStorage.setItem('lang',lang)
        location.reload()
      }

    }
  }
</script>

<style scoped>
  .index-header {
    /*background: #016E89;*/
    padding-left: 0;
    background: #A14EE7;
    background: linear-gradient(to right, #2F23AB 25%, #C86CD7 60%);
    background: -ms-linear-gradient(to right, #2F23AB 25%, #C86CD7 60%);
    background: -moz-linear-gradient(to right, #2F23AB 25%, #C86CD7 60%);
  /*border-bottom: 1px solid #EDEFF6;*/
    overflow: hidden;
  }

  .el-aside {
    width: 13em !important;
    height:93.5vh;
    overflow: auto;
  }
  .el-main {
    height:93.5vh;
    min-width: 1100px;
    overflow-y: auto;
    background-color: #fff;
    /*background: linear-gradient(top left, #ffffff 75%, #C86CD7 80%,#2F23AB 100%);*/
    padding:.8em;
  }
  .el-menu {
    height:100%;
    background-color: #1C0029;
    /*background: linear-gradient(top,  #11052D,#0E0A12);*/
    /*background: -ms-linear-gradient(top,  #11052D,#0E0A12);*/
    /*background: -moz-linear-gradient(top,  #11052D,#0E0A12);*/
  }
  .el-menu-item.is-active {
    border-left: 2px solid #DF5FE5;
  }
  .el-menu-item.is-active i{
    background-image:-webkit-linear-gradient(bottom,#2F23AB,#C86CD7 40%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  .el-menu li:hover {
    background-color: #ffffff;
  }
  .el-submenu .el-menu-item{
    min-width: 0;
  }

  /*.el-menu .el-submenu:hover {*/
  /*color: #A14EE7 !important;*/
  /*}*/

  .logo {
    height: 3em;
    line-height: 3em;
    width: 11em;
    padding: 0 1em;
    color: #F4F8F9;
    /*background: url("./logoli.png");*/
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .logo span {
    font-size: 1.5em;
    font-weight: 700;
    vertical-align: bottom;
    color: #fff;
    /*background-image:-webkit-linear-gradient(left,#ffff,#ffffff);*/
    /*-webkit-background-clip:text;*/
    /*-webkit-text-fill-color:transparent;*/
  }

  .fa {
    margin-right: 10px;
    margin-left: 5px;
  }
  .nav-left{
    float: left;
  }
  .nav-right {
    float: right;
    height:6.5vh;
    line-height: 6.5vh;
  }
  .nav-right ul li {
    float: left;
    margin-right: 1em;
  }
  .user {
    float: right;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
  }
  .spre{
    border-right: 1px solid #ffffff;
  }
  .user:hover {
    color: #A14EE7;
  }
  .welcome:hover{
    color: #ffffff;
  }
  .el-badge{
    display: block;
  }



</style>
