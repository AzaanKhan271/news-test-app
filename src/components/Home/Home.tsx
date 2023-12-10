import { Box, Button, InputLabel } from "@mui/material";
import "./home.css";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import SelectInput from "../../UI/Select";
import { useAppContext } from "../../context/myContext";
import {
  datePipe,
  getTodayAndSevenDaysAgo,
  langOptionArray,
  topics,
} from "../../utils/constants";
import ChipRenderer from "../../UI/ChipRenderer";
import { getNewsArticles } from "../../Services/services";

const Home = () => {
  const { language, updateLanguage, topic, updateTopic } = useAppContext();
  const { today, sevenDaysAgo } = getTodayAndSevenDaysAgo();

  const handleClick = () => {
    let body = {
      language,
      topic,
      toDate: datePipe(today),
      fromDate: datePipe(sevenDaysAgo),
      apiKey: import.meta.env.VITE_API_KEY,
      sortBy: "publishedAt",
    };
    getNewsArticles(body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Box className="fetchBtnParent">
          <Button variant="outlined" onClick={handleClick}>
            Fetch News
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
