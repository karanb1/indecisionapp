import React from "react";
import Option from "./Option";

const Options =(props)=> {
   
    return (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button className="button--link" onClick={props.removal}>Remove all</button>
        </div>
        {props.options.length == 0 && <p className="widget--message">Please add an option to get started!</p>}
        {props.options.map((option,index) => 
          <Option 
          count={index+1}
          key={option} optionText={option} 
          delete={props.delete} />)}
      </div>
    );
  
}

export default Options;