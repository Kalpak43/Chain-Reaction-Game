export default function TurnIndicator(props) {
    let redStyle = "bg-red-900"
    let greenStyle = "bg-green-900"

    if (props.turn === 1) {
        redStyle = "bg-red-700 redShadow"
        greenStyle = "bg-green-900"
    }
    else {
        greenStyle = "bg-green-700 greenShadow"
        redStyle = "bg-red-900"
    }
    return (
        <div className="h-full w-full text-gray-50 relative" title={props.turn === 1 ? "Red's Turn" : "Green's Turn"}>
            <div className="h-1/2 w-full absolute inset-0 m-auto">
                <h1>TURN</h1>
                <div className={"turnIndicator border-2 border-red-500 aspect-square h-1/6 circle mx-auto my-4 " + redStyle}></div>
                <div className={"turnIndicator border-2 border-green-500 aspect-square h-1/6 circle mx-auto my-4 " + greenStyle}></div>
            </div>
        </div>
    )
}
