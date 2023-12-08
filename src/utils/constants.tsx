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

export const getTodayAndSevenDaysAgo = (): { today: Date; sevenDaysAgo: Date } => {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
  
    return { today, sevenDaysAgo };
  }

export const langOptionArray = [
    {value : 'en' ,label : 'English'},
    {value : 'ar' ,label : 'Arabic'}
]

export const baseUrl = `https://newsapi.org/v2`

export const topics = ['apple' , 'meta' , 'netflix' , 'google' , 'twitter' , 'tesla' ]
