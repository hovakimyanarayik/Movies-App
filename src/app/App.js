import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Routes from "./routes";
import { Suspense } from "react";
import SectionLoader from "./components/loaders/sectionLoader";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Suspense fallback={<SectionLoader />}>
            <Routes />
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
