import { useReducer } from "react"

export default function ReduceHook(){
    const [value,dispatch] = useReducer(reduce,{number:0,click:0});
    function reduce(value,action){
        if(action.type ==="inc"){
            return {...value,number: value.number+action.payload, click: value.click+action.payload}
        }
        else{
            return {...value,number: value.number-action.payload, click: value.click+action.payload}
        }
    }
    return (
        <div className="text-center w-fit mx-auto h-fit p-3 rounded shadow-xs">
            <h1 className="font-bold text-2xl">number: {value.number}</h1>
            <h1 className="font-bold text-2xl">clicked buttons for : {value.click} times</h1>
            <button onClick={()=> dispatch({type:"inc",payload:1})} className="text-white mx-2 my-1 font-bold bg-sky-500 rounded px-6 py-1">Increament</button>
            <button onClick={()=> dispatch({type:"dec",payload:1})} className="text-white mx-2 my-1 font-bold bg-sky-500 rounded px-6 py-1">Decreament</button>
        </div>
    )
}