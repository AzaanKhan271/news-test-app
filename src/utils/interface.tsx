import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, MouseEventHandler, ReactNode } from "react";

export interface toggleBtnParams {
  value: Boolean;
  setValue: (e: Boolean) => void;
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
  handleChipChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
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
  lightMode: Boolean;
  updateLightMode: (e: Boolean) => void;
  topic: string;
  updateTopic: (e: string) => void;
  language: string;
  updateLanguage: (e: string) => void;
  articles: DynamicObject[];
  updateArticles: (e: DynamicObject[]) => void;
}

export interface GetNewsArticleProps {
  topic: string;
  language: string;
  toDate: string;
  fromDate: string;
  apiKey: string | undefined;
  sortBy: string;
}
