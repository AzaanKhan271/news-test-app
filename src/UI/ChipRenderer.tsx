import {
  Chip,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
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
      <RadioGroup
        row
        aria-label="options"
        name="options"
        value={topic}
        onChange={handleChipChange}
      >
        {chipArray.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item}
              control={<Radio style={{ display: "none" }} />}
              label={
                <Chip
                  style={{ background: item === topic ? "#ccc" : "transparent" }}
                  label={item}
                  variant={"outlined"}
                  className="chipDiv"
                />
              }
            />
          );
        })}
      </RadioGroup>
    </Stack>
  );
};

export default ChipRenderer;
