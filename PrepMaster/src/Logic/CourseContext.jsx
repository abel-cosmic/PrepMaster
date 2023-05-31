import { createContext, useContext, useState } from "react";

export const CourseContext = createContext();

export function useCourse() {
  return useContext(CourseContext);
}

export function CourseProvder({ children }) {
  const [course, setCourse] = useState(null);

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
}
