import millify from "millify"
import { Link } from "react-router-dom"
import { useGetCryptosQuery } from "../services/cryptoApi"
import { useState, useEffect } from "react"
import { Input } from "postcss"

const Cryptoccurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching}=useGetCryptosQuery(count)
  const [cryptos, setCryptos]=useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
useEffect(()=>{ 
   const filteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
   setCryptos(filteredData);
  },[cryptosList, searchTerm])


  if(isFetching) return 'Loading...';
  
const rendered=cryptos?.map(curen=>(
       
    <Link className="p-10  hover:scale-110 transition-all shadow-xl  shadow-green-200    " to={`/crypto/${curen.id}`} >
     
            <div  className="  flex flex-row gap-4  items-center  border-b-2 pb-2   w-full  " >
            <h1 className="text-black font-bold text-xl  " >{`${curen.rank}.${curen.name}`}</h1>
              <img className="w-9 md:w-9 " src={`${curen.iconUrl}`} alt="" />
            </div>
            <div  className="mt-3 flex flex-col text-xl  " >
              <p>Price : {millify(curen.price)} $ </p>
              <p>Market Cap : {millify(curen.marketCap)} $ </p>
              <p>Daily change : {millify(curen.change)} $ </p>
            </div>

      
    </Link>
 

))



  return (
      <div className="relative  ">
      <div className={`${simplified ? "hidden" : "flex" }`} >
        <form  >
        <input className="absolute mt-60  ml-20 md:ml-12 p-4 md:pr-28  rounded-xl pl-5 border-2 shadow-xl shadow-blue-400   text-black  outline-none bg-white  " type='text' placeholder="Search Cryptocurrency" onChange={(e)=> setSearchTerm(e.target.value) }/>
        </form>
      </div>
    <div className={`${simplified ? "bg-white -ml-5  pt-16  pb-16 grid md:grid-cols-3 lg:grid-cols-6 gap-9 pl-16 pr-16 " : " bg-white -ml-5  pt-96  pb-40 grid md:grid-cols-3 lg:grid-cols-6 gap-9 pl-16 pr-16 " }`}>
   {rendered}
      </div>
      </div>
    
  )
}

export default Cryptoccurrencies
