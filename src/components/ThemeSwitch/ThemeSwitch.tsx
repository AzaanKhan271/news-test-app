import { Box } from "@mui/material";
import ToggleBtn from "../../UI/ToggleBtn";
import "./themeSwitch.css";
import { useAppContext } from "../../context/myContext";

const ThemeSwitch = () => {
  const { lightMode, updateLightMode } = useAppContext();
  return (
    <Box className="themeSwitchParent">
      <ToggleBtn value={lightMode} setValue={updateLightMode} />
    </Box>
  );
};

export default ThemeSwitch;
