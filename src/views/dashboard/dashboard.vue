<template>
  <div>
    <div class="top clearfix">
      <el-row>
        <el-col :span="6">
          <div class="block user">
            <div><span><i class="fa fa-user-circle" aria-hidden="true"></i> {{$t('m._usernumber')}}</span></div>
            <div class="number-content"><span>{{usernumber}}</span></div>
            <div class="number-icon"><i class="fa fa-users" aria-hidden="true"></i></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="block share">
            <div><span><i class="fa fa-share" aria-hidden="true"></i> {{$t('m._usernumber')}}</span></div>
            <div class="number-content"><span>{{usernumber}}</span></div>
            <div class="number-icon"><i class="fa fa-share-square" aria-hidden="true"></i></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="block node">
            <div><span><i class="fa fa-share-alt" aria-hidden="true"></i> {{$t('m._usernumber')}}</span></div>
            <div class="number-content"><span>{{usernumber}}</span></div>
            <div class="number-icon"><i class="fa fa-share-alt" aria-hidden="true"></i></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="block da">
            <div><span><i class="fa fa-futbol-o" aria-hidden="true"></i> {{$t('m._usernumber')}}</span></div>
            <div class="number-content"><span>{{usernumber}}</span></div>
            <div class="number-icon"><i class="fa fa-futbol-o" aria-hidden="true"></i></div>
          </div>
        </el-col>

      </el-row>
    </div>

  </div>

</template>

<script>

  export default {
    data () {
      return {
        hostlist: 0,
        usernumber: 0,
        sharenumber: 0,
        danumber:0,
      }
    },
    methods: {


    },

  }
</script>

<style scoped>
  /*@import "../../../static/css/font-awesome.min.css";*/
  @import "./dashboard.css";

</style>
