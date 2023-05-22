import { useState } from "react";
import "./App.css";
import StudentDashboard from "./UserDashboard/Student/StudentDashboard";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
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
import DisplayScore from "./UserDashboard/Student/DisplayScore";
import AdminDashboard from "./UserDashboard/Admin/AdminDashboard";
import Admin from "./UserDashboard/Admin/Admin";
import AdminUsers from "./UserDashboard/Admin/AdminUsers";
import AddUser from "./UserDashboard/Admin/AddUser";
import EditUser from "./UserDashboard/Admin/EditUser";
import AdminDepartment from "./UserDashboard/Admin/AdminDepartment";
import AddDepartment from "./UserDashboard/Admin/AddDepartment";
import EditDepartment from "./UserDashboard/Admin/EditDepartment";
import Logout from "./UserDashboard/Logout";
import Teacher from "./UserDashboard/Teacher/Teacher";
import TeacherDashboard from "./UserDashboard/Teacher/TeacherDashboard";
import CreateExam from "./UserDashboard/Teacher/CreateExam";
import QuestionCreator from "./UserDashboard/Teacher/QuestionCreator";
import ViewExams from "./UserDashboard/Teacher/ViewExams";

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
        <Route path="AdminDashboard" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="AdminUsers" element={<AdminUsers />} />
          <Route path="AdminDepartment" element={<AdminDepartment />} />
        </Route>
        <Route path="ExamSheet" element={<ExamSheet />} />
        <Route path="/displayScore" element={<DisplayScore />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/addDepartment" element={<AddDepartment />} />
        <Route path="/editDepartment" element={<EditDepartment />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="TeacherDashboard" element={<Teacher />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="CreateExam" element={<CreateExam />} />
          <Route path="ViewExams" element={<ViewExams />} />
        </Route>
        <Route path="/QuestionCreator" element={<QuestionCreator />} />
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
