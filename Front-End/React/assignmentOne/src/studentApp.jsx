import { useState } from "react";

export default function studentName() {
    const [name, setName] = useState("")
    
    const clearName = () => {
        setName("")
    }
}

return(
    <div>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
    
        
    
    </div>
)