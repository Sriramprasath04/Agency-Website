const Section5 = () => {
  return (
    <section className="bg-blue-100 rounded-2xl p-5 mt-10">
        <div className="pt-3 md:pt-10 lg:pb-3">
          <h1 className="mt-5 text-center font-bold text-3xl">Oue Blog</h1>
          <p className="w-full lg:w-1/2 text-center mx-auto p-6">We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
        </div>
        <div className='pt-2 md:pt-5 lg:pb-6 lg:w-4/5 w-full mx-auto'>
            <div className="grid md:grid-cols-2 grid-rows-2 gap-5 p-5">
                <div className="rounded-md md:row-span-2 overflow-hidden relative cursor-pointer ">
                    <button className=" bg-red-500 hover:bg-red-600  absolute bottom-5 left-5 z-50 text-white font-bold px-4 py-3">Read More</button>
                    <img className="object-cover object-left md:scale-150 h-full" src="https://blog.zohowebstatic.com/sites/zblogs/images/workerly/workerlytwo/workerly_2.0_1.png" alt="" />
                </div>
                <div className=" relative cursor-pointer">
                    <button className=" bg-red-500 hover:bg-red-600  absolute bottom-5 left-5 text-white font-bold px-4 py-3">Read More</button>
                    <img className="rounded-md" src="https://blog.zohowebstatic.com/sites/zblogs/images/sign/zohosign/kenya_npki.jpg" alt="" />
                </div>
                <div className="mb-3 rounded-md relative cursor-pointer">
                    <button className=" bg-red-500 hover:bg-red-600  absolute bottom-5 left-5 text-white font-bold px-4 py-3">Read More</button>
                    <img className="rounded-md" src="https://blog.zohowebstatic.com/sites/zblogs/images/forms/zohoformsblogimages/banner.png" alt="" />
                </div>
            </div>
        </div>
        <div className="flex justify-center cursor-pointer">
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
    </section>
  )
}

export default Section5;