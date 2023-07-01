export default function Rules() {

    const hideRules = () => {
        const rules = document.getElementById("Rules")
        rules.classList.add("hidden")
    }

    return (
        <div className="text-gray-50 text-left bg-gray-800 w-fit h-90vh absolute top-0 left-10 right-10 m-10 p-5 rounded-lg hidden" id="Rules">
            <div className="h-full overflow-y-scroll">
                <b className="text-xl">Rules for Chain Reaction Game</b>
                <br />
                <br />
                <ol>
                    <li>
                        <b>Game Setup:</b>
                        <ul className="list-disc">
                            <li>The game is played on a grid board with cells.</li>
                            <li>Each cell can hold a maximum of one sphere.</li>
                            <li>Players take turns placing their spheres on the board.</li>
                            <li>The number of players can vary, but typically it's a two-player game.</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <b>Sphere Placement:</b>
                        <ul className="list-disc">
                            <li>On their turn, each player places one sphere on an empty cell.</li>
                            <li>Players can only place their spheres in empty cells or cells that contain their own spheres.</li>
                            <li>The placement of a sphere creates a chain reaction that can potentially eliminate other spheres.</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <b>Chain Reactions:</b>
                        <ul className="list-disc">
                            <li>When a cell contains the maximum number of spheres it can hold (equal to the number of adjacent cells), a chain reaction occurs.</li>
                            <li>A chain reaction happens simultaneously for each cell that reaches its maximum capacity.</li>
                            <li>During a chain reaction, the spheres in the current cell distribute one sphere to each adjacent cell (including diagonals).</li>
                            <li>If an adjacent cell already contains spheres of the same player, they absorb the incoming spheres and add them to their own count.</li>
                            <li>If an adjacent cell contains spheres of the opponent, they may be eliminated based on the number of spheres involved in the chain reaction.</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <b>Elimination:</b>
                        <ul className="list-disc">
                            <li>When a chain reaction occurs, the spheres involved in the chain reaction have the potential to eliminate opponents' spheres.</li>
                            <li>If the number of spheres in an opponent's cell is equal to or smaller than the number of incoming spheres during a chain reaction, they are eliminated.</li>
                            <li>Eliminated spheres are removed from the board and do not participate in subsequent chain reactions.</li>
                            <li>A player can be eliminated from the game if all their spheres are eliminated.</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <b>Winning the Game:</b>
                        <ul className="list-disc">
                            <li>The game continues until only one player has spheres remaining on the board.</li>
                            <li>The last player with spheres wins the game.</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <button className="absolute top-0 right-2 font-bold text-lg text-gray-400 hover:text-gray-50" onClick={hideRules}>x</button>
        </div>
    )
}