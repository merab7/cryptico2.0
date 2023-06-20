import React, { useState } from 'react';
import { Select } from 'antd';
import moment from 'moment/moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Option } = Select;
const demoimage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return 'Loading';

  return (
    <div className='relative    '>
      <div className='ml-16 lg:ml-12 lg:mt-16  ' >
        {!simplified && (
          <div className='absolute mt-40 border-2 border-gray-400 rounded-lg  '>
            <Select 
               
              className='select-news shadow-xl  shadow-blue-500    '
              placeholder='Select a Crypto'
              optionFilterProp='children'
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value='Cryptocurrency'>Cryptocurrency</Option>
              {data?.data?.coins?.map((currency) => (
                <Option key={currency.id} value={currency.name}>
                  {currency.name}
                </Option>
              ))}
            </Select>
          </div>
        )}
      </div>
      <div
        className={`grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 pt-60 pb-20 bg-white ${
          simplified ? 'pt-8 px-4 pb-0' : 'pt-16 px-4'
        } mx-auto`}
      >
        {cryptoNews.value.map((news, i) => (
          <div key={i} className={`${simplified ? "shadow-xl shadow-blue-200 rounded-lg overflow-hidden hover:scale-105 lg:pl-9 lg:pr-9 -ml-16" : 'shadow-xl shadow-blue-200 rounded-lg overflow-hidden hover:scale-105 lg:pl-9 lg:pr-9 md:-ml-16' } `}>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div>
                <div className='flex flex-col gap-2  '>
                  <div className='flex justify-between items-center gap-4 p-9'>
                    <h1 className='text-sm md:text-xl font-bold'>{news.name}</h1>
                    <img className='lg:w-40 lg:h-40 object-cover' src={news?.image?.thumbnail?.contentUrl || demoimage} alt='news' />
                  </div>
                  <div className='p-9'>
                    <p className='text-sm md:text-xl'>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                  </div>
                  <div>
                    <div className='flex justify-between md:mr-16 md:ml-16 items-center whitespace-nowrap p-3'>
                      <div className='flex text-xs items-center gap-4'>
                        <img className='w-12' src={news.provider[0]?.image?.thumbnail?.contentUrl || demoimage} alt='' />
                        <p>{news.provider[0]?.name}</p>
                      </div>
                      <div>
                        <p className='text-green-600 text-sm'>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
