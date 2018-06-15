import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import reducer from './reducer/index.js'

let store = createStore(reducer)

class App extends Component {
    constructor(){
        super();
        this.state = {
            val:store.getState()
        }
        console.log(this.state.val)
    }

    // 添加事件
    addTodo(){
      let val = this.refs.todo.value
      if(val){
        store.dispatch({
            type:'ADD_TODO',
            text:val
        })
        this.refs.todo.value = ''
      }
    }

    //删除事件
    deleteTodo(index){
     store.dispatch({
         type:'DELETE_TODO',
         index:index
     })
    }

    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                val:store.getState()
            })
        })
    }

    render(){
        let todoList=[]
        this.state.val.forEach((todo, index)=>{
           todoList.push(<li key={index}>{todo} <input type="button" value="delete" onClick={this.deleteTodo.bind(this,index)}/></li>)
        })
        return (
            <div>
                <input type="text" ref="todo" />
                <input type="button" value="add" onClick={this.addTodo.bind(this)} />
                <ul>
                  {todoList}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))
