import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import style from './App.module.css';
import Navbar from '@/components/Navbar';
import Login from '@/components/Auth/Login/Login';
import PrivateRoute from '@/components/PrivateRoute';
import Tasks from '@/pages/Tasks';
import Home from '@/pages/Home';
import TasksPage from '@/pages/Tasks/TasksView';
import Dashboard from '@/pages/Dashboard/Dashboard';
import SignUp from '@/components/Auth/SignUp/SignUp';
import FormActionWrapper from '@/Actions/FormAction';
import ContactUsPage from '@/pages/ContactUs/ContactUsPage';
import SettingsPage from '@/pages/Settings/SettingsPage';
function App() {
  return (
    <>
      <Router basename="/TaskMaster">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <FormActionWrapper />
                  <Home />
                </>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/my-tasks" element={<Tasks />} />
          <Route path="/my-tasks/active" element={<TasksPage />} />
          <Route path="/my-tasks/completed" element={<TasksPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
