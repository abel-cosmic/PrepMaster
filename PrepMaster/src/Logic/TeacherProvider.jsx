import { useState } from "react";
import TeacherContext from "./UserContext";

export function TeacherProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/teachers", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((teachers) => {
        const currentUser = teachers.find((teacher) => teacher.email === email);
        setUser(currentUser);
        console.log(currentUser);
        debugger;
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
