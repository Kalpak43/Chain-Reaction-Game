import { useNavigate } from "react-router-dom";

export default function Start() {
    const navigate = useNavigate();

    const startGame = (e) => {
        navigate(`/Board/`);
    }
    
    return (
        <div className="h-full">
            <h1 className="text-4xl text-gray-50 font-bold py-8">Chain Reaction Game</h1>
            <div className="h-1/2 border-2 border-purple-500 rounded-xl bg-black p-8 text-xl ">
                <button className="border-2 my-2 px-2 rounded-lg bg-red-700 hover:bg-green-400" onClick={startGame}>Start Game</button>
            </div>
        </div>
    )
}