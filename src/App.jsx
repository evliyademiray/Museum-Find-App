import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Map from "./Components/Map";
import SearchCity from "./Components/SearchCity";
import Header from "./Components/Header";
import Detail from "./Components/Detail";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/searchCity" element={<SearchCity />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
