
//本地存储方法
var store = {
	save(key,value) {
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key) {
		return JSON.parse(localStorage.getItem(key)) || [];
	}
}

var list = store.fetch('todo');

// 检测页面hash值的变化
function watchHash() {
	var hash = window.location.hash.slice(1);
	vm.visibility = hash;
}
window.addEventListener('hashchange',watchHash);

//不同的hash，展示不同的数据
var filterList = {
	all:function(list) {
		return list
	},
	unfinished:function(list) {
		return list.filter(function(item){
			return !item.isChecked;
		});
	},
	finished:function(list) {
		return list.filter(function(item){
			return item.isChecked;
		});
	}
}


var vm = new Vue({
	el:'.main',
	data:{
		list:list,
		todo:'', //输入的内容
		ieditTodo:'',
		visibility: 'all'  //储存当前hash
	},
	watch:{
		// list:function(){  //浅监控
		// 	store.save('todo',this.list)
		// }
		list:{
			handler:function(){
				store.save('todo',this.list)
			},
			deep:true   //会监控内部属性的变化
		}
	},
	methods:{
		inputTodo:function() {
			if (!this.todo) {
				alert('请输入内容');
			}else{
				this.list.push({
					title: this.todo,
					isChecked: false
				});
			}
			
		},
		delTodo:function(item) {
			// 获得点击的内容的索引
			var index = this.list.indexOf(item,0);
			//删除这条内容
			this.list.splice(index,1);
		},
		editTodo:function(item) {
			this.ieditTodo = item
		},
		editTodoed:function() {
			this.ieditTodo = ''
		}
	},
	computed:{
		unFinished:function() {
			return this.list.filter(function(item) {
				return !item.isChecked
			}).length;
		},

		filteredHash:function() {

			//根据当前hash，返回不同数据
			return filterList[this.visibility] ? filterList[this.visibility](this.list) : this.list;
		}
	},
	directives:{  //自定义指令，得到焦点
		focus:{
			update(el,binding){
				if (binding.value) {
					el.focus();
				}
			}
		}
	}
});

