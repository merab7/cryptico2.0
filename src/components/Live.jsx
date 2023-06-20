import React from 'react';
import Header from './Header';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptoccurrencies from './Cryptoccurrencies';
import News from './News';
import Lottie from "lottie-react"
import animationData from '../assets/home.json'


const Live = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';

  return (
    <div className='bg-white'>
     
      <h1 className='pt-64 md:text-3xl text-xl font-bold text-black ml-6 lg:ml-24 pb-10'>Global Crypto Stats</h1>
      <div className='flex lg:gap-64 -ml-2 ' >
      <div className='grid grid-rows-2 grid-flow-row whitespace-nowrap md:grid-flow-col gap-2 gap-x-4 mt-8 ml-8 md:ml-28 lg:w-1/3 pb-40'>
        <div className='flex flex-col gap-2'>
          <h1 className='md:text-xl font-bold font-serif text-gray-500'>Total Crypto Stats</h1>
          <h1 className='md:text-2xl font-bold text-blue-400'>{globalStats.total}</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='md:text-xl font-bold font-serif text-gray-500'>Total Exchanges</h1>
          <h1 className='md:text-2xl font-bold text-blue-400'>{millify(globalStats.totalExchanges)}</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='md:text-xl font-bold font-serif text-gray-500'>Total Market Cap</h1>
          <h1 className='md:text-2xl font-bold text-blue-400'>{millify(globalStats.totalMarketCap)}</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='md:text-xl font-bold font-serif text-gray-500'>Total 24h Volume</h1>
          <h1 className='md:text-2xl font-bold text-blue-400'>{millify(globalStats.total24hVolume)}</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='md:text-xl font-bold font-serif text-gray-500'>Total Markets</h1>
          <h1 className='md:text-2xl font-bold text-blue-400'>{millify(globalStats.totalMarkets)}</h1>
        </div>
      </div>
      <div className="flex " >
      <Link to="/">
        <Lottie className="w-60 md:w-96  mt-1 cursor-pointer" animationData={animationData} />
        </Link>
      </div>

      </div>
      <div className='ml-16'>
        <h1 className='text-3xl font-bold text-black whitespace-nowrap -ml-9 md:ml-16 -mt-5  '>Top 10 Cryptocurrencies</h1>
        <Cryptoccurrencies simplified />
        <Link className='underline text-blue-500 font-bold text-2xl ml-16' to='../cryptoccurrencies'>Show more</Link>
      </div>
      <div className='ml-16 pt-40 pb-40'>
        <h1 className='text-3xl font-bold text-black whitespace-nowrap ml-0 md:ml-16 pb-20 '>Latest Crypto News</h1>
        <News simplified />
        <Link className='underline text-blue-500 font-bold text-2xl ml-16 block mt-16  ' to='../news'>Show more</Link>
      </div>
    </div>
  );
};

export default Live;
