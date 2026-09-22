export default function Home(){

    const handleClick =()=>
    {
        console.log("Clicked")
    }
    return(
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}