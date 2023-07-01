import { useNavigate } from "react-router-dom"
import Rules from "./Rules"

export default function Start() {
    const navigate = useNavigate()

    const startGame = (e) => {
        navigate(`/Board/`)
    }

    const showRules = () => {
        const rules = document.getElementById("Rules")
        rules.classList.remove("hidden")
    }

    return (
        <div className="h-full">
            <h1 className="text-4xl text-gray-50 font-bold py-8">Chain Reaction Game</h1>
            <div className="btns h-fit w-2/3 border-2 border-gray-500 rounded-xl bg-black p-8 text-xl text-gray-50">
                <button className="border-2 border-gray-50 w-3/4 my-2 px-2 rounded-lg bg-red-700 hover:bg-green-600 hover:text-black" onClick={startGame}>Start Game</button>
                <button className="border-2 border-gray-50 w-3/4 my-2 px-2 rounded-lg bg-gray-500 hover:bg-gray-700" onClick={showRules}>How to?</button>
                <div>
                    <Rules />
                </div>
            </div>
        </div>
    )
}


