import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd7f805feadmsh2f2fa68a582888bp16bd6fjsn57ccf4663df4',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl =`https://bing-news-search1.p.rapidapi.com`
const createRequset=(url)=>({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory, count})=>createRequset(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery }= cryptoNewsApi;
