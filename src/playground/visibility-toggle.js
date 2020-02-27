const temp = document.getElementById("app");

class Visibile extends React.Component {
  constructor(props){
    super(props);
    this.visi = this.visi.bind(this);
    this.state = {
      visibility: false
    }
  }

  visi(){
    this.setState((prevState)=>{
      return({
        visibility: !prevState.visibility
      })
    })
    
  }

  render(){
    return (
      <div>
        <h1>VISIBILITY TOGGLE</h1>
        <button onClick={this.visi}>{this.state.visibility? "hide":"show"}</button>
        {this.state.visibility && (<div>here</div>)} 
      </div>
    )
  }

}

ReactDOM.render(<Visibile />,temp);

// let visibility = false;
// const doSomething = ()=> {
//  visibility = !visibility;
//   render();
// }


// const render =()=>{
// const template = 
// <div>
//   <h1>VISIBILITY TOGGLE</h1>
//      <button onClick={doSomething}>{visibility? "hide" : "show"}</button>
//      {visibility && (<div><p>here</p></div>)}
// </div>;

// ReactDOM.render(template,temp);
// }
// render();