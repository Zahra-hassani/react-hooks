import { useState } from "react"
import Details from "./Details";

export default function Electronic({name, imgUrl, price, details}){
    const [render, setRender] = useState(false);
    function toggleRender(){
        setRender(!render);
    }
    return (
        <div className="h-fit w-50 rounded bg-gray-50 p-2 shadow-xs text-center flex flex-col items-center gap-3">
            <img src={imgUrl} className="h-[60%] rounded" alt="" />
            <h1 className="font-bold text-xl">{name}</h1>
            <h2 className="font-semibold">{price}</h2>
            <button onClick={toggleRender} className="px-6 py-1 text-white font-bold bg-purple-400 rounded">Details</button>
            {render && <Details details={details} />}
        </div>
    )
}