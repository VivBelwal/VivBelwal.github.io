import Navbar from './Components/Navbar';

import './App.css';

import AllRoutes from './Components/Home/AllRoutes';
import AllContent from "./Components/Home/AllContent"
import { Box } from '@chakra-ui/react';
// import Home2 from './Components/Home/Home2';
// import Type from './Components/Home/Type';
function App() {
  return (
    <Box className="App" bg="#1A365D" w="100%">
  
     <Navbar />
 
     <AllContent />
     
     
     
    </Box>
  );
}

export default App;
