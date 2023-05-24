import { useState } from "react";
import TeacherContext from "./TeacherContext";

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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <TeacherContext.Provider value={user}>{children}</TeacherContext.Provider>
  );
}
