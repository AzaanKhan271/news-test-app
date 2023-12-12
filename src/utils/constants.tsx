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

export const datePipe = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

export const isArabicOrUrdu = (text: string) => {
  const urduRegex = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const containsUrduChars = urduRegex.test(text);
  const containsArabicChars = arabicRegex.test(text);
  return containsUrduChars || containsArabicChars;
};

export const getTodayAndSevenDaysAgo = (): {
  today: Date;
  sevenDaysAgo: Date;
} => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  return { today, sevenDaysAgo };
};

export const langOptionArray = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
];

export const baseUrl = `https://newsapi.org/v2`;

export const topics = [
  "apple",
  "meta",
  "netflix",
  "google",
  "twitter",
  "tesla",
];
