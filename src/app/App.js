import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./layouts/Home";
import Movies from "./layouts/Movies";
import Networks from "./layouts/Networks";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/networks" element={<Networks />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
