import { CardProps } from "../utils/interface";
import "./ui.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import placeHolderImg from "../assets/jk-placeholder-image.jpg";

const MediaCard = ({ data, key }: CardProps) => {
  return (
    <Card key={key} sx={{ height: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.urlToImage || placeHolderImg}
        title={data.content}
      />
      <CardContent sx={{ height: 300 }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            window.open(`${data.url}`, "_blank");
          }}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
