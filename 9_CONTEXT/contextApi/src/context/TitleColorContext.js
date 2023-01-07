import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  //switch
};

export const TitleColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title color text:", state);

  return (
    <TitleColorProvider value={{ ...state }}>{children}</TitleColorProvider>
  );
};
