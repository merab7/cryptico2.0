
import {Routes, Route, Link} from "react-router-dom"
import Layout from "./components/Layout"
import {Landing, Cryptoccurrencies, Exchanges, News, Live } from "./components"
function App() {
  return (
    <>
    
     <main>
      <Routes >
      <Route path="/" element={<Landing/>}/>
        <Route element={<Layout/>} >
        <Route path="live" element={<Live/>}/>
        <Route path="cryptoccurrencies" element={<Cryptoccurrencies/>} />
        <Route path="exchanges" element={<Exchanges/>} />
        <Route path="news" element={<News/>} />
        </Route>
        
      </Routes>
     </main>
    </>
  )
}

export default App
