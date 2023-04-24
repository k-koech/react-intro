import { useState } from "react"

export default function Events() 
{
    const [button, setButton] = useState(true)

    const handleClick = ()=>{
        console.log("Button is clicked!!!!")
    }
 
    console.log("Button ", button)
    
    function handleButtonClick(){
        setButton(!button)
    }

  return (
    <div>
        <h1>Events</h1>
        <button onClick={handleClick} className="btn btn-success">Click</button>
        <div className="mt-5">
            {/* {
                button==true?
                <button onClick={handleButtonClick} type="button" className="btn btn-outline-success">
                    Success
                </button>
                :
                <button onClick={handleButtonClick} type="button" class="btn btn-outline-danger">
                    Danger
                </button>

           } */}
            {
                <button onClick={handleButtonClick} type="button" className={`${button==true?"btn btn-outline-success":"btn btn-danger" } `}>
                  {button?"Success":"Danger"}  
                </button>
            
            }
        </div>
        
    </div>
  )
}

