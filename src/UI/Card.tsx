import { CardProps } from "../utils/interface";
import "./ui.css";

const Card = ({ data, key }: CardProps) => {
  return <div key={key}>{data.name}</div>;
};

export default Card;
