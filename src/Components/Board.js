import MainGame from "./MainGame";

export default function Board() {

    return (
        <div className="h-full w-full bg-gray-900">
            <div className="BoardHeader BG h-10vh text-gray-50  rounded-b-lg text-left p-4 text-3xl font-bold">Chain Reaction Game</div>
            <div className="">
                <MainGame />
            </div>
        </div>
    )
}