import Item from "./Item";

export default function Index({title,data}){
    return (
        <>
            <p className="text-white">{title}</p>
            {data.map((item)=>(
                <Item key={item.id} room={item}/>
            ))}
        </>
    )
}