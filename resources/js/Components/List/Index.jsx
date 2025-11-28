export default function Index({title,data}){
    return (
        <>
            <p className="text-white">{title}</p>
            {data.map((item)=>(
                <div key={item.id} className="p-2 hover:bg-gray-800 rounded cursor-pointer mb-1">
                    <p className="text-white">{item.name}</p>
                </div>
            ))}
        </>
    )
}