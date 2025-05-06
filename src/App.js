import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';
import AdminHomePage from './pages/admin/AdminHomePage';
import StudentHomePage from './pages/student/StudentHomePage';
import TeacherHomePage from './pages/teacher/TeacherHomePage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const { currentRole } = useSelector(state => state.user);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/choose" element={<ChooseUser visitor="normal" />} /> */}
        <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />
        {/* <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
        <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
        <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
        <Route path="/Adminregister" element={<AdminRegisterPage />} /> */}

        {/* Protected routes */}
        <Route
          path="/Admin/home"
          element={
            <AdminHomePage />
          }
        />
        <Route
          path="/Student/home"
          element={
            <StudentHomePage />
          }
        />

        <Route
          path="/Teacher/home"
          element={
            <TeacherHomePage />
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

  )
}

export default App