import {urlCompany} from "../utils/data"

const Section3 = () => {
  return (
    <section className="w-full p-10">
        <div className=" p-10 sm:w-full md:w-4/5 mx-auto bg-green-300 rounded-2xl">
            <h2 className="text-center font-bold text-3xl">Companies who trust on us</h2>
            <div className="flex flex-wrap justify-center mt-3 p-3">
                {
                  urlCompany.map(
                    (data)=>(
                      <img src={data.url} key={data.id} className="h-14 m-4" alt=""/>
                    )
                  )
                }
            </div>
        </div>
    </section>
  )
}

export default Section3