# 基于vue2.0+vuex+localStorage写的本地备忘录（todoList2.0）
> 采用vue2.0+vuex+vue-router+element-ui+localStorage+webpack，实现一个本地存储的备忘录

## 介绍
 之前已经写过一个todoList的demo，也是实现了本地存储，那是初学vue时写的，很基础。      
 地址：[todoList1.0](https://wungjyan.github.io/demo/vue-todolist1.0/index.html#all)    
 
 写这次demo也是为了练习下vue，vuex和vue-router，还有想尝试下Element ui框架，也是比较基础的。        
 地址：[todoList2.0](https://wungjyan.github.io/demo/vue-todolist2.0/dist/index.html#/)
 
## 第一次提交（2017.12.20）

- 采用element-ui实现基本页面布局
- 实现基本功能
  - 支持回车添加事件
  - 添加事件 => 进入未完成列表
  - 未完成列表 = 勾选 => 进入已完成列表
  - 已完成列表 = 取消勾选 => 再次进入未完成列表
  - 未完成列表 = 删除 => 进入已删除列表
  - 已删除列表 = 勾选 = 恢复 => 再次进入未完成列表
  - 本地存储化

## 第二次提交（2017.12.21）

- 添加导航菜单和编辑页面
- 通过导航菜单路由到编辑页面，加入过渡效果
- 编辑页面采用表格展示数据
  - 求生欲让我放弃使用Element来建立表格，自己写的表格，更简单
  - 将之前的 已删除 项改为 已取消 项 ，真正的删除在表格里执行
- 遇到了不可预料的 BUG
  - 首页进入到编辑页，数据展示正常，但是回退到首页时，数据全部消失，需刷新才能正常显示
  
## 第三次提交（2017.12.22）
- 修复了上次的BUG
- 添加了编辑功能
  - 点击编辑，弹出模态框，显示当前数据
  - 修改后，保存更新数据
- 在导航菜单里增加了清空功能，清空当前所有数据，并本地保存

## 本项目遇到的坑
### Element的使用    
虽然官网给出了很详细的代码，但是你并不都能的组成自己想要的样式，为了减轻代码体积，我选择的是按需引入，能用则用，
过程中遇到了不少坑，以至于后面的表格和模态框我都是自己写了。需要注意的一点是，在Input这样的组件里，
绑定的事件是无效的，可以使用修饰符 `.native`     
```
 <el-input v-model="events.content" @keyup.enter.native="saveEvent"></el-input>
```
本想适配移动端，但是Element是桌面端组件库，实在不好做，就放弃了，简单地调了一下pc端的响应

### vue-router
由于本次数据是通过Vuex管理的，所以路由只用来简单地切换了下页面，但其实也遇到了坑。
在加入过渡效果时，切换时会闪动，不协调，原因是两个页面的位置不固定，
我的解决办法是对两个页面分别加了一个容器，将它们fixed定位在浏览器相同的位置

### Vuex
重中之重的就是Vuex了，这也是我收获最多的方面。本次项目中，数据有三种状态，分别是
未完成，已完成，已取消，你需要将它们分类在三个列表里，通过操作在各状态里切换，
所以使用Viex很合适。Vuex里的五个核心概念我全用上了，使用模块化：
```
|-store/                   // 存放vuex代码
|   |-eventModule          // 事件模块
|   |   |-actions.js
|   |   |-getters.js
|   |   |-index.js
|   |   |-mutations.js
|   |   |-state.js      
|   |-index.js              // vuex的核心，创建一个store
|   |-utils.js              //本地存储文件
```
每当触发一个操作，通过Action提交Mutation，Mutation去修改State，并本地存储，再通过Getter更新到各部分。
具体可以看我的源码。组件：
```
|-component/                
|   |-NavEdit.vue          // 编辑页
|   |-NavEvent.vue         // 事件列表
|   |-NavHeader.vue        //头部
|   |-NavInput.vue         //输入框
|         
|-Views              
|   |-Home.vue             //首页，与编辑页路由切换
```

## 总结
虽然是很小的项目，功能也不多，但是收获却是实实在在的，遇过多少坑就能收获到多少东西，很多知识点也更清晰了。
期望自己能做出腻害的东西。
