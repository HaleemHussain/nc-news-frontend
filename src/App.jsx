import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Articles/>} />
            <Route path="/articles/:article_id" element={<Article/>} />
            <Route path="/articles/:topic" element={<Articles />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
