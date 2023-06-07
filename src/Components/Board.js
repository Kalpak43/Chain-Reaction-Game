import MainGame from "./MainGame";

export default function Board() {

    return (
        <div className="h-full w-full">
            <div className="BoardHeader h-10vh text-gray-50 border-b-2 text-left p-4 text-3xl font-bold">Chain Reaction Game</div>
            <div className="">
                <MainGame />
            </div>
        </div>
    )
}