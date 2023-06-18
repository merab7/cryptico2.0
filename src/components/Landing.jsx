import logo from "./images/logo.png"
import Lottie from "lottie-react"
import animationData from '../assets/lottie.json'
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="  fixed top-0 left-0 right-0 bottom-0 text-white flex flex-col justify-center" >
        <div className=" container mx-auto w-64 lg:w-1/3 flex flex-col lg:mt-40  " >
      <Lottie  animationData={animationData} />
      <div className="container mx-auto gap-5   flex flex-col  mt-16 md:-ml-40 lg:flex-row lg:justify-between lg:gap-5 pb-44 lg:w-full   " >
      <Link  to="live" >
      <button className="bg-transparent outline   text-white w-60  rounded-xl hover:opacity-80  hover:scale-x-110 p-5 pl-24 pr-24  transition-all  font-serif     text-2xl text-wite md:w-full shadow-xl  shadow-blue-400     ">Stats</button>
      </Link>
       <Link to="cryptoccurrencies" >
      <button className="bg-transparent outline  text-white  w-60  rounded-xl hover:opacity-80  hover:scale-x-110 p-5  transition-all  font-serif     text-2xl text-wite md:w-full shadow-xl  shadow-blue-400   ">Cryptocurrencies</button>
      </Link>
      <Link to="exchanges" >
      <button className="bg-transparent outline   text-white   w-60  rounded-xl hover:opacity-80  hover:scale-x-110 p-5 pl-16 pr-16  transition-all  font-serif    text-2xl text-wite md:w-full shadow-xl  shadow-blue-400  ">Exchanges</button>
      </Link>
      <Link to="news" >
      <button className="bg-transparent outline   text-white    w-60  rounded-xl hover:opacity-80 hover:scale-x-110  p-5 pl-24 pr-24    transition-all font-serif   text-2xl text-wite md:w-full shadow-xl  shadow-blue-400  ">News</button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Landing
