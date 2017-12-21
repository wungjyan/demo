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
