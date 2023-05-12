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
import StudentProfile from "./UserDashboard/Student/StudentProfile";
import StudentSecurity from "./UserDashboard/Student/StudentSecurity";
import SignupStudent from "./Signup/SignupStudent";
import SignupOrganization from "./Signup/SignupOrganization";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import SigninStudent from "./Signin/SigninStudent";
import SigninTeacher from "./Signin/SigninTeacher";
import SigninOrganization from "./Signin/SigninOrganization";
import ExamSheet from "./UserDashboard/Student/ExamSheet";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<LandingPage />} />
        <Route path="Signup" element={<Signup />}>
          <Route index element={<SignupStudent />} />
          <Route path="SignupOrganization" element={<SignupOrganization />} />
        </Route>
        <Route path="Signin" element={<Signin />}>
          <Route index element={<SigninStudent />} />
          <Route path="SigninTeacher" element={<SigninTeacher />} />
          <Route path="SigninOrganization" element={<SigninOrganization />} />
        </Route>
        <Route path="StudentDashboard" element={<Student />}>
          <Route index element={<StudentDashboard />} />
          <Route path="StudentExam" element={<StudentExam />} />
          <Route path="StudentSetting" element={<StudentSetting />}>
            <Route index element={<StudentProfile />} />
            <Route path="StudentSecurity" element={<StudentSecurity />} />
          </Route>
        </Route>
        <Route path="ExamSheet" element={<ExamSheet/>}/>
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
