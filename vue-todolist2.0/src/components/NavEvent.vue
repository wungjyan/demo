<template>
    <div>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-collapse>
            <el-collapse-item title="未完成" name="1">
              <ul>
                <li v-for="value in getToDo" >
                  <el-row>
                    <el-col :lg="22" :md="21" :sm="21" :xs="20">
                      <el-checkbox :key='value.id' v-model="value.ischecked" class="checkbox-item" @change="moveToDone(value.id)">
                        {{value.content}}
                      </el-checkbox>
                    </el-col>
                    <el-col :lg="2" :md="3" :sm="3" :xs="4">
                      <el-button size="mini" @click="moveCancel(value.id)" class="btn-item">取消</el-button>
                    </el-col>
                  </el-row>


                </li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="已完成" name="2">
              <ul>
                <li v-for="value in getDone">
                  <el-checkbox :key='value.id' v-model="value.ischecked" class="checkbox-item" @change="moveToDo(value.id)">{{value.content}}</el-checkbox>
                </li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="已取消" name="3">
              <ul>
                <li v-for="value in getCancel">
                  <el-row>
                    <el-col :lg="22" :md="21" :sm="21" :xs="20">
                      <el-checkbox  :key="value.id" v-model="value.ischecked" class="checkbox-item" >{{value.content}}</el-checkbox>
                    </el-col>
                    <el-col :lg="2" :md="3" :sm="3" :xs="4">
                      <el-button size="mini" v-if="value.ischecked" class="btn-item" @click="moveToDo(value.id)">恢复</el-button>
                    </el-col>
                  </el-row>


                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </div>
</template>

<style scoped>
  li{
    margin-left: 10px;margin-bottom: 10px;
  }

</style>

<script>
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {
      ElRow,
      ElCol},
    data(){
     return {

     }
    },
    mounted(){

    },
    computed:{
      getToDo(){
        return this.$store.getters.getToDo
      },
      getDone(){
        return this.$store.getters.getDone
      },
      getCancel(){
        return this.$store.getters.getCancel
      }
    },
    methods:{
      //点击移入已完成列表
      moveToDone(id){
        this.$store.dispatch('eventdone',id);
      },
      //点击再次移入未完成事件
      moveToDo(id){
        this.$store.dispatch('eventtodo',id);
      },
      //点击删除移入到已删除列表
      moveCancel(id){
        this.$store.dispatch('eventcancel',id);
      }
    }
  }
</script>
