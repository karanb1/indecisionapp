const temp = document.getElementById("app");


const app = {
    title: "Indecision app",
    subtitle : "Welcome",
    options: []
}

const onFormSubmit = (e)=> {
  e.preventDefault();
  const option = e.target.elements.options.value;
  if(option){
      app.options.push(option);
      e.target.elements.options.value = "";
      render();
  }
}

const remove = ()=>{
    app.options = [];
    render();
}

const doSomething = ()=>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const options = app.options[randomNum];
    alert(options)

}

const render = ()=>{
 const template = 
 <div>
    <h1>{app.title.toUpperCase()}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    <h1>{app.options.length > 0 ? "Here are your options": "No options"}</h1>
    <button onClick = {doSomething} disabled = {app.options.length>0 ? false : true}>what should I do?</button>
    <button onClick={remove}>remove</button>
      <ol>
        {
            app.options.map((option) =>{
              return <li key = {option}>{option}</li>
            })
            
        }
      </ol>
      <form onSubmit= {onFormSubmit}>
        <input type="text" name="options"/>
        <button type="submit">Add option</button>
       </form>
 </div> ;
 


 ReactDOM.render(template, temp);
}
render();