import { useState } from "react";
import StudentContext from "./StudentContext";

export function StudentProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/students", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((students) => {
        const currentUser = students.find((student) => student.email === email);
        setUser(currentUser);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
