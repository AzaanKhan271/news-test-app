import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { ReactNode } from "react";

interface OptionArrayProps {
  value: string;
  label: string;
}
interface SelectProps {
  value: string;
  handleChange: (e: SelectChangeEvent<string>, child: ReactNode) => void;
  label: string;
  optionArray: OptionArrayProps[];
}

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
