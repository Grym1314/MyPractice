const initialState= {value: 0}
function counterReducer(state = initialState, action){
 if (action.type = "counter/incremented"){
  return{
	...state,
	value: state.value + 1
	}
}

return state
}