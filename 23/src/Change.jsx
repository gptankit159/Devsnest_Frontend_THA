import {useState} from 'react';
import useCustom from "./hooks/useCustom";
function Change(){
    let [val , setVal] = useState("This line will change as you type.");
    useCustom(val);
    console.log(val);
    return (
        <div>
            <input type="text" onChange={(e) => { val.length === 0? setVal("This line will change as you type."): setVal(e.target.value) }} />
            <h2>${val}</h2>
        </div>
        
    )
  }

export default Change;