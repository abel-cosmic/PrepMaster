import { useState } from "react";
import "./App.css";
import StudentDashboard from "./UserDashboard/Student/StudentDashboard";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import Student from "./UserDashboard/Student/Student";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<LandingPage />} />
        <Route path="StudentDashboard" element={<Student />}>
          <Route index element={<StudentDashboard />} />
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
