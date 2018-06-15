export default function reducer(state=['吃饭','喝水'], action){

  if(action.type === 'ADD_TODO'){
    return [...state,action.text]
  }else if(action.type === 'DELETE_TODO'){
    state.splice(action.index,1)
    return state
  }else{
    return state
  }

}