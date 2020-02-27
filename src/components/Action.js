import React from "react";

const Action = (props) =>{
    
    return <button className="big-button" onClick={props.picked} disabled={!props.disable}>What should I do?</button>
  
}

export default Action;