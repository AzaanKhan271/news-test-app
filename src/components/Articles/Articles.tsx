import { Box } from "@mui/material";
import { useAppContext } from "../../context/myContext";
import "./articles.css";
import Card from "../../UI/Card";
import { useEffect } from "react";

const Articles = () => {
  const { articles, updateArticles } = useAppContext();
  useEffect(() => {
    const storedData = localStorage.getItem("articles");
    if (storedData) {
      const articles = JSON.parse(storedData);
      updateArticles(articles);
      localStorage.removeItem("articles");
    }
  }, []);
  return (
    <Box>
      {articles.map((item, index) => {
        return <Card data={item} key={index} />;
      })}
    </Box>
  );
};

export default Articles;
