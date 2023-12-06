import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { useState } from "react";
import { MyContext } from "./context/myContext";
import { darkTheme, lightTheme } from "./utils/constants";
import Router from "./router/Router";

const App = () => {
  const [lightMode, setLightMode] = useState<Boolean>(true);
  const [language, setLanguage] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  return (
    <MyContext.Provider
      value={{
        lightMode,
        setLightMode,
        language,
        setLanguage,
        topic,
        setTopic,
      }}
    >
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </MyContext.Provider>
  );
};

export default App;
