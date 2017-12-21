<template>
    <div>
      <el-row type="flex" justify="center" style="margin-bottom: 30px;">
        <el-col :lg="10" :md="9" :sm="9" :xs="8">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-edit" v-model="content" @keyup.enter.native="submit">
          </el-input>
        </el-col>
        <el-col :lg="2" :md="3" :sm="3" :xs="4">
          <el-button type="primary" style="width: 100%;" @click="submit">提交</el-button>
        </el-col>
      </el-row>
    </div>
</template>


<script>


  export default {
    data(){
      return {
        content:''
      }
    },
    methods:{
      submit(){
        var params = {
          id:0,
          type:1,   //新提交的表示未完成
          content:'',
          ischecked:false
        }
        this.content = this.content.trim();
        if(this.content){
          params.content = this.content;
          this.$store.dispatch('addevent',params);
          this.content = '';
        }

      }
    }
  }
</script>
