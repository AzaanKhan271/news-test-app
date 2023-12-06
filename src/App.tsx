import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { useState } from "react";
import { MyContext } from "./context/myContext";
import { darkTheme, lightTheme } from "./utils/constants";
import Router from "./router/Router";

const App = () => {
  const [lightMode, setLightMode] = useState<Boolean>(true);
  return (
    <MyContext.Provider value={{ lightMode, setLightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </MyContext.Provider>
  );
};

export default App;
