import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Article from "./components/Article";
import TopicsPage from "./components/TopicsPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Articles/>} />
            <Route path="/article/:article_id" element={<Article/>} />
            <Route path="/articles/:topic" element={<TopicsPage/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
