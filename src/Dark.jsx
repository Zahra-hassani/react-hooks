import { useMemo, useState } from "react"

export default function Dark(){
    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);
    const [double, setDouble] = useState(0);

    useMemo(()=>{
        for(let i = 0; i<200000000;i++){}
        setDouble(number*2);
        },[number])
        function handleChange(e){
        setNumber(parseInt(e.target.value));

    }
    return (
        <div className={`h-[60%] ${dark?"bg-black text-white":"bg-white text-black"} w-full flex justify-center flex-col items-center gap-5 p-6`}>
            <div>
                <input value={number} onChange={(e)=> handleChange(e)} type="number" className={`px-3 py-1 rounded border ${dark?"border-white":"border-black"} outline-0`} placeholder="Enter a number to multiply by 2" />
                <h1>{double}</h1>
            </div>
            <button onClick={()=> setDark(!dark)} className={`px-6 py-1 rounded ${dark?"bg-black text-white border border-white shadow-xs shadow-white":"bg-white text-black border border-black shadow-xs shadow-black"}`}>Toggle theme</button>
        </div>
    )
}