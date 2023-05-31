import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
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
import { TeacherProvider } from "./Logic/TeacherContext";
import StudentDashboard from "./UserDashboard/Student/StudentDashboard";
import AddTeacher from "./UserDashboard/Teacher/AddTeacher";
import { CourseProvder } from "./Logic/CourseContext";
import { ScoreProvider } from "./Logic/ScoreContext";
import { UserDataProvider } from "./Logic/UserDataContext";
import AdminSetting from "./UserDashboard/Admin/AdminSetting";
import AdminProfile from "./UserDashboard/Admin/AdmiinProfile";
import AdminSecurity from "./UserDashboard/Admin/AdminSecurity";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Define your routes here */}
        <Route index element={<LandingPage />} />
        <Route element={<Signup />} path="Signup">
          <Route index element={<SignupStudent />} />
          <Route element={<SignupOrganization />} path="SignupOrganization" />
        </Route>
        <Route element={<Signin />} path="Signin">
          <Route index element={<SigninStudent />} />
          <Route element={<SigninTeacher />} path="SigninTeacher" />
          <Route element={<SigninOrganization />} path="SigninOrganization" />
        </Route>
        <Route element={<Student />} path="StudentDashboard">
          <Route index element={<StudentDashboard />} />
          <Route element={<StudentExam />} path="StudentExam" />
          <Route element={<StudentSetting />} path="StudentSetting">
            <Route index element={<StudentProfile />} />
            <Route element={<StudentSecurity />} path="StudentSecurity" />
          </Route>
        </Route>
        <Route element={<Admin />} path="AdminDashboard">
          <Route index element={<AdminDashboard />} />
          <Route element={<AdminUsers />} path="AdminUsers" />
          <Route element={<AdminDepartment />} path="AdminDepartment" />
          <Route element={<AdminSetting />} path="AdminSetting">
            <Route index element={<AdminProfile />} />
            <Route element={<AdminSecurity />} path="AdminSecurity" />
          </Route>
        </Route>
        <Route element={<Teacher />} path="TeacherDashboard">
          <Route index element={<TeacherDashboard />} />
          <Route element={<CreateExam />} path="CreateExam" />
          <Route element={<ViewExams />} path="ViewExams" />
        </Route>
        <Route element={<AddTeacher />} path="AddTeacher" />
        <Route element={<ExamSheet />} path="ExamSheet" />
        <Route element={<DisplayScore />} path="displayScore" />
        <Route element={<AddUser />} path="addUser" />
        <Route element={<EditUser />} path="edituser" />
        <Route element={<AddDepartment />} path="addDepartment" />
        <Route element={<EditDepartment />} path="editDepartment" />
        <Route element={<Logout />} path="Logout" />
        <Route element={<QuestionCreator />} path="QuestionCreator" />
      </Route>
    )
  );

  return (
    <div>
      <UserDataProvider>
        <TeacherProvider>
          <CourseProvder>
            <ScoreProvider>
              <RouterProvider router={router}>
                <Router>
                  <Route element={<Signin />} path="Signin">
                    <Route index element={<SigninStudent />} />
                    <Route element={<SigninTeacher />} path="SigninTeacher" />
                    <Route
                      element={<SigninOrganization />}
                      path="SigninOrganization"
                    />
                  </Route>
                  <Route element={<Teacher />} path="TeacherDashboard">
                    <Route index element={<TeacherDashboard />} />
                    <Route element={<CreateExam />} path="CreateExam" />
                    <Route element={<ViewExams />} path="ViewExams" />
                  </Route>
                  <Route element={<Student />} path="StudentDashboard">
                    <Route index element={<StudentDashboard />} />
                    <Route element={<StudentExam />} path="StudentExam" />
                    <Route element={<StudentSetting />} path="StudentSetting">
                      <Route index element={<StudentProfile />} />
                      <Route
                        element={<StudentSecurity />}
                        path="StudentSecurity"
                      />
                    </Route>
                  </Route>
                  <Route element={<Admin />} path="AdminDashboard">
                    <Route index element={<AdminDashboard />} />
                    <Route element={<AdminUsers />} path="AdminUsers" />
                    <Route
                      element={<AdminDepartment />}
                      path="AdminDepartment"
                    />
                    <Route element={<AdminSetting />} path="AdminSetting">
                      <Route index element={<AdminProfile />} />
                      <Route element={<AdminSecurity />} path="AdminSecurity" />
                    </Route>
                  </Route>
                  <Route element={<AddTeacher />} path="AddTeacher" />
                  <Route element={<ExamSheet />} path="ExamSheet" />
                  <Route element={<DisplayScore />} path="displayScore" />
                  <Route element={<AddUser />} path="addUser" />
                  <Route element={<EditUser />} path="edituser" />
                  <Route element={<AddDepartment />} path="addDepartment" />
                  <Route element={<EditDepartment />} path="editDepartment" />
                </Router>
              </RouterProvider>
            </ScoreProvider>
          </CourseProvder>
        </TeacherProvider>
      </UserDataProvider>
    </div>
  );
}

export default App;
