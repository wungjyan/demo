var list = [
];
new Vue({
	el:'.main',
	data:{
		list:list,
		todo:'', //输入的内容
		ieditTodo:''
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
		},
		warning:function() {
			alert('还未开发');
		}
	},
	computed:{
		unFinished:function() {
			return this.list.filter(function(item) {
				return !item.isChecked
			}).length;
		}
	},
	directives:{
		focus:{
			update(el,binding){
				if (binding.value) {
					el.focus();
				}
			}
		}
	}
});