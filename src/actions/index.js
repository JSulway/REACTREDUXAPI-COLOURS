import axios from "axios";

// Had to add the datetime to the end of the URL as the browser was caching the response for an identicle URL called when the
// button was clicked more then once. This ensures it is a new URL each time.
export function loadColour(){
  return(dispatch)=>{
    return axios.get("http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}").then((response)=>{
      dispatch(changeColour("#" + response.data.new_color));
    });
  }
}

// This function is an action which can be dispatched. The reducer then references the defined type
export function changeColour(colour){
  return {
    type:"CHANGE_COLOUR",
    colour:colour
  }
}
