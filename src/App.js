import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import the necessary components
import AppRoutes from './routes/AppRoutes';


const App = () => {
  return (
   <BrowserRouter>
   <AppRoutes/>
   </BrowserRouter>
  );
};

export default App;
