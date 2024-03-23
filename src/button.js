import { useState } from "react"
import "./App.css"

function Button(){
    const [count, setCount] = useState("ADD");
    

    function btnclicked(){
        setCount(1);

    }

    function minusclicked(){
        if (count>1){
            setCount(count-1);
        }else{
            setCount("ADD")
        }
    

    }

    function plusclicked(){
        if(count === "ADD"){
            setCount(1);

        }else{
            setCount(count+1);
        }


    }


    return(
        <div className="btn">
            <button className="minusbtn" onClick={minusclicked} >-</button>
            <button className='addbtn' type='button' onClick={btnclicked}> {count} </button>
            <button className="plusbtn" onClick={plusclicked} >+</button>

        </div>
        

    )

}

export default Button;