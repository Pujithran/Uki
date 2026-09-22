import { useState } from "react"

export default function Form(){

    const [name, setName] = useState("")

    const [age, setAge] = useState("")

    const [address, setAddress] = useState("")

    const [phone, setPhone] = useState("")

    const [feedback, setFeedback] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(name)
        console.log(age)
        console.log(address)
        console.log(phone)
        console.log(feedback)
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Application Form</legend>
            <label>Name: </label>
            <input 
                type="text" 
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            <br /><br />

            <label>Age: </label>
            <input 
                type="text" 
                value={age}
                onChange={(event) => setAge(event.target.value)}/>
            <br /><br />

            <label>Address: </label>
            <input 
                type="text" 
                value={address}
                onChange={(event) => setAddress(event.target.value)}/>
            <br /><br />

            <label>Phone Number: </label>
            <input 
                type="text" 
                value={phone}
                onChange={(event) => setPhone(event.target.value)}/>
            <br /><br />

            <label>FeedBack: </label>
            <input 
                type="text" 
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}/>
            <br /><br />

            <input type="submit" />
            </fieldset>
        </form>
    )
}