

function Map(){
    const names = ["Paul", "Nush", "Adam"]

    return(
        <div>
            {names.map((name) => (
                <p>{name}</p>
            ))}
        </div>
    )
}

export default Map