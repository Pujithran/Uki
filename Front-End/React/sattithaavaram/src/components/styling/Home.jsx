export default function Home({ img, name = "Charles Leclerc" }){
    return(
        <>
        <div style={style.box}>
            <div><img src={img} alt={name} style={{ width: '100%', height: 'auto' }}/></div>
            <p style={style.react}>{name}</p>
        </div>
        </>
    )
}

const style = {
    box:{
        margin: "100px",
        backgroundColor:"rgba(255, 0, 0, 0.5)",
        height: "300px",
        width: "250px",
        padding: "70px"
    },
    hello:{
        fontSize:"75px"
    },
    subBody1:{
        margin: "100px"
    }

}