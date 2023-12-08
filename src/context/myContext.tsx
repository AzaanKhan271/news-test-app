import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextProps {
  lightMode: Boolean;
  updateLightMode: (e: Boolean) => void;
  topic: string;
  updateTopic: (e: string) => void;
  language: string;
  updateLanguage: (e: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lightMode, setLightMode] = useState<Boolean>(true);
  const [language, setLanguage] = useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const updateLightMode = (e: Boolean) => {
    setLightMode(e);
  };

  const updateLanguage = (e: string) => {
    setLanguage(e);
  };

  const updateTopic = (e: string) => {
    setTopic(e);
  };

  const contextValue: AppContextProps = {
    lightMode,
    updateLightMode,
    language,
    updateLanguage,
    topic,
    updateTopic,
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
