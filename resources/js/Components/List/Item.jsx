import LastMessage from "./LastMessage";

const Item = ( {room } ) => {
    console.log(room);
    

  return (
    <div className="text-white py-3 px-3 flex rtl:space-x-reverse cursor-pointer hover:bg-gray-100/50 hover:rounded-lg dark:hover:bg-gray-800 rounded-lg">
      <div className="flex-shrink-0">
          <img src={`images/${room.avatar}`} className="h-10 w-10 rounded-full bg-white" alt={room.name}></img>
      </div>
      <div className="flex-1 ml-2 w-0">
        <div>
          <p className="text-sm font-medium text-white truncate dark:text-white">
            {room.name}
          </p>
          <LastMessage lastMessage={room.lastMessage.content}/>
        </div>
      </div>
    </div>
  )
}

export default Item;