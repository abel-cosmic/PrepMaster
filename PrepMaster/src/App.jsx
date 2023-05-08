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
import StudentExam from "./UserDashboard/Student/StudentExam";
import StudentSetting from "./UserDashboard/Student/StudentSetting";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<LandingPage />} />
        <Route path="StudentDashboard" element={<Student />}>
          <Route index element={<StudentDashboard />} />
          <Route path="StudentExam" element={<StudentExam />} />
          {/* <Route path="StudentSettings" element={<StudentSetting />}>
            <Route index element={<StudentProfile />} />
            <Route path="StudentSecurity" element={<StudentSecurity />} />
            <Route
              path="StudentSubscription"
              element={<StudentSubscription />}
            />
          </Route> */}
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
