import { cardData } from "../utils/data"
import Card from "./Card"

const Section2 = () => {
  return (
    <section className="bg-red-100 rounded-2xl p-5">
        <div className='pt-10 lg:pb-6'>
          <h1 className='font-bold text-3xl text-center'>Our Services</h1>
          <p className='text-center w-full lg:w-1/2 mx-auto p-6'>We enable SMEs in making the best use of emerging digital technologies to build stronger capabilities & seize growth opportunities in today’s ever-evolving digital economy.</p>
        </div>
        <div className='flex flex-wrap justify-center pb-4'>
          {
            cardData.map(
                (data)=>(
                    <Card key={data.id} head={data.head} content = {data.cont} svg={data.svg} color={data.color}/>
                )
            )
          }
        </div>
      </section>
  )
}

export default Section2