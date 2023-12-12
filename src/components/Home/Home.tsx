import { Box, Button, CircularProgress, InputLabel } from "@mui/material";
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
import { DynamicObject } from "../../utils/interface";
import { useState } from "react";

const Home = () => {
  const {
    language,
    updateLanguage,
    topic,
    updateTopic,
    updateSnackBarState,
    updateSnackBarMessage,
    updateSnackBarType,
  } = useAppContext();
  const { today, sevenDaysAgo } = getTodayAndSevenDaysAgo();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (topic) {
      setLoading(true);
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
          setLoading(false);
          let updatedArticles = res.articles.filter(
            (item: DynamicObject) => item.title !== "[Removed]"
          );
          localStorage.setItem("articles", JSON.stringify(updatedArticles));
          setTimeout(() => {
            window.open("/articles", "_blank");
          }, 1000);
        })
        .catch((err) => {
          setLoading(false);
          updateSnackBarMessage(err?.response?.data?.message);
          updateSnackBarState(true);
          updateSnackBarType("error");
        });
    } else {
      updateSnackBarMessage("Please Select any Topic");
      updateSnackBarType("error");
      updateSnackBarState(true);
    }
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
              updateTopic(e.target.value);
            }}
            topic={topic}
          />
        </Box>
        <Box className="fetchBtnParent">
          <Button
            sx={{ width: 130, height: 40 }}
            variant="outlined"
            onClick={handleClick}
          >
            {loading ? <CircularProgress size={20} /> : "Fetch News"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
