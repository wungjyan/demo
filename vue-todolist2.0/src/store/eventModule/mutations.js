import * as func from '../utils'

export default {
  ADDEVENT(states,obj){
    states.count++;
    obj.items.id = states.count;
    states.event.unshift(obj.items);
    func.local.set(states);
  },
  EVENTDONE(states,obj){
    for(var i=0;i<states.event.length;i++){
      if(states.event[i].id == obj.id){
        states.event[i].type = 2;  //成为已完成事件
        states.event[i].ischecked = true;
        var item = states.event[i];  //将改后的事件单独保存一份
        states.event.splice(i,1);   //将改的事件删除
        break;
      }
    }
    states.event.unshift(item);//将保存的type=2的事件添加到数组的前面
    func.local.set(states)  //本地保存
  },
  EVENTTODO(states,obj){
    for(var i=0;i<states.event.length;i++){
      if(states.event[i].id == obj.id){
        states.event[i].type = 1;   //成为未完成事件
        states.event[i].ischecked = false;
        var item = states.event[i];
        states.event.splice(i,1);
        break;
      }
    }
    states.event.unshift(item);//将保存的type=1的事件添加到数组的前面
    func.local.set(states)  //本地保存
  },
  EVENTCANCEL(states,obj){
    for(var i=0;i<states.event.length;i++){
      if(states.event[i].id == obj.id){
        states.event[i].type = 3;  //成为取消事件
        states.event[i].ischecked = false;
        var item = states.event[i];
        states.event.splice(i,1);
        break;
      }
    }
    states.event.unshift(item);
    func.local.set(states);
  },
  CANCELEVENT(states,obj){   //真正删除数据
    for(var i=0;i<states.event.length;i++){
      if(states.event[i].id == obj.id){
        states.event.splice(i,1);
        if(states.event.length == 0){  //如果所有事件都删了，count重置
          states.count = 0;
        }
        break;
      }
    }

    func.local.set(states);
  },
  CLEARALLEVENT(states){   //清空所有事件
    states.event = [];
    states.count = 0;
    func.local.set(states);
  },
  SAVEEDIT(states,obj){   //保存编辑
    for(var i=0;i<states.event.length;i++){
      if(states.event[i].id == obj.editdata.id){
        states.event[i].content = obj.editdata.content;
        break;
      }
    }
    func.local.set(states);
  }
}
