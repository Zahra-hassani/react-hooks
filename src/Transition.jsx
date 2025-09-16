import { useTransition } from "react";
import { useState } from "react"

export default function Transition(){
    const [value , setValue] = useState("");
    const [text, setText] = useState([]);
    const LIST_size = 500;
    const [loading, startTrasition] = useTransition();
    const l = [];
    function handleChange(e){
        setValue(e.target.value);
        startTrasition(()=>{
        for(let i = 0; i<LIST_size; i++){
            l.push(value);  
        }
        setText(l);
    })
    }
    return (
        <div className="h-[80vh] w-full flex flex-col items-center gap-3">
            <h1 className="font-bold text-3xl">useTransition</h1>
            <input value={value} onChange={(e) => handleChange(e)} type="text" className="outline-0 border rounded p-1" />
            {loading? "Please wait ...":text.map((letter, index)=>(
                <h1 className="font-bold text-xl" key={index}>{letter}</h1>
            ))}
        </div>
    )
}