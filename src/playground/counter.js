class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        };
      }
    addOne(){
       this.setState((prevState)=>{
           return({ 
               count: prevState.count + 1 
            });
        });

    }
    minusOne(){
        this.setState((prevState)=>{
            return({
                count: prevState.count - 1
            });
          });
    }
    reset(){
        this.setState(()=>{
            return({
                count: 0
            });
          });
    }

    ComponentDidMount(){
        const string = localStorage.getItem('count');
        const count = parseInt(string, 10);
        if(!isNaN(count)){
            this.setState(()=>{
                return({
                    count: count
                })
            })
        }
    }
    ComponentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
           localStorage.setItem('count',this.state.count)
        }
    }
    render(){
        return(
            <div>
             <h1>Count: {this.state.count}</h1>
             <button onClick={this.addOne}>+1</button>
             <button onClick={this.minusOne}>-1</button>
             <button onClick={this.reset}>Reset</button>
            </div>
        );
    };
}


const temp = document.getElementById("app");

ReactDOM.render(<Counter />, temp); 
 
