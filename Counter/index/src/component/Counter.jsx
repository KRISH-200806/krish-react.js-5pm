import { useState } from "react"


function Counter()
{
    const [Counter,setCounter] = useState (0);
    return(
        <div className="counter"> 
            <h1 style={{fontSize:"100px"}}>Counter</h1>
            <h1 style={{ fontSize:"100px"}}>{Counter}</h1>
            <button onClick={ () => setCounter(Counter - 1 )} disabled = {Counter===0}  style ={{backgroundColor:Counter===0? "grey":"green"}}className="btn1" >Decrement</button>
            <button onClick={ () => setCounter(0)} className="btn2" >Reset</button>
            <button onClick={ () => setCounter(Counter + 1 )} className="btn3" > Increment</button>
        </div>
    )

}

export default Counter;
