export default function NavList(){
    return (
        <div className="h-full w-[60%] mx-auto">
            <ul className="h-full flex justify-between items-center gap-4">
                <li className="px-3 py-1 hover:text-blue-500 font-bold transition-all duration-300"><a href="">Home</a></li>
                <li className="px-3 py-1 hover:text-blue-500 font-bold transition-all duration-300"><a href="">Blog</a></li>
                <li className="px-3 py-1 hover:text-blue-500 font-bold transition-all duration-300"><a href="">About Us</a></li>
                <li className="px-3 py-1 hover:text-blue-500 font-bold transition-all duration-300"><a href="">Contact Us</a></li>
            </ul>
        </div>
    )
}