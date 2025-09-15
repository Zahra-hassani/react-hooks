import { useEffect, useState } from "react"

export default function User(){
    const [users ,setUser] = useState([]);
    useEffect(()=>{
        async function fetchData(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();
        // console.log(response);
        setUser(response);
        }
        fetchData();
    },[users])
    return (
        <div className="w-[90%] mx-auto p-3 flex justify-between gap-4 items-center flex-wrap">
            {users.map(user=>(
                <div key={user.id} className="h-fit w-[25%] bg-gray-50 shadow-md flex flex-col items-center gap-3 p-3 rounded">
            <h1 className="font-bold text-2xl">Full name: {user.name}</h1>
            <h1 className="text-2xl">email: {user.email}</h1>
            <h1 className="text-xl">Phone: {user.phone}</h1>
            <h1 className="text-xl">Website: {user.website}</h1>
            </div>
            ))}
        </div>
    )
}