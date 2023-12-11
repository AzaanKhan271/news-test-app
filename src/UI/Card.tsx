import { CardProps } from "../utils/interface";
import "./ui.css";

const Card = ({ data, key }: CardProps) => {
  return <div key={key}>{data.title}</div>;
};

export default Card;
