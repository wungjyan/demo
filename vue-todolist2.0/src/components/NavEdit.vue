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
          <td>{{value.status}}</td>
          <td>
            <el-button size="mini" type="primary" @click="editEvent(value.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="cancelEvent(value.id)">删除</el-button>
          </td>
        </tr>
        </tbody>

      </table>

      <div v-if="!eventData.length" class="warning">啊哦，数据呢！</div>

      <!--模态框-->
      <div class="modal" :class="{'modal-show':isEdited}">
        <el-row style="margin-bottom: 3px;">
          <el-col :span="24">
            <el-input v-model="events.content" @keyup.enter.native="saveEvent"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button size="medium" @click="isEdited=false">取消</el-button>
            <el-button size="medium" type="primary" @click="saveEvent">保存</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </transition>


</template>

<style  scoped>
  .wrap{
    width:100%;
    position: fixed;
    top:0;
  }
  .toHome{
    width:80px;
    height: 40px;
    padding:0;
    margin:10px;
    box-shadow: 2px 2px 5px;
  }
  .toHome a{
    display: inline-block;
    width:80px;
    height: 40px;
    line-height: 40px;
    background-color: cadetblue;
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
  .modal{
    width:788px;
    padding:5px;
    border:1px solid #ccc;
    background-color: #3a8ee6;
    position: fixed;
    top:0px;
    left:50%;
    margin-left: -400px;
    transition: all 0.6s;
    -webkit-transform: translateY(-100%);
  }

  .modal-show{
    -webkit-transform: translateY(0);
  }

</style>

<script>

  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  import ElCol from "element-ui/packages/col/src/col";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input.vue";
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {
      ElRow,
      ElInput,
      ElCol,
      ElButton},
    data() {
      return {
        isEdited:false, //控制是否显示模态框
        events:''
      }
    },

    computed:{
      eventData(){
        var eventList = this.$store.getters.getAll;
        for(var i=0;i<eventList.length;i++){
          if(eventList[i].type == 1){
            eventList[i].status = '未完成'
          }else if (eventList[i].type == 2){
            eventList[i].status = '已完成'
          }else{
            eventList[i].status = '已取消'
          }
        }

        return eventList
      }
    },
    methods: {
      //删除
      cancelEvent(id){
        this.$store.dispatch('cancelevent',id)
      },
      //编辑
      editEvent(id){
        this.isEdited = true;
        for(var i=0;i<this.eventData.length;i++){
          if(this.eventData[i].id == id){
            this.events = this.eventData[i]
          }
        }
      },
      //保存
      saveEvent(){
        for(var i=0;i<this.eventData.length;i++){
          if (this.eventData[i].id == this.events.id){
            this.eventData[i].content = this.events.content
          }
        }
        this.isEdited = false;
      }
    }
  }
</script>
