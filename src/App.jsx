import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Cryptoccurrencies,  News, Live, Cryptodetails } from "./components";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Live />} />
          <Route path="cryptoccurrencies" element={<Cryptoccurrencies />} />
          <Route path="news" element={<News />} />
          <Route path="coin/:coinId" element={<Cryptodetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
