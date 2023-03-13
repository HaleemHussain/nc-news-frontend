import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Articles/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
