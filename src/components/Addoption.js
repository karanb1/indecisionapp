import React from "react";

export default class Addoption extends React.Component {
  state={
    error: undefined
};
  
    addOptions = (e)=>{
      e.preventDefault();
      const option = e.target.elements.options.value.trim();
      const error = this.props.addOptions(option) ;
      this.setState(()=>{
        return{
           error: error
        }
      });
  
      if(!error){
        e.target.elements.options.value = "";
      }
       }
      
  
    render(){
      return (<div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form onSubmit= {this.addOptions} className="add-option">
          <input className="add-option__input" type="text" name="options"/>
          <button className="button" type="submit">Add option</button>
         </form>
      </div>)
    }
  }