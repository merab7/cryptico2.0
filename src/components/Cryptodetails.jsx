import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { useGetCryptoHistoryQuery } from '../services/cryptoApi';
import LineChart from './LineChart';


const { Title, Text } = Typography;
const { Option } = Select;

const Cryptodetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimeperiod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data:coinHistory} = useGetCryptoHistoryQuery({coinId, timePeriod});
  const cryptoDetails = data?.data?.coin;

  if (isFetching) {
    return 'Loading...'
  }



  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails && millify(cryptoDetails['24hVolume'])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Approved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];



  return (
    <div className='bg-white pt-60 pb-96 flex flex-col items-center  '>
      <div className='ml-9 pb-9  md:flex md:items-center md:justify-center   '>
        {cryptoDetails && (
          <Title level={2}>
            {cryptoDetails.name} ({cryptoDetails.symbol}) Price
            <p className='font-normal text-lg mt-5 text-gray-500'>
              {cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.
            </p>
            <Select
              defaultValue="7d"
              className="select-timeperiod"
              placeholder="Select Timeperiod"
              onChange={(value) => setTimeperiod(value)}
            >
              {time?.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
           <div>
            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
           </div>
          </Title>
        )}
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:gap-96  ' >
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center gap-3'>
          <h1 className='font-bold text-black text-xl '>{cryptoDetails?.name} value Statistics</h1>
          <p>An overview showing the stats of {cryptoDetails?.name}</p>
        </div>
        <div>
          {stats?.map(({ icon, title, value }) => (
            <div className=' text-xl  flex gap-10 flex-row items-center justify-between     pt-6 border p-5 cursor-pointer mt-4 hover:bg-gray-200 text-justify    ' key={title}>
              <div>{icon}</div>
               <p>{title}</p>
              <div className='font-bold text-black  '>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center pt-16 md:pt-0 '>
        <div className='flex flex-col items-center gap-3 pb-5 lg:pb-0 '>
          <h1 className='font-bold text-black text-xl  '>Other Statistics</h1>
          <p>An overview showing the stats of all cryptocurrencies </p>
        </div>
        <div>
          {genericStats?.map(({ icon, title, value }) => (
            <div className=' text-xl  flex gap-10 flex-row items-center justify-between     pt-6 border p-5 cursor-pointer mt-4 hover:bg-gray-200 text-justify    ' key={title}>
              <div>{icon}</div>
               <p>{title}</p>
              <div className='font-bold text-black  '>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>

  <div className='md:flex justify-between' >
    <div className='mt-24 ml-9 md:ml-0 w-96   ' >
        <h1 className='pb-5  text-blue-700 font-bold text-2xl cursor-pointer ' > What is {cryptoDetails.name} </h1>
        <p className='text-black text-xl  ' >{HTMLReactParser(cryptoDetails.description)}</p>
      </div>
       <div className='mt-24 ml-9 w-96 md:ml-96 cursor-pointer '>
        <h1  className='pb-5  text-blue-700 font-bold text-2xl cursor-pointer '   >{cryptoDetails.name}Links</h1>
        {cryptoDetails.links.map((link)=>(
            <div  key={link.name}  >
            <div className='flex flex-row justify-between border p-3 text-lg hover:bg-gray-300    ' >
                <h1 className='text-black '  >{link.type}</h1>
                <a  className='text-blue-500  '  href={link.url} target="_blank" rel="norefer" >
                    {link.name}
                </a>
                </div>
           </div>
        ))}
       </div>
       </div>
    </div>
  );
};

export default Cryptodetails;