const SmallNewsCard = ({img, title, category}) => {
  return (
    <div className="cursor-pointer space-x-4 transition-all transform flex items-start hover:shadow-md">
      <div className="overflow-hidden relative w-48 h-24 bg-red-600">
        <img src={img} className="w-full" />
      </div>
      <div className=" flex-1">
        <h1 className="text-base">{title}</h1>
        <p className="uppercase text-xs cursor-pointer transition-all text-gray-400 hover:text-gray-500">{category}</p>
      </div>
    </div>
  )
}

export default SmallNewsCard;