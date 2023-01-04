import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Index from "./pages/Index";
import Objects from "./pages/Objects";
import Vacancies from "./pages/Vacancies";

import { GlobalStyle } from "./styles/globalStyles";

const App = () => {
  return (
   <>
    <GlobalStyle />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/objects" element={<Objects />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/" element={<Index />} />
    </Routes>
   </>
  );
}

export default App;
