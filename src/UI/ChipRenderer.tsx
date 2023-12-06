import { Chip, Stack } from "@mui/material";
import "./ui.css";

interface ChipRenderTypes {
    chipArray : string[],
    handleChipChange : () => void
}

const ChipRenderer = ({chipArray, handleChipChange} : ChipRenderTypes) => {
  return (
    <Stack direction="row" spacing={1}>
      {chipArray.map((item, index) => {
        return (
          <Chip
            label={item}
            key={index}
            variant="outlined"
            onClick={handleChipChange}
          />
        );
      })}
    </Stack>
  );
};

export default ChipRenderer;
