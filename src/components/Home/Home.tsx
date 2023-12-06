import { Box, InputLabel } from "@mui/material";
import "./home.css";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import SelectInput from "../../UI/Select";
import { useContext } from "react";
import { MyContext } from "../../context/myContext";
import { langOptionArray, topics } from "../../utils/constants";
import ChipRenderer from "../../UI/ChipRenderer";

const Home = () => {
  const { language, setLanguage, topic, setTopic } = useContext(MyContext);

  const handleChipClick = (e) => {
    setTopic(e.target.innerHTML)
  }
  return (
    <Box className="homeParent">
      <Box>
        <ThemeSwitch />
      </Box>
      <Box className="homeContentDiv">
        <Box className="homeHeadingParent">
          <h1>NEWS APP</h1>
        </Box>
        <SelectInput
          value={language}
          handleChange={(e) => setLanguage(e.target.value)}
          label="Select language"
          optionArray={langOptionArray}
        />
        <Box className="chipParent">
          <InputLabel>Select Topic</InputLabel>
          <ChipRenderer
            chipArray={topics}
            handleChipChange={handleChipClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
