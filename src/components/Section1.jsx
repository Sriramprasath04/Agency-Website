import HeroImg from '../assets/hero2.svg';
const Section1 = () => {
  return (
    <section className="p-5 mb-10">
        <div className="container mx-auto">
          <div className="flex py-16 lg:py-36 px-5">
            <div className="w-full lg:w-1/2">
              <h2 className=" text-center lg:text-left font-bold md:font-semibold text-3xl md:text-5xl lg:text-6xl">
                World class Design for your Products.
              </h2>
              <p className="mt-6 text-md md:text-lg lg:text-2xl text-center lg:text-left">
                Lets bring life to your brand.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <button className="font-bold px-4 py-2 text-white bg-purple-400 shadow  hover:bg-purple-500 shadow-slate-900 mr-4 rounded-2xl">
                  Services
                </button>
                <button className=" font-bold px-4 py-2 text-white bg-red-500 hover:bg-red-600 shadow-sm shadow-slate-900 mr-4 rounded-2xl">
                  Contact us
                </button>
              </div>
            </div>
            <div className="hidden lg:block w-1/2">
              <img src={HeroImg} alt="" />
            </div>
          </div>
          <div className="flex justify-center cursor-pointer mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
            <span className="hidden md:block pl-3 font-semibold">Scroll dwon</span>
          </div>
        </div>
      </section>
  )
}

export default Section1