import { useState } from "react"

export default function State(){
    const [count, setCount]= useState(0);
    return (
        <div className="h-fit w-[25%] bg-gray-50 shadow-xs shadow-gray-300 rounded mx-auto my-5 flex flex-col items-center gap-4 p-4" >
            <h1>Counter by useState</h1>
            <h1>{count}</h1>
            <button className="px-6 py-1 font-bold bg-lime-600 text-white text-center rounded" onClick={()=>setCount(count+1)}>Icreament</button>
        </div>
    )
}