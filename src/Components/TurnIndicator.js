export default function TurnIndicator (props) {
    let redStyle = "bg-red-900"
    let greenStyle = "bg-green-900"

    if(props.turn === 1) 
    {
        redStyle = "bg-red-700 redShadow"
        greenStyle = "bg-green-900"
    }
    else {
        greenStyle = "bg-green-700 greenShadow"
        redStyle = "bg-red-900"
    }
    return (
        <div className="text-gray-50 flex justify-center items-center flex-col">
            TURN
            <div className={"turnIndicator border-2 border-red-500 aspect-square circle m-4 " + redStyle}></div>
            <div className={"turnIndicator border-2 border-green-500 aspect-square circle m-4 " + greenStyle}></div>
        </div>
    )
}