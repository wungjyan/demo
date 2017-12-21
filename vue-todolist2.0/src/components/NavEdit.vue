<template>
  <transition name="edit">
    <div class="wrap">
      <div class="toHome">
        <router-link to="/">首页</router-link>
      </div>
      <table width="800" cellpadding="0" cellspacing="0" >
        <thead>
        <tr>
          <th width="100">#</th>
          <th width="270">事项</th>
          <th width="180">类型</th>
          <th width="250">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="value in eventData">
          <td>{{value.id}}</td>
          <td>{{value.content}}</td>
          <td>{{value.type}}</td>
          <td>
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger" @click="cancelEvent(value.id)">删除</el-button>
          </td>
        </tr>
        </tbody>

      </table>

      <div v-if="!eventData.length" class="warning">啊哦，都删光了！</div>
    </div>
  </transition>


</template>


<style>
  .wrap{
    width:100%;
    position: fixed;
    top:0;
  }
  .toHome{
    width:80px;
    margin:10px;
    background-color: cadetblue;
    padding: 10px 0px;
    text-align: center;
    box-shadow: 2px 2px 5px;
  }
  .toHome a{
    text-decoration: none;
    color: #fff;
    text-align: center;
  }
  table{
    margin:50px auto;
    border-right: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;

  }
  th,td{
    border-left:1px solid #cccccc;
    border-top:1px solid #cccccc;
    text-align: center;
    padding:5px 0;
  }
  .warning{
    width:100%;
    margin-top: 50px;
    padding:10px 0;
    color:#fff;
    font-size: 20px;
    text-align: center;
    background-color: #13ce66;
  }
  .edit-enter{
    transform: translateX(100%);
  }
  .edit-enter-active,
  .edit-leave-active{
    transition: all 1s;
  }
  .edit-enter-to,
  .edit-leave{
    transform: translateX(0);
  }

  .edit-leave-to{
    transform: translateX(-100%);
  }
</style>


<script>




  export default {
    data() {
      return {

      }
    },

    computed:{
      eventData(){
        var eventList = this.$store.getters.getAll;
        for(var i=0;i<eventList.length;i++){
          if(eventList[i].type == 1){
            eventList[i].type = '未完成'
          }else if (eventList[i].type == 2){
            eventList[i].type = '已完成'
          }else{
            eventList[i].type = '已取消'
          }
        }

        return eventList
      }
    },
    methods: {
      cancelEvent(id){
        this.$store.dispatch('cancelevent',id)
      }
    }
  }
</script>
