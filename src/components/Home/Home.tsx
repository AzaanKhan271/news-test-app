import { Box, InputLabel } from "@mui/material";
import "./home.css";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import SelectInput from "../../UI/Select";
import { useAppContext } from "../../context/myContext";
import { langOptionArray, topics } from "../../utils/constants";
import ChipRenderer from "../../UI/ChipRenderer";
import { useEffect } from "react";
import { getNewsArticles } from "../../Services/services";

const Home = () => {
  const { language, updateLanguage, topic, updateTopic } = useAppContext();
//   const { today, sevenDaysAgo } = getTodayAndSevenDaysAgo();


useEffect(()=>{
    getNewsArticles()
},[])
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
          handleChange={(e) => updateLanguage(e.target.value)}
          label="Select language"
          optionArray={langOptionArray}
        />
        <Box className="chipParent">
          <InputLabel>Select Topic</InputLabel>
          <ChipRenderer
            chipArray={topics}
            handleChipChange={(e) => {
              updateTopic(e.currentTarget.innerText);
            }}
            topic={topic}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
