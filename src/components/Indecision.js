import React from "react";
import Addoption from "./Addoption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal.js"

export default class Indecision extends React.Component {
    state ={
        options: [],
        selectedOption : undefined
      };
  
    componentDidMount = ()=>{
      try{
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if(options){
        this.setState(()=>({options: options}));
      }
    }
      catch(e){
  
      }
    }
  
    componentDidUpdate = (prevProps, prevState)=>{
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  
  deleteOptions = ()=>{
      this.setState(()=> {
        return({ 
          options: []
         });
    });
  }
  
  deleteoption = (optionToBeRemoved)=>{
  this.setState((prevState)=>({options: prevState.options.filter((option)=>{
     return optionToBeRemoved !== option
  }) 
  
  }))
  }
  
  pick = () =>{
    const randomNum = Math.floor(Math.random()*this.state.options.length);
      const options = this.state.options[randomNum];
      this.setState(()=>{
        return({
        selectedOption: options
        })
      })
  }
  
  addOptions = (options) =>{
    if(!options){
      return "Enter valid value"
    }
    else if(this.state.options.indexOf(options) >-1){
      return "option exists"
    }
     this.setState((prevState)=>{
      return({
        options: prevState.options.concat([options])
      });
     });
  }

  closeModal = ()=>{
    this.setState(()=>{
     return({
       selectedOption: undefined
     })
    })
  }
  
    render(){
      const title = "Indecision";
      const subtitle = "Put your life in the hands of a computer";
  
      return (
        <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
        <Action picked={this.pick} disable={this.state.options.length>0} />
        <div className="widget">
        <Options 
         options={this.state.options} 
         removal={this.deleteOptions}
         delete ={this.deleteoption}/>
        <Addoption addOptions={this.addOptions} />
        </div>
        </div>
        <OptionModal closeModal={this.closeModal} selectedOption={this.state.selectedOption}/>
        </div>
      )
    }
  }
