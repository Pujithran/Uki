import { useState } from "react"

export default function Form(){
    
    const [name,setName] = useState("")

    const handleClick = () => {
        console.log("Submitted")
    }
    
    return(
        <form>
            <label>Name</label>
            <br />
            <input 
                type="text" 
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            <br /><br />
            <input type="submit" onClick={handleClick}/>
            <p>Name: {name}</p>
        </form>
    )
}