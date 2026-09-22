import { useState } from "react";

// export default function Hooks (){
//     const [count,setCount]=useState(0)
//     const handleClick = () =>{
//         console.log("Clicked")
//         setCount (count+1)
//     }
//     const decreaseClick = () =>{
//         console.log("Clicked")
//         setCount (count-1)
//     }
//     const [name,setName]=useState("Paul")
//     const changeName = () =>{
//         console.log("Clicked")
//         setName ("Milk")
//     }
//     const [Colour,setColour]=useState("Red")
//     const changeColor = () =>{
//         console.log("Clicked")
//         setColour ("Green")
//     }

    
    
//     return(
//         <div>
//         <br />
//         <h1>Count :{count}</h1>
//         <button onClick={handleClick}>Increase</button>
//         <button onClick={decreaseClick}>Decrease</button>

//         <button onClick={changeName}>Name: {name}</button>

//         <button onClick={changeColor} style={{backgroundColor:Colour}}>Colour</button>
//         </div>
//     )
// }

    export default function Hooks() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  const decreaseClick = () => setCount(count - 1);

  const [name, setName] = useState("Paul");
  const changeName = () => setName("Milk");

  const [Colour, setColour] = useState("Red");
  const changeColor = () => setColour("Green");

  return (
    <div className="panel">
      <div className="readout">
        <p className="label">Count</p>
        <p className="value">{count}</p>
      </div>

      <div className="stepper">
        <button onClick={decreaseClick}>−</button>
        <button className="plus" onClick={handleClick}>+</button>
      </div>

      <button className="full-row" onClick={changeName}>Name: {name}</button>

      <button
        className="swatch"
        onClick={changeColor}
        style={{ backgroundColor: Colour }}
      >
        Colour 
      </button>
    </div>
  );
}

