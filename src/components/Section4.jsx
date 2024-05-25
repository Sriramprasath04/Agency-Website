import { reviews } from "../utils/data"
import Review from "./Review"

const Section4 = () => {
  return (
    <section className="bg-purple-200 rounded-2xl p-5">
        <div className='pt-10 lg:pb-6'>
          <h1 className='font-bold text-3xl text-center'>Testimonials</h1>
          <p className='text-center w-full lg:w-1/2 mx-auto p-6'>What our client say.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center px-3 pb-10">
            {
                reviews.map(
                    (data)=>(
                        <Review key={data.id} company={data.company} review={'"'+data.review+'"'} url={data.url} />
                    )
                )
            }
        </div>
    </section>
  )
}

export default Section4;