import { Chip, Stack } from "@mui/material";
import "./ui.css";
import { ChipRenderTypes } from "../utils/interface";

const ChipRenderer = ({
  chipArray,
  handleChipChange,
  topic,
}: ChipRenderTypes) => {
  return (
    <Stack
      style={{ width: "100%" }}
      className="chipRendererParent"
      direction="row"
      spacing={1}
    >
      {chipArray.map((item, index) => {
        return (
          <Chip
            label={item}
            key={index}
            variant={"outlined"}
            onClick={handleChipChange}
            style={{ background: item === topic ? "#ccc" : "transparent" }}
            className="chipDiv"
          />
        );
      })}
    </Stack>
  );
};

export default ChipRenderer;
