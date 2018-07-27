import React from 'react';

class Box extends React.Component{
  render(){
    return(
      <div className="boxwrapper">
        <div className="box" style={{
          backgroundColor: `${this.props.colour}`
        }}>
          <button onClick={()=>{this.props.handleClick()}}>Change Colour</button>
        </div>
      </div>
    )
  }
}

export default Box
