import { useContext } from "react"
import { nameContext } from "../App"

export default function UserName(){
    const {name,lastName} =useContext(nameContext);
    return (
        <div className="w-full font-bold text-2xl bg-gray-50 p-4">
            <h1>Hi dear {name} {lastName}!</h1>
        </div>
    )
}