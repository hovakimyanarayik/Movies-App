import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./layouts/Home";
import Movies from "./layouts/Movies";
import Companies from "./layouts/Companies";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="movies" >
              <Route path="" element={<Movies />} />
              <Route path=":page" element={<Movies />} />
            </Route>
            <Route path="companies" element={<Companies />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
