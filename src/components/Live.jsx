import React from 'react'
import Header from './Header'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptoccurrencies from './Cryptoccurrencies'
import News from './News'
const Live = () => {

  const {data, isFetching}=useGetCryptosQuery(10)
    const globalStats = data?.data?.stats;

    if(isFetching)return'Loading...'

  return (
    <div className='bg-white ' >
    <h1 className=' pt-64 ml-28 text-3xl font-bold text-black' >Global Crypto Stats</h1>
    <div className="grid grid-rows-2  grid-flow-row md:grid-flow-col  gap-16 gap-x-4  mt-16 ml-28 lg:w-1/3 pb-96  ">
          
    <div className='flex flex-col gap-2  ' >
       <h1 className='text-xl font-bold font-serif text-gray-500' >Total Crypto Stats</h1>
        <h1 className='text-2xl font-bold text-blue-400 '>{globalStats.total} </h1>
    </div>
    <div className='flex flex-col gap-2  ' >
       <h1 className='text-xl font-bold font-serif text-gray-500' >Total Exchanges</h1>
        <h1 className='text-2xl font-bold text-blue-400'>{millify(globalStats.totalExchanges)}</h1>
    </div>
    <div className='flex flex-col gap-2  ' >
       <h1 className='text-xl font-bold font-serif text-gray-500' >Total Market Cap</h1>
        <h1 className='text-2xl font-bold text-blue-400'>{millify(globalStats.totalMarketCap)}</h1>
    </div>
    <div className='flex flex-col gap-2  ' >
       <h1 className='text-xl font-bold font-serif text-gray-500' >Total 24h Volume</h1>
        <h1 className='text-2xl font-bold text-blue-400'>{millify(globalStats.total24hVolume)} </h1>
    </div>
    <div className='flex flex-col gap-2  ' >
       <h1 className='text-xl font-bold font-serif text-gray-500' >Total Markets</h1>
        <h1 className='text-2xl font-bold text-blue-400'>{millify(globalStats.totalMarkets)}</h1>
    </div>
  </div>
     <div className='pb-96 -mt-64  ml-16  ' >
      <h1 className=' text-3xl font-bold text-black  ml-16   '>Top 10 Cryptocurrencies</h1>
      <Cryptoccurrencies simplified />
      <Link className='underline text-blue-500 font-bold  text-2xl ml-16  ' to="../cryptoccurrencies" >Show-more</Link>
     </div>
     
     <div className='pb-96 -mt-40  ml-16  ' >
      <h1 className=' text-3xl font-bold text-black ' >Latest Crypto News</h1>
      <Link className='underline text-blue-500 font-bold  text-xl ' to="../news" >Show-more</Link>
      <News simplified />
     </div>
     
  </div>
  )
}

export default Live
