import Electronic from "./components/Electronic"

export default function Electronics(){
    const electronics = [
        {
            name:"iPhone 12 Pro",
            imgUrl: "./img/iPhone-12.jpg",
            price: 1100,
            details:"Memory : 140GB    RAM : 10GB ",
        },
        {
            name:"iPhone 15 Pro Max",
            imgUrl: "./img/iPhone-16-Pro.jpg",
            price: 2000,
            details:"Memory : 512GB    RAM : 12GB ",
        },
        {
            name:"iPhone 11 Pro",
            imgUrl: "./img/iPhone 11.jpg",
            price: 1000,
            details:"Memory : 64GB    RAM : 8GB ",
        },
        {
            name:"iPhone 16 Pro Max",
            imgUrl: "./img/iPhone_16_Pro_Max.webp",
            price: 3500,
            details:"Memory : 128GB    RAM : 12GB ",
        },
        {
            name:"iPhone 13 Pro Max",
            imgUrl: "./img/iPhone-13.jpg",
            price: 1400,
            details:"Memory : 256GB    RAM : 12GB ",
        },
    ]
    return (
        <div className="h-fit w-[80%] mx-auto p-4 bg-gray-200 rounded my-5 flex justify-between items-center gap-3 flex-wrap">
            {electronics.map(item => (
                <Electronic key={item.name} name={item.name} imgUrl={item.imgUrl} price={item.price} details={item.details} />
            ))}
        </div>
    )
}