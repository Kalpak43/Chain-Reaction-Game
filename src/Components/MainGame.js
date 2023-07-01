import { useState } from "react";
import TurnIndicator from "./TurnIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function MainGame(props) {
    // All colors available to play in the game
    const colors = ["red", "green"]

    // Total players playing the game will be decremented when any player is eliminated.
    const [players, setPlayers] = useState(2)

    // colors that will be assigned to each player and any color can be deleted from this array when that player gets eliminated.
    // const [inUseColors, setInUseColors] = useState([...colors.slice(0, players)])

    // keeps track of whose chance it is to play
    const [turn, setTurn] = useState(1)
    // sets color based on the turn
    const turnColor = colors[turn - 1]

    // true only if cell is clicked and not any other part of the board
    let validClick = false

    const [turnCount, setTurnCount] = useState(1)

    // 11 x 6 array having every element = {mass: 0, color: "gray"} 
    const [Arr, setArr] = useState(
        [...new Array(11)].map(x => [...new Array(6)].map(y => ({ mass: 0, color: "gray" })))
    )

    // Delay used to slow down the claculations and show animations
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    let run = true
    const [stop, setStop] = useState(!run)
    const [winner, setWinner] = useState("")

    // Main logic of the game
    const checkMass = async (ind1, ind2, turnColor) => {
        let criticalMass = 4

        if ((ind1 === 0 && ind2 === 0) || (ind1 === 0 && ind2 === 5) || (ind1 === 10 && ind2 === 0) || (ind1 === 10 && ind2 === 5)) {
            criticalMass = 2
        }
        else if (ind1 === 0 || ind1 === 10 || ind2 === 0 || ind2 === 5) {
            criticalMass = 3
        }

        const copyOfArrRow = Arr[ind1]
        copyOfArrRow[ind2].mass += 1
        copyOfArrRow[ind2].color = turnColor

        if (run) {

            if (turnCount > players) {

                if (Arr.every(x => x.every(y => y.color === turnColor || y.color === "gray"))) {
                    console.log(`${turnColor} won`)
                    run = false
                    setWinner(turnColor)
                }
            }
            await delay(50)
            if (copyOfArrRow[ind2].mass === criticalMass) {

                copyOfArrRow[ind2].mass = 0
                copyOfArrRow[ind2].color = "gray"
                setArr((prev) => {
                    return [
                        ...prev.slice(0, ind1),
                        copyOfArrRow,
                        ...prev.slice(ind1 + 1)
                    ]
                })


                if (ind1 !== 0) {
                    checkMass(ind1 - 1, ind2, turnColor)
                }

                if (ind1 !== 10) {
                    checkMass(ind1 + 1, ind2, turnColor)
                }

                if (ind2 !== 0) {
                    checkMass(ind1, ind2 - 1, turnColor)
                }

                if (ind2 !== 5) {
                    checkMass(ind1, ind2 + 1, turnColor)
                }

            }
            else {

                setArr((prev) => {
                    return [
                        ...prev.slice(0, ind1),
                        copyOfArrRow,
                        ...prev.slice(ind1 + 1)
                    ]
                })

            }
        }

        setStop(!run)
        return
    }

    // Provoked on every click that occurs on each cell
    const handleGame = (e) => {

        e.preventDefault()

        const ind1 = Number(e.target.getAttribute('data-key1'))
        const ind2 = Number(e.target.getAttribute('data-key2'))

        const copy = Arr[ind1]
        const color = copy[ind2].color

        if (color === turnColor || color === "gray") {
            checkMass(ind1, ind2, turnColor)
            validClick = true
        }
    }

    const resetGame = () => {
        setArr([...new Array(11)].map(x => [...new Array(6)].map(y => ({ mass: 0, color: "gray" }))))
        setTurn(1)
        setTurnCount(1)
        setWinner("")
        setStop(false)
    }

    // How Arr will be rendered
    const divArr = Arr.map((i, j) => {

        return (
            <div key={j} className="grid grid-cols-6">
                {i.map((k, l) => {
                    const style = `aspect-square max-h-65 m-1 rounded-lg relative text-center bg-${k.color}-600`
                    let dispCircles = ""
                    let circleColor = `bg-${k.color}-900`

                    if (k.mass === 1) {
                        dispCircles = <div className={"child border-2 h-1/2 w-1/2 absolute top-1/4 left-1/4 circle " + circleColor}></div>
                    }
                    else if (k.mass === 2) {
                        dispCircles = <div className="child">
                            <div className={"border-2 h-1/3 w-1/3 absolute top-1/4 left-0 circle m-1 " + circleColor}></div>
                            <div className={"border-2 h-1/3 w-1/3 absolute top-1/4 left-1/2 circle m-1 " + circleColor}></div>
                        </div>
                    }
                    else if (k.mass === 3) {
                        dispCircles = <div className="child">
                            <div className={"border-2 h-1/3 w-1/3 absolute top-1/5 left-1/4 circle m-1 " + circleColor}></div>
                            <div className={"border-2 h-1/3 w-1/3 absolute top-1/3 left-0 circle m-1 " + circleColor}></div>
                            <div className={"border-2 h-1/3 w-1/3 absolute top-1/3 left-1/2 circle m-1 " + circleColor}></div>
                        </div>
                    }

                    return <div className={style} key={l} data-key1={j} data-key2={l} onClick={handleGame}>
                        {dispCircles}
                    </div>
                })}
            </div>
        )
    })

    return (
        <div className="MainGame grid grid-cols-3">
            <div className="TurnBlock">
                <TurnIndicator turn={turn} />
            </div>
            <div className="GameContainer flex w-full h-90vh justify-center col-start-2 col-end-3 relative border-r-2 border-l-2">
                <div className="grid grid-rows-11 text-gray-50" onClick={() => {
                    if (validClick) {
                        setTurn((turn % players) + 1)
                        validClick = false
                        setTurnCount(prev => prev + 1)
                    }
                }}>
                    {divArr}
                </div>
                {stop && <div className="absolute flex justify-center items-center h-full w-full bg-gray-200 opacity-50">
                            <p className="text-5xl font-bold">{winner} won</p>
                        </div>}
            </div>
            <div className="Reset relative">
                <button className="absolute inset-0 m-auto text-gray-50 border-2 h-1/6 aspect-square circle bg-gray-500 rotate-90 hover:text-black" title="Reset" onClick={resetGame}>
                    <FontAwesomeIcon icon={faRotateRight} className="fa-3x fa-flip-horizontal" />
                </button>
            </div>
        </div>
    )

}