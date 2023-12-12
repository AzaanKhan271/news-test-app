import { AlertColor, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

export interface toggleBtnParams {
  value: boolean;
  setValue: (e: boolean) => void;
}

export interface OptionArrayProps {
  value: string;
  label: string;
}
export interface SelectProps {
  value: string;
  handleChange: (e: SelectChangeEvent<string>, child: ReactNode) => void;
  label: string;
  optionArray: OptionArrayProps[];
}

export interface ChipRenderTypes {
  chipArray: string[];
  handleChipChange: (
    event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  topic: string;
}

export interface CardProps {
  data: DynamicObject;
  key: number;
}

export interface DynamicObject {
  [key: string]: any;
}

export interface AppContextProps {
  lightMode: boolean;
  updateLightMode: (e: boolean) => void;
  topic: string;
  updateTopic: (e: string) => void;
  language: string;
  updateLanguage: (e: string) => void;
  articles: DynamicObject[];
  updateArticles: (e: DynamicObject[]) => void;
  updateSnackBarState: (e: boolean) => void;
  updateSnackBarType: (e: AlertColor) => void;
  updateSnackBarMessage: (e: string) => void;
  snackBarState: boolean;
  snackBarType: string;
  snackBarMessage: string;
}

export interface GetNewsArticleProps {
  topic: string;
  language: string;
  toDate: string;
  fromDate: string;
  apiKey: string | undefined;
  sortBy: string;
}
