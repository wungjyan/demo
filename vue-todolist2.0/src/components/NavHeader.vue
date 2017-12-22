<template>
  <div>
    <el-row class="header-row">
      <el-col :span="24">
        <div class="header">备忘录
          <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            更多<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link to="/edit" class="edit">编辑</router-link></el-dropdown-item>
              <el-dropdown-item ><a class="clearAll" href="javascript:;" @click="clearAllEvent">清空</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>



    </el-row>
  </div>

</template>

<style scoped>

  .header-row{
    margin-bottom: 30px;

  }
  .header-row .header{
    background-color: cadetblue;
    color: #fff;
    font-size: 30px;
    padding:20px 0 20px;
    text-align: center;
  }

  .el-dropdown-link{
    color: #fff;
    cursor: pointer;
  }

  .edit{
    text-decoration: none;
    color: #2c3e50;
  }
  .clearAll{
    text-decoration: none;
    color: #2c3e50;
  }
</style>

<script>
  export default {
    methods:{
      clearAllEvent(){
        this.$store.dispatch('clearallevent');
      }
    }
  }
</script>
