import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Index from "./pages/Index";
import Objects from "./pages/Objects";
import Vacancies from "./pages/Vacancies";
import Object from "./pages/Object";
import Certificates from "./pages/Certificates";

import { GlobalStyle } from "./styles/globalStyles";
import {RoutesPath} from "./constants/routesPath";

const App = () => {
  return (
   <>
    <GlobalStyle />
    <Routes>
      <Route path={RoutesPath.about} element={<About />} />
      <Route path={RoutesPath.contacts} element={<Contacts />} />
      <Route path={RoutesPath.objects} element={<Objects />} />
      <Route path={RoutesPath.object} element={<Object />} />
      <Route path={RoutesPath.vacancies} element={<Vacancies />} />
      <Route path={RoutesPath.certificates} element={<Certificates />} />
      <Route path={RoutesPath.index} element={<Index />} />
    </Routes>
   </>
  );
}

export default App;
