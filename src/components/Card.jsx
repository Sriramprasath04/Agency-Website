const Card = (porps) => {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/3 font-blue-500 m-5 p-10 rounded-xl bg-white">
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={porps.color+" w-9 h-16"}>
            <path strokeLinecap="round" strokeLinejoin="round" d={porps.svg}/>
        </svg>
        <h2 className="font-bold text-2xl text-gray-600">{porps.head}</h2>
        <p className="pt-3">{porps.content}</p>
    </div>
  )
}

export default Card;

