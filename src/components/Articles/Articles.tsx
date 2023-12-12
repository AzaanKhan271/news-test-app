import { Box, Grid } from "@mui/material";
import { useAppContext } from "../../context/myContext";
import "./articles.css";
import MediaCard from "../../UI/MediaCard";
import { useEffect } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Articles = () => {
  const { articles, updateArticles } = useAppContext();
  useEffect(() => {
    const storedData = localStorage.getItem("articles");
    if (storedData) {
      const articles = JSON.parse(storedData);
      updateArticles(articles);
    }
  }, []);
  return (
    <Box>
      <ThemeSwitch />
      <Grid xs={12} sx={{ padding: 5 }} container spacing={2}>
        {articles.map((item, index) => {
          return (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <MediaCard data={item} key={index} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Articles;
