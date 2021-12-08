import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Birkismi from "./Birkismi";
import Beko from "./Beko";


function User() {
  return (
     <BrowserRouter>
       <Routes>
       <Route path="birkismi">
       <Route path="birkismi" element={<Birkismi />} />
       </Route>
       <Route path="beko" element={<Beko />} />
       </Routes>  
     </BrowserRouter>
  );
}

export default User;