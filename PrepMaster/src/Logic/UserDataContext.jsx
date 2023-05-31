import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();
export const useUserData = () => {
  return useContext(UserDataContext);
};

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState([]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
