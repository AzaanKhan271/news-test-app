import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { useAppContext } from "./context/myContext";
import { darkTheme, lightTheme } from "./utils/constants";
import Router from "./router/Router";
import SnackBarAlert from "./components/SnackBar/SnackBarAlert";

const App = () => {
  const { lightMode } = useAppContext();
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router />
      <SnackBarAlert />
    </ThemeProvider>
  );
};

export default App;
