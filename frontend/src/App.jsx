import "./App.css"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Homepage from "./Components/homepage.jsx"; 
import Resultpage from "./Components/Resultpage.jsx"; 

function App() {
  return (
    <> 
    <BrowserRouter>  
      <Routes>
         <Route path="/" element={<Homepage />} /> 
         <Route path="/results" element={<Resultpage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
