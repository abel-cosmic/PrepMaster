import { createContext, useState, useContext } from "react";

export const TeacherContext = createContext();

export function useEmail() {
  return useContext(TeacherContext);
}

export function TeacherProvider({ children }) {
  const [email, setEmail] = useState(null);

  return (
    <TeacherContext.Provider value={{ email, setEmail }}>
      {children}
    </TeacherContext.Provider>
  );
}
