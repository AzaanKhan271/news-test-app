import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const langOptionArray = [
    {value : 'en' ,label : 'English'},
    {value : 'ar' ,label : 'Arabic'}
]

export const topics = ['apple' , 'meta' , 'netflix' , 'google' , 'twitter' , 'tesla' ]
