import { Box } from "@mui/material";
import { useAppContext } from "../../context/myContext";
import "./articles.css";
import Card from "../../UI/Card";

const Articles = () => {
  const { articles } = useAppContext();
  return (
    <Box>
      {articles.map((item, index) => {
        return <Card
        data={item}
        key={index}
        />;
      })}
    </Box>
  );
};

export default Articles;
