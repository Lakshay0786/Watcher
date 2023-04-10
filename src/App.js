import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

//redux 
import { Provider } from 'react-redux';
import store from './Store.js/store';


function App() {

  return (
    <Provider store={store}>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Outlet />
      </Box>
    </Provider>
  );
}

export default App;
