import Fb from '../assets/iconmonstr-facebook-1.svg';
import Li from '../assets/iconmonstr-linkedin-3.svg';
import X from '../assets/iconmonstr-twitter-1.svg';

const Footer = () => {
  return (
    <footer className="rounded-2xl p-5 text-white bg-gray-800 mt-5">
        <div className="flex py-12 flex-wrap">
            <div className="p-5 w-full md:w-1/3">
                <h2 className="font-extrabold text-2xl">Agency</h2>
                <p className="text-gray-400 mt-3">Agency is a leading app development company known for creating customized mobile and web applications. We deliver high-quality solutions that drive business growth, combining innovation, expertise, and exceptional user experiences.</p>
            </div>
            <div className="p-5 w-full md:w-1/3 mt-3 md:flex">
                <div className='mx-auto flex flex-col gap-2'>
                <h2 className="font-extrabold text-2xl">About us</h2>
                <a className="text-gray-400 hover:text-white" href="">Home</a>
                <a className="text-gray-400 hover:text-white" href="">Service</a>
                <a className="text-gray-400 hover:text-white" href="">Blog</a>
                </div>
            </div>
            <div className="p-5 w-full md:w-1/3 mt-3 md:flex">
                <div className='mx-auto flex flex-col gap-2'>
                    <h2 className="font-extrabold text-2xl">Contacts</h2>
                    <a className="text-gray-400" href="tel:+919025563XXXX">+91-902-5563-XXXX</a>
                    <a className="text-gray-400" href="mailto:contact@agency.com">contact@agency.com</a>
                    <div className="flex">
                        <a href='' className='bg-white p-1 mx-1 rounded'><img src={Fb} alt="" /></a>
                        <a href='' className='bg-white p-1 mx-1 rounded'><img src={Li} alt="" /></a>
                        <a href='' className='bg-white p-1 mx-1 rounded'><img src={X} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer