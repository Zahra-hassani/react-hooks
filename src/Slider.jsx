import { useState } from "react"

export default function Slider(){
    const imgs =[
        "../src/assets/slide5.jpg",
        "../src/assets/slide7.jpg",
        "../src/assets/slide10.jpg",
        "../src/assets/slide17.jpg",
        "../src/assets/slide19.jpg",
        "../src/assets/slide20.jpg",
        "../src/assets/slide21.jpg",
        "../src/assets/slide22.jpg",
    ];
    let [index,setIndex] = useState(0);

    setTimeout(() => {
        setIndex(index+1);
        if (index+1> imgs.length-1) {
            setIndex(0);
        }
    }, 5000);
    const nextBtn = ()=>{
        if (index+1 > imgs.length-1) {
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    const prevBtn = ()=>{
        if (index-1<0) {
            setIndex(imgs.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    return(
        <div className="h-screen w-full flex justify-between items-center gap-4 px-4">
            <button onClick={prevBtn} className="px-6 py-1 rounded bg-blue-500 text-white" >Previous</button>
            <img src={imgs[index]} className="h-[400px] w-[50%] shadow-xs rounded" alt="image-slider" />
            <button onClick={nextBtn} className="px-6 py-1 rounded bg-blue-500 text-white" >Next</button>
        </div>
    )
}