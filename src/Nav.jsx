import NavList from "./components/NavList";

export default function Nav(){
    return (
        <div className="h-20 w-full bg-gray-50 sticky top-0 left-0 shadow-xs z-50  text-xl flex justify-center items-center gap-3 px-4s">
            <NavList />
        </div>
    )
}