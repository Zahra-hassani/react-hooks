import { useReducer } from "react"

export default function Counter(){
    const [counter,dispatch] = useReducer(reduce,{number:0,isCount:false});
    function reduce(a,action){
        if(action.type=== "inc"){
            setInterval(()=>{
                return {...a, number: a.number + action.payload,isCount : !a.isCount}
            },2000)
        }
        else{
            clearInterval();
            return {...a, number: a.number, isCount: false}
        }
    }
    return (
        <div className="text-center w-fit mx-auto h-fit p-3 rounded shadow-xs">
            <h1>Count: {counter.number}</h1>
            <button onClick={()=> dispatch({type:"inc", payload:1})} className="text-white mx-2 my-1 font-bold bg-sky-500 rounded px-6 py-1">Count</button>
            <button onClick={()=> dispatch({type:"stop", payload:1})} className="text-white mx-2 my-1 font-bold bg-sky-500 rounded px-6 py-1">Stop Count</button>
        </div>
    )
}