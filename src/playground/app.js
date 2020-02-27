class Indecision extends React.Component {
  constructor(props){
    super(props);
    this.pick = this.pick.bind(this);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.addOptions = this.addOptions.bind(this);
    this.deleteoption = this.deleteoption.bind(this);
    this.state ={
      options: []
    }
  }

  componentDidMount(){

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

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

deleteOptions(){
    this.setState(()=> {
      return({ 
        options: []
       });
  });
}

deleteoption(optionToBeRemoved){
this.setState((prevState)=>({options: prevState.options.filter((option)=>{
   return optionToBeRemoved !== option
}) 

}))
}

pick(){
  const randomNum = Math.floor(Math.random()*this.state.options.length);
    const options = this.state.options[randomNum];
    alert(options)
}

addOptions(options){
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

  render(){
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action picked={this.pick} disable={this.state.options.length>0} />
      <Options 
       options={this.state.options} 
       removal={this.deleteOptions}
       delete ={this.deleteoption}/>
      <Addoption addOptions={this.addOptions} />
      </div>
    )
  }
}

const Header =(props)=>{
  return (<div>
         <h1>{props.title}</h1>
         <p>{props.subtitle}</p>
        </div>);
}
// class Header extends React.Component {
//    render(){
//      return (<div>
//       <h1>{this.props.title}</h1>
//       <p>{this.props.subtitle}</p>
//       </div>);
//    }
// }

const Action = (props) =>{
  
    return <button onClick={props.picked} disabled={!props.disable}>What should I do?</button>
  
}

const Options =(props)=> {
 
    return (
      <div>
        <button onClick={props.removal}>Remove all</button>
        {props.options.length == 0 && <p>Please add options</p>}
        {props.options.map((option) => 
          <Option 
          key={option} optionText={option} 
          delete={props.delete} />)}
      </div>
    );
  
}

const Option = (props)=>{
  
    return (<div>
      {props.optionText}
      <button onClick={(e)=>{props.delete(props.optionText)}}>Remove</button>
      </div>)
  
}

class Addoption extends React.Component {
  constructor(props){
    super(props);
    this.addOptions = this.addOptions.bind(this);
    this.state={
      error: undefined
  };
}

  addOptions(e){
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
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit= {this.addOptions}>
        <input type="text" name="options"/>
        <button type="submit">Add option</button>
       </form>
    </div>)
  }
}



  ReactDOM.render(<Indecision />,document.getElementById("app"));