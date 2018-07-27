let defaultState={
  color:"red"
}

const mainReducer=(state=defaultState,action)=>{
  if(action.type === "CHANGE_COLOUR"){
    return {
      ...state,
      colour:action.colour
    }
  } else{
    return{
      ...state
    }
  }
}

export default mainReducer;
