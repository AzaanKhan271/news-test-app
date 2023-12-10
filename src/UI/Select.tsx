import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { SelectProps } from "../utils/interface";

const SelectInput = ({
  value,
  handleChange,
  label,
  optionArray,
}: SelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {optionArray.map((item, index) => {
          return (
            <MenuItem key={index} value={item?.value}>
              {item?.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
