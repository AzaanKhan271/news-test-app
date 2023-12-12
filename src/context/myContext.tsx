import { ReactNode, createContext, useContext, useState } from "react";
import { AppContextProps, DynamicObject } from "../utils/interface";
import { AlertColor } from "@mui/material";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lightMode, setLightMode] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [articles, setArticles] = useState<DynamicObject[]>([]);
  const [snackBarState, setSnackBarState] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");
  const [snackBarType, setSnackBarType] = useState<AlertColor>("error");

  const updateLightMode = (e: boolean) => {
    setLightMode(e);
  };

  const updateLanguage = (e: string) => {
    setLanguage(e);
  };

  const updateTopic = (e: string) => {
    setTopic(e);
  };
  const updateSnackBarState = (e: boolean) => {
    setSnackBarState(e);
  };
  const updateSnackBarType = (e: AlertColor) => {
    setSnackBarType(e);
  };
  const updateSnackBarMessage = (e: string) => {
    setSnackBarMessage(e);
  };

  const updateArticles = (e: DynamicObject[]) => {
    console.log(e);
    setArticles(e);
  };

  const contextValue: AppContextProps = {
    lightMode,
    updateLightMode,
    language,
    updateLanguage,
    topic,
    updateTopic,
    articles,
    updateArticles,
    updateSnackBarState,
    updateSnackBarType,
    updateSnackBarMessage,
    snackBarState,
    snackBarType,
    snackBarMessage,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
